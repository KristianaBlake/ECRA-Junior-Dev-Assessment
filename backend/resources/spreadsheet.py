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

# Find the spreadsheet by name and open first sheet
sheet =  client.open("Copy of PrivateNCESForDevs").sheet1

list_of_hashes = sheet.get_all_records()
print(list_of_hashes)
