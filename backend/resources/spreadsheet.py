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

# Finds the workbook by my name and opens the first sheet
# need to use client name in order to open workbook
sheet =  client.open("Copy of PrivateNCESForDevs").sheet1

# prints hashed list of schools
list_of_schools = sheet.get_all_records()

# iterated over the indeces of list of schools 
# printed keys and values 
# for i in range(len(list_of_schools)):
# 	print(i, list_of_schools[i])

# this print the values not the keys. The Values are listed (A-AD) 
# for school in list_of_schools:
# 	for key in school:
# 		print(school[key])

# this also print the value not the keys 
# for school in list_of_schools:
# 	for value in school:
# 		print(school[value])

# for school in list_of_schools:
# 	print(school)

# prints keys in list of schools 
# for school in list_of_schools:
# 	keys = school.keys()
# 	print(keys)

# prints values in list of schools
for school in list_of_schools:
	values = school.values()
	print(values)



