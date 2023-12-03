# app/routes/api.py
from flask import Blueprint, request, jsonify
from api.models.model import Model

api_bp = Blueprint('api', __name__)
model = Model()

@api_bp.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    user_input = data.get('user_input', '')

    # Process user input and get model response
    model_response = model.generate_response(user_input)

    return jsonify({'model_response': model_response})
