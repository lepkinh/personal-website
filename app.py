from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/building')
def projects():
    return render_template('building.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/this-page')
def resume():
    return render_template('this-page.html')

if __name__ == '__main__':
    app.run(debug=True)
