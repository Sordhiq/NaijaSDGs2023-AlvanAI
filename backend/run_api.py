# run_api.py
import os
from dotenv import load_dotenv
from api import create_api_app  # Fix the import

load_dotenv()

if __name__ == "__main__":
    api_app = create_api_app()
    api_app.run(debug=True)
