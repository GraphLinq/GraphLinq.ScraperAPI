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
print("Welcome to the GraphLinq Icon Fetcher. This must be run AFTER the job server has initialized. The first download from LCW can be long.")
print()

print("Grabbing LCW Data From Database...")
print()
sql = "SELECT code, png32, png64, webp32, webp64 FROM livecoinwatches"
mycursor.execute(sql)
myresult = mycursor.fetchall()

for x in myresult:
    code = x[0]
    png32 = x[1]
    png64 = x[2]
    webp32 = x[3]
    webp64 = x[4]
    print("Grabbing {}...".format(code))
    directory = "../data/icons/"
    d32 = directory + "32x32/"
    d64 = directory + "64x64/"
    f32 = d32 + code + ".png"
    f64 = d64 + code + ".png"
    w32 = d32 + code + ".webp"
    w64 = d64 + code + ".webp"

    if not os.path.exists(d32):
        os.makedirs(d32)
    if not os.path.exists(d64):
        os.makedirs(d64)

    if not os.path.exists(f32):
        subprocess.Popen(["wget", "-O", f32, png32])
        print("Grabbed 32x32: {}.png!".format(code))
        time.sleep(2.7)
    if os.path.exists(f32):
        print("{}.png 32x32 already exists!".format(code))

    if not os.path.exists(f64):
        subprocess.Popen(["wget", "-O", f64, png64])
        print("Grabbed 64x64: {}.png!".format(code))
        time.sleep(2.7)
    if os.path.exists(f64):
        print("{}.png 64x64 already exists!".format(code))

    if not os.path.exists(w32):
        subprocess.Popen(["wget", "-O", w32, webp32])
        print("Grabbed 32x32: {}.webp!".format(code))
        time.sleep(2.2)
    if os.path.exists(w32):
        print("{}.webp 32x32 already exists!".format(code))

    if not os.path.exists(w64):
        subprocess.Popen(["wget", "-O", w64, webp64])
        print("Grabbed 64x64: {}.webp!".format(code))
        time.sleep(2.2)
    if os.path.exists(w64):
        print("{}.webp 64x64 already exists!".format(code))
    print("Done with {}!".format(code))
    print

print("Done")
print()
