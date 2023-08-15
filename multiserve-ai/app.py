from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello from Flask!'

@app.route('/api/homepage')
def get_data():
    return {'message': 'MultiServe.AI', 'description': 'MultiServe.AI allows you to leverage AI on a multitude of different structured and unstructured data sources, such as Youtube, Reddit, Excel, and more.'}

