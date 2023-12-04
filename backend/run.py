# run.py
from app import app
from app.services.openai import init_openai
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize OpenAI with API key
init_openai()

if __name__ == '__main__':
    # Run the Flask application
    app.run(host='0.0.0.0', port=4000)
