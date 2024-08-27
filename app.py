from flask import Flask, render_template

app = Flask(__name__, static_folder="my-portfolio/build/static", template_folder="my-portfolio/build")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
