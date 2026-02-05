from flask import Flask, render_template, request, jsonify
from modules.content_generator import generate_content
from modules.seo_keyword import generate_keywords
from modules.hashtag_generator import generate_hashtags
from modules.content_optimizer import optimize_content
from modules.geo_optimizer import geo_optimize

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/generate_content", methods=["POST"])
def content():
    data = request.json
    product = data.get("product")
    audience = data.get("audience")
    tone = data.get("tone")
    result = generate_content(product, audience, tone)
    return jsonify({"content": result})

@app.route("/generate_keywords", methods=["POST"])
def keywords():
    data = request.json
    product = data.get("product")
    result = generate_keywords(product)
    return jsonify({"keywords": result})

@app.route("/generate_hashtags", methods=["POST"])
def hashtags():
    data = request.json
    topic = data.get("topic")
    result = generate_hashtags(topic)
    return jsonify({"hashtags": result})

@app.route("/optimize_content", methods=["POST"])
def optimizer():
    data = request.json
    content_text = data.get("content")
    result = optimize_content(content_text)
    return jsonify({"optimized_content": result})

@app.route("/geo_optimize", methods=["POST"])
def geo():
    data = request.json
    content_text = data.get("content")
    result = geo_optimize(content_text)
    return jsonify({"geo_content": result})

if __name__ == "__main__":
    app.run(debug=True)
