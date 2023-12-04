# app/routes/routes.py
from flask import Blueprint, request, jsonify
import re

import logging
logging.basicConfig(level=logging.DEBUG)

# Create a Blueprint for the routes
routes_bp = Blueprint('routes', __name__)

# Define constants for route URLs
VERIFY_ACCOUNT_ROUTE = "http://13.49.245.110:3000/api/v1/secure/transfer/verify-account"
ENTER_PIN_ROUTE = "http://13.49.245.110:3000/api/v1/secure/transfer/is-enter-pin"

session = {}

@routes_bp.route('/predict_api', methods=['POST'])
def predict_api():
    try:
        logging.debug("Session:")
        request_data = request.get_json()

        if 'input_data' not in request_data:
            return jsonify({"error": "Missing 'input_data' in the request"}), 400

        input_data = request_data['input_data']

        if 'previous_route' in session and session['previous_route'] == VERIFY_ACCOUNT_ROUTE:
            if input_data.lower() == 'yes':
                response_data = {"request": "POST", "params": {"response": input_data}, "route": ENTER_PIN_ROUTE}
            else:
                response_data = extract_info(input_data)

        elif 'previous_route' in session and session['previous_route'] == ENTER_PIN_ROUTE:
            if input_data.lower() == 'yes':
                response_data = {"request": "POST", "params": {"response": input_data}, "route": ENTER_PIN_ROUTE}
            else:
                # Extract information or set response based on your logic
                response_data = {"request": "POST", "params": {"amount": 5000, "account_number": "12345678901", "bank_name": "Zenith Bank"}, "route": VERIFY_ACCOUNT_ROUTE}

        else:
            result = extract_info(input_data)


            # Update the session with the current route and result
            session['previous_route'] = VERIFY_ACCOUNT_ROUTE
            session['result'] = result

            response_data = result

        return jsonify(response_data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

def extract_info(text):
    # pattern_one = re.compile(r'(\d{10}).*?naira', re.IGNORECASE)
    pattern_one = re.compile(r'(\d{10})\D*(\d+)\D*(\b\w+\s?\w*\b)', re.IGNORECASE)
    match = pattern_one.search(text)

    if match:
        account_number = match.group(1)
        amount = match.group(2)
        amount = float(match.group(2)) if match.group(2) else None
        bank_name = match.group(3) if match.group(3) else ""

        return {"request": "POST", "params": {"amount": amount, "account_number": account_number, "bank_name": bank_name}, "route": VERIFY_ACCOUNT_ROUTE}

    else:
        bank_name = ""  # Placeholder value
        return {"redirect": False, "message": "What would you like us to do for you?"}
