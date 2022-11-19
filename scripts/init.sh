#!/bin/bash
echo
echo "GraphLinq Scraper API Install Script"
echo
echo "Grabbing Submodules..."
cd ..
eval git submodule update --init --recursive
echo "Grabbing Submodules... Done"
echo "Installing Submodule NPM Packages..."
eval git submodule foreach yarn
echo "Installing Submodule NPM Packages... Done"
echo "Building Submodules..."
eval git submodule foreach yarn build
echo "Building Submodules... Done"
echo "Move Submodule JSON Data..."
eval mv data/default-token-list/build/uniswap-default.tokenlist.json data/uniswap-default.tokenlist.json
eval mv data/quickswap-default-token-list/build/quickswap-default.tokenlist.json data/quickswap-default.tokenlist.json
echo "Move Submodule JSON Data... Done"
echo "Curl JSON data..."
eval curl -X 'GET' 'https://api.coingecko.com/api/v3/coins/list?include_platform=true' -H 'accept: application/json' > data/coingecko.json
eval curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link' -H 'accept: application/json' > data/1inch.json
eval curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://erc20.cmc.eth.link' -H 'accept: application/json' > data/cmc200.json
eval curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://stablecoin.cmc.eth.link' -H 'accept: application/json' > data/cmcStableCoin.json
eval curl -X 'GET' 'https://gateway.pinata.cloud/ipfs/QmdKy1K5TMzSHncLzUXUJdvKi1tHRmJocDRfmCXxW5mshS' -H 'accept: application/json' > data/pancake.json
for jsonfile in data/*.json ;
do
    echo "Processing $jsonfile"
    jq . $jsonfile > data/temp.json
    eval mv data/temp.json $jsonfile
    echo "Done"
done
echo "Done"
echo "You should now run py/parse.py to import the data into the database"
echo
