# app/__init__.py
# api/__init__.py
from flask import Flask
from dotenv import load_dotenv

load_dotenv()

def create_api_app():
    app = Flask(__name__)
    return app

