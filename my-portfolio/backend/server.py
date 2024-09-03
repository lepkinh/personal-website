from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import io

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

# oad the trained model
model = load_model('digit_recognition_model.h5')

if __name__ == '__main__':
    app.run(debug=True)

# Serve the React frontend
@app.route('/')
def serve_frontend():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/computervision')
def serve_computervision():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400
    
    image_file = request.files['image']
    image = Image.open(io.BytesIO(image_file.read())).convert('L')
    image = image.resize((28, 28))
    image_array = np.array(image).reshape(-1, 28, 28, 1) / 255.0
    image_array = 1 - image_array  # Invert the colors
    
    prediction = model.predict(image_array)
    predicted_digit = np.argmax(prediction)
    
    return jsonify({'prediction': int(predicted_digit)})

# Fallback to serve React app for any other route
@app.route('/<path:path>')
def fallback(path):
    return send_from_directory(app.static_folder, path)

if __name__ == "__main__":
    app.run(debug=True)