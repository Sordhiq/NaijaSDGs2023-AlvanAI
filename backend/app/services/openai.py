# app/openai_integration.py
import os
import openai

def init_openai():
    api_key = os.getenv("OPENAI_SECRET_KEY")

    if not api_key:
        raise ValueError("OpenAI API key not found in environment variables.")

    openai.api_key = api_key

def predict_external_api(input_data, available_routes):
    init_openai()  # Initialize OpenAI with API key

    prompt = f"Given the input: {input_data}\nPredict the most suitable route from {', '.join(available_routes)}."

    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=50
    )

    predicted_route = response['choices'][0]['text'].strip()

    # Placeholder values for params and token (replace with actual logic)
    params = {"param1": "value1", "param2": "value2"}
    token = "your_api_token"

    return predicted_route, params, token
