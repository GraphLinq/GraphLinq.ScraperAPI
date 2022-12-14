import json
import mysql.connector
import subprocess
import os.path
import time
from decouple import config
import requests

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
print("Welcome to the GraphLinq Whitepaper Fetcher. This must be run AFTER the job server has initialized. The first download from LCW can be long.")
print()

print("Grabbing LCW Data From Database...")
print()
sql = "SELECT code, linkPaper FROM livecoinwatches"
mycursor.execute(sql)
myresult = mycursor.fetchall()

for x in myresult:
    code = x[0]
    link = x[1]
    print("Grabbing {}...".format(code))
    directory = "../data/whitepapers/"
    d = directory + code + "/"
    f = code

    if link == None:
        print("No whitepaper for {}!".format(code))
        print()
        print("Done with {}!".format(code))
        print()
    else:
        print("Whitepaper for {} found!".format(code))
        print()

        #r = requests.get(link)
        #content_type = r.headers.get('content-type')

        # This is shit because many links have the wrong content type
        # if 'application/pdf' in content_type:
        #     print("PDF")
        # elif 'text/html' in content_type:
        #     print("HTML - parse for PDF links")
        #     print(link)
        # else:
        #     print('Unknown type: {}'.format(content_type))
        #     print(link)

        if link.endswith(".pdf"):
            print("PDF YES")
            print(link)
            if not os.path.exists(d):
                os.makedirs(d)
            #if not os.path.exists(f):
                subprocess.Popen(["wget", "-P", d, link])
                print("Grabbed Whitepaper: {}!".format(code))
                time.sleep(0.5)
        else:
            print("PDF NO")
            print(link)
        print("Done with {}!".format(code))
    print("Next...")
    time.sleep(.5)
#     quit()
#     with open('myfile'+ext, 'wb') as f:
#         f.write(r.raw.read())

#     if not os.path.exists(d):
#         os.makedirs(d)

#     if not os.path.exists(f):
#         subprocess.Popen(["wget", "-O", f, png32])
#     print("Grabbed Whitepaper: {}!".format(code))
#     time.sleep(0.2)
# else:
#     print("{}.png 32x32 already exists!".format(code))

# if not os.path.exists(f64):
#     subprocess.Popen(["wget", "-O", f64, png64])
#     print("Grabbed 64x64: {}.png!".format(code))
#     time.sleep(0.2)
# else:
#     print("{}.png 64x64 already exists!".format(code))

# if not os.path.exists(w32):
#     subprocess.Popen(["wget", "-O", w32, webp32])
#     print("Grabbed 32x32: {}.webp!".format(code))
#     time.sleep(0.2)
# else:
#     print("{}.webp 32x32 already exists!".format(code))

# if not os.path.exists(w64):
#     subprocess.Popen(["wget", "-O", w64, webp64])
#     print("Grabbed 64x64: {}.webp!".format(code))
#     time.sleep(0.2)
# else:
#     print("{}.webp 64x64 already exists!".format(code))
# print()
# print("Done with {}!".format(code))
# print()

print("Done")
print()
