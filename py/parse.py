import json
import mysql.connector

mydb = mysql.connector.connect(
  host="127.0.0.1",
  user="graphlinq",
  password="graphlinq",
  database="livecoinwatch"
)

mycursor = mydb.cursor()

f = open('../data/quickswap-default.tokenlist.json')
d = json.load(f)
for i in d['tokens']:
    #print(i['name'])
    sql = "INSERT INTO quickswaps (name, address, symbol, decimals, chainId, logoURI) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (i['name'], i['address'], i['symbol'], i['decimals'], i['chainId'], i['logoURI'])
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "1-record inserted.")
f.close()

f = open('../data/uniswap-default.tokenlist.json')
d = json.load(f)
for i in d['tokens']:
    #print(i['name'])
    sql = "INSERT INTO uniswaps (name, address, symbol, decimals, chainId, logoURI) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (i['name'], i['address'], i['symbol'], i['decimals'], i['chainId'], i['logoURI'])
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "2-record inserted.")
f.close()

f = open('../data/cmcStableCoin.json')
d = json.load(f)
for i in d:
#    #print(i['name'])
    sql = "INSERT INTO uniswaps (name, address, symbol, decimals, chainId, logoURI) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (i['name'], i['address'], i['symbol'], i['decimals'], i['chainId'], i['logoURI'])
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "3-record inserted.")
f.close()

