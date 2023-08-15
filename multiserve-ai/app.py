from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello from Flask!'

@app.route('/api/data')
def get_data():
    return {'message': 'Data from Flask!'}
