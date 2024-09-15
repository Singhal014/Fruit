from flask import Flask, request, jsonify
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)

faqs = [
    {"id": 1, "question": "What are the benefits of apples?", "answer": "Apples are nutritious and offer various health benefits."},
    {"id": 2, "question": "How many types of bananas exist?", "answer": "There are over 1,000 types of bananas."}
]

@app.route('/api/faqs', methods=['GET', 'POST'])
def faq_list():
    if request.method == 'GET':
        return jsonify(faqs)
    if request.method == 'POST':
        new_faq = request.get_json()
        new_faq['id'] = len(faqs) + 1
        faqs.append(new_faq)
        return jsonify(new_faq), 201

@app.route('/api/faqs/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def faq_detail(id):
    faq = next((item for item in faqs if item["id"] == id), None)
    if faq is None:
        return '', 404
    if request.method == 'GET':
        return jsonify(faq)
    if request.method == 'PUT':
        data = request.get_json()
        faq.update(data)
        return jsonify(faq)
    if request.method == 'DELETE':
        faqs.remove(faq)
        return '', 204

if __name__ == '__main__':
    app.run(debug=True)
