# web_app/__init__.py
import streamlit as st
import os
from dotenv import load_dotenv

load_dotenv()

def create_web_app():
    st.set_page_config(page_title="Alvan AI")
    return st

