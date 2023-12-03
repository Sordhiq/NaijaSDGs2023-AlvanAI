# web_app/app.py
import streamlit as st
import requests
import os
from dotenv import load_dotenv

load_dotenv()

st.title("Alvan AI")

# Get the base API URL from the environment variable
api_base_url = os.getenv("API_BASE_URL")

# Streamlit sidebar for user input
user_input = st.text_input("You:", "Ask me anything...")

# Function to interact with the deployed API
def get_model_response(user_input):
    api_url = f"{api_base_url}/chat"
    response = requests.post(api_url, json={"user_input": user_input})
    return response.json()["model_response"]

# Streamlit main area for displaying chat
if st.button("Send"):
    st.text("User: " + user_input)
    model_response = get_model_response(user_input)
    st.text("AI: " + model_response)
