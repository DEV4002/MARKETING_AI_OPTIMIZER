import os, requests
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("OPENROUTER_API_KEY")
API_URL = "https://openrouter.ai/api/v1/chat/completions"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

def generate_hashtags(topic):
    prompt = f"Generate 10 trending Instagram hashtags for '{topic}'."

    data = {
        "model": "openrouter/free",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 60
    }

    try:
        response = requests.post(API_URL, headers=headers, json=data).json()
        return response['choices'][0]['message']['content']
    except Exception as e:
        return f"Error generating hashtags: {e}"
