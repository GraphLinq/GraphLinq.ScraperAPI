#!/bin/bash
echo
echo "GraphLinq Scraper API Cron Job"
echo
echo "Update Uniswap JSON Data..."
eval cd default-token-list && git pull && npm run build && mv /Users/john/Desktop/GraphLinq.ScraperAPI/build/uniswap-default.tokenlist.json /Users/john/Desktop/GraphLinq.ScraperAPI/data/uniswap-default.tokenlist.json
echo "Update Uniswap JSON Data... Done"
echo "Update QuickSwap JSON Data..."
eval cd quickswap-default-token-list && git pull && npm run build && mv /Users/john/Desktop/GraphLinq.ScraperAPI/build/quickswap-default.tokenlist.json /Users/john/Desktop/GraphLinq.ScraperAPI/data/quickswap-default-token-list.json
echo "Update QuickSwap JSON Data... Done"
echo "Delete Old curled JSON Data..."
eval cd ../data && rm -rf *.json
echo "Delete Old curled JSON Data... Done"
echo "Download New curled JSON Data..."
eval curl -X 'GET' 'https://api.coingecko.com/api/v3/coins/list?include_platform=true' -H 'accept: application/json' > /Users/john/Desktop/GraphLinq.ScraperAPI/data/coingecko.json
eval curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link' -H 'accept: application/json' > /Users/john/Desktop/GraphLinq.ScraperAPI/data/1inch.json
eval curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://erc20.cmc.eth.link' -H 'accept: application/json' > /Users/john/Desktop/GraphLinq.ScraperAPI/data/cmc200.json
eval curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://stablecoin.cmc.eth.link' -H 'accept: application/json' > /Users/john/Desktop/GraphLinq.ScraperAPI/data/cmcStableCoin.json
echo "Download New curled JSON Data... Done"
echo "GraphLinq Scraper API Cron Job COMPLETE"
echo
