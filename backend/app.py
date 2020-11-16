from flask import Flask, render_template, jsonify, g
from flask_cors import 	CORS 


DEBUG = True
PORT = 8000

# Initializes an instance the Flask class 
# this starts the website! 
app = Flask(__name__)

CORS(spreadsheets, origins=['http://localhost:3000'], supports_credentials=True) 

app.register_blueprint(spreadsheets, url_prefix='/api/v1/spreadsheets')

# default url
@app.route('/')
def index():
	return "Hello, World!"

# Runs the app when the program starts! 
if __name__ == "__main__":
	app.run(debug=True)

