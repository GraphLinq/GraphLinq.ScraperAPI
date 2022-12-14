import json
import mysql.connector
import subprocess
import os.path
import time
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
print("Welcome to the GraphLinq Exchange Icon Fetcher. This must be run AFTER the job server has initialized. The first download from LCW can be long.")
print()

print("Grabbing LCW Exchange Data From Database...")
print()
sql = "SELECT name, png64, png128, webp64, webp128, code FROM lcwexchanges"
mycursor.execute(sql)
myresult = mycursor.fetchall()

for x in myresult:
    name = x[0]
    png64 = x[1]
    png128 = x[2]
    webp64 = x[3]
    webp128 = x[4]
    code = x[5]

    png128 = "https://lcw.nyc3.cdn.digitaloceanspaces.com/production/exchanges/" + code + ".png"

    print("Grabbing {}...".format(code))
    directory = "../data/exchangess/"
    #d64 = directory + "64x64/"
    d128 = directory + "128x128/"
    #f64 = d64 + code + ".png"
    f128 = d128 + code + ".png"
    #w64 = d64 + code + ".webp"
    #w128 = d128 + code + ".webp"

    #if not os.path.exists(d64):
    #    os.makedirs(d64)
    if not os.path.exists(d128):
        os.makedirs(d128)

    if not os.path.exists(f128):
        subprocess.Popen(["wget", "-O", f128, png128])
        print("Grabbed 128x128: {}.png!".format(code))
        time.sleep(0.2)
    else:
        print("{}.png 128x128 already exists!".format(code))

    # if not os.path.exists(f128):
    #     subprocess.Popen(["wget", "-O", f128, png128])
    #     print("Grabbed 128x128: {}.png!".format(code))
    #     time.sleep(0.2)
    # else:
    #     print("{}.png 128x128 already exists!".format(code))

    # if not os.path.exists(w64):
    #     subprocess.Popen(["wget", "-O", w64, webp64])
    #     print("Grabbed 64x64: {}.webp!".format(code))
    #     time.sleep(0.2)
    # else:
    #     print("{}.webp 64x64 already exists!".format(code))

    # if not os.path.exists(w128):
    #     subprocess.Popen(["wget", "-O", w128, webp128])
    #     print("Grabbed 128x128: {}.webp!".format(code))
    #     time.sleep(0.2)
    # else:
    #     print("{}.webp 128x128 already exists!".format(code))
    print()
    print("Done with {}!".format(code))
    print()

print("Done")
print()
