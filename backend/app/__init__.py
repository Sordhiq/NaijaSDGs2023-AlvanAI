# app/__init__.py
from flask import Flask

app = Flask(__name__)

from app.routes.routes import routes_bp  # Import the Blueprint
app.register_blueprint(routes_bp)
