import json
import mysql.connector

mydb = mysql.connector.connect(
  host="",
  user="",
  password="",
  database=""
)

mycursor = mydb.cursor()

f = open('quickswap-default.tokenlist.json')
d = json.load(f)
for i in d['tokens']:
    #print(i['name'])
    sql = "INSERT INTO qstokens (name, address, symbol, decimals, chainId, logoURI) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (i['name'], i['address'], i['symbol'], i['decimals'], i['chainId'], i['logoURI'])
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "record inserted.")

f.close()
