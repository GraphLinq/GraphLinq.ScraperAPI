#!/bin/bash

echo "Initializing..."

cd ../data

git clone git@github.com:Uniswap/tokenlists-org.git

git clone https://github.com/sameepsi/quickswap-default-token-list

git clone git@github.com:Uniswap/default-token-list.git


cd default-token-list
npm install
npm run build
mv build/uniswap-default.tokenlist.json ../uniswap-default.tokenlist.json
cd ..

cd quickswap-default-token-list
npm install
npm run build
mv build/quickswap-default.tokenlist.json ../quickswap-default.tokenlist.json
cd ..

cd tokenlists-org
ls

cd ..

curl -X 'GET' 'https://api.coingecko.com/api/v3/coins/list?include_platform=true' -H 'accept: application/json' > coingecko.json

curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link' -H 'accept: application/json' > 1inch.json

curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://erc20.cmc.eth.link' -H 'accept: application/json' > cmc200.json

curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://stablecoin.cmc.eth.link' -H 'accept: application/json' > cmcStableCoin.json

echo "Done"
echo "You should now run py/parse.py to import the data into the database"
echo
