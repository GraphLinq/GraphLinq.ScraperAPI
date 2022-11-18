#!/bin/bash

echo
echo "GraphLinq Scraper API Cron Job"
echo

#!/bin/bash

cd ../data

cd default-token-list
git pull
npm run build
mv build/uniswap-default.tokenlist.json ../uniswap-default.tokenlist.json
cd ..

cd quickswap-default-token-list
git pull
npm run build
mv build/quickswap-default.tokenlist.json ../quickswap-default.tokenlist.json
cd ..

cd tokenlists-org
ls

cd ..

rm -rf *.json

curl -X 'GET' 'https://api.coingecko.com/api/v3/coins/list?include_platform=true' -H 'accept: application/json' > coingecko.json

curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link' -H 'accept: application/json' > 1inch.json

curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://erc20.cmc.eth.link' -H 'accept: application/json' > cmc200.json

curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://stablecoin.cmc.eth.link' -H 'accept: application/json' > cmcStableCoin.json

echo
echo "GraphLinq Scraper API Cron Job COMPLETE"
echo
