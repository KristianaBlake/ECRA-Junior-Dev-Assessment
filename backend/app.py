from flask import Flask, render_template, jsonify, g


DEBUG = True
PORT = 8000

# Initializes an instance the Flask class 
# this starts the website! 
app = Flask(__name__)

# default url
@app.route('/')
def index():
	return "Hello, World!"

# Runs the app when the program starts! 
if __name__ == "__main__":
	app.run(debug=True)