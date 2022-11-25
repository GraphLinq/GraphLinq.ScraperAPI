import json
import mysql.connector
from decouple import config

HOST = config('DB_HOST')
USER = config('DB_USER')
PASS = config('DB_PASS')
BASE = config('DB_BASE')

mydb = mysql.connector.connect(
  host=HOST,
  user=USER,
  password=PASS,
  database=BASE
)

mycursor = mydb.cursor()

print()
print("Welcome to the GraphLinq Initial Parse (INSERT ONLY)")
print()


print("Parsing QuickSwap data...")
f = open('../data/quickswap-default.tokenlist.json')
d = json.load(f)
for i in d['tokens']:
    sql = "INSERT INTO quickswaps (name, address, symbol, decimals, chainId, logoURI) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (i['name'], i['address'], i['symbol'], i['decimals'], i['chainId'], i['name'])
    mycursor.execute(sql, val)
    mydb.commit()
f.close()
print("Parsing QuickSwap data... Done")


print("Parsing Uniswap data...")
f = open('../data/uniswap-default.tokenlist.json')
d = json.load(f)
for i in d['tokens']:
    sql = "INSERT INTO uniswaps (name, address, symbol, decimals, chainId, logoURI) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (i['name'], i['address'], i['symbol'], i['decimals'], i['chainId'], i['name'])
    mycursor.execute(sql, val)
    mydb.commit()
f.close()
print("Parsing Uniswap data... Done")


print("Parsing CMC200 data...")
f = open('../data/cmc200.json')
d = json.load(f)
for i in d['tokens']:
    sql = "INSERT INTO coinmarketcap200s (chainId, address, symbol, name, decimals) VALUES (%s, %s, %s, %s, %s)"
    val = (i['chainId'], i['address'], i['symbol'], i['name'], i['decimals'])
    mycursor.execute(sql, val)
    mydb.commit()
f.close()
print("Parsing CMC200 data... Done")


print("Parsing CMCstableCoin data...")
f = open('../data/cmcStableCoin.json')
d = json.load(f)
for i in d['tokens']:
    sql = "INSERT INTO coinmarketcapstables (chainId, address, symbol, name, decimals) VALUES (%s, %s, %s, %s, %s)"
    val = (i['chainId'], i['address'], i['symbol'], i['name'], i['decimals'])
    mycursor.execute(sql, val)
    mydb.commit()
f.close()
print("Parsing CMCstableCoin data... Done")


print("Parsing 1inch data...")
f = open('../data/1inch.json')
d = json.load(f)
for i in d['tokens']:
    sql = "INSERT INTO oneinches (address, chainId, name, symbol, decimals, logoURI) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (i['address'], i['chainId'], i['name'], i['symbol'], i['decimals'], i['logoURI'])
    mycursor.execute(sql, val)
    mydb.commit()
f.close()
print("Parsing 1inch data... Done")


print("Parsing PancakeSwap data...")
f = open('../data/pancake.json')
d = json.load(f)
for i in d['tokens']:
    sql = "INSERT INTO pancakeswaps (name, address, symbol, decimals, chainId, logoURI) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (i['name'], i['address'], i['symbol'], i['decimals'], i['chainId'], i['logoURI'])
    mycursor.execute(sql, val)
    mydb.commit()
f.close()
print("Parsing PancakeSwap data... Done")


# print("Parsing CoinGecko data...")
# f = open('../data/coingecko.json')
# d = json.load(f)
# x = ""
# for i in d:
#     for p in i['platforms']:
#         # Check if CoinGeckoPlatformType exists. If not, insert it.
#         ##sql = "SELECT * FROM coingeckoplatformtypes WHERE platform = %s"
#         ##mycursor.execute(sql, p)
#         ##myresult = mycursor.fetchall()
#         print("checking")
#         print(p)
#         print("done")
#         #for x in p:
#         #    print("PlatformTypes Available")
#         #    print(x)
#             #mycursor.execute(sql, x)
#             #myresult = mycursor.fetchall()
#         print("ok")
#         x = x + p + ","
#     sql = "INSERT INTO coingeckos (coinGeckoId, symbol, name, platforms) VALUES (%s, %s, %s, %s)"
#     val = (i['id'], i['symbol'], i['name'], x)
#     mycursor.execute(sql, val)
#     mydb.commit()
#     x = ""
# f.close()
# print("Parsing CoinGecko data... Done")

# Needs to be recursively parsed individually inside the blockchains folder
# print("Parsing trustwallet data...")
# f = open('../data/trustwallet.json')
# d = json.load(f)
# for i in d:
#     sql = "INSERT INTO trustwallets (name, address, symbol, decimals, chainId, logoURI) VALUES (%s, %s, %s, %s, %s, %s)"
#     val = (i['name'], i['address'], i['symbol'], i['decimals'], i['chainId'], i['logoURI'])
#     mycursor.execute(sql, val)
#     mydb.commit()
# f.close()
# print("Parsing trustwallet data... Done")


print("Done")
print("Run `npm run start` to start the API and Jobs server")
print()
