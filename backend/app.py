import flask
from flask import Flask, jsonify, request, g 
# imports Google Spreasheet packages
import gspread
# import Gspread Authorization
from google.oauth2.service_account import Credentials 

# use creds to create a client to interact with the Google Drive API
scopes = [
	'https://www.googleapis.com/auth/spreadsheets',
	'https://www.googleapis.com/auth/drive'
]

credentials = Credentials.from_service_account_file('client_secret.json', scopes=scopes)

client = gspread.authorize(credentials)

DEBUG = True
PORT = 8000

app = Flask(__name__)
# app = flask.Flask(__name__)
# app.config["DEBUG"] = True


# Finds the workbook by my name and opens the first sheet
# need to use client name in order to open workbook
sheet =  client.open("Copy of PrivateNCESForDevs").sheet1

# prints hashed list of schools
list_of_schools = sheet.get_all_records()

@app.route('/', methods=['GET'])
def home():
	return 'Hello World!'

@app.route('/api/v1/schools/all', methods=['GET'])
def api_all():
	return jsonify(list_of_schools)


if __name__ == '__main__':
	app.run(debug=DEBUG, port=PORT)
# app.run()