#~/bin/bash
git clone git@github.com:Uniswap/tokenlists-org.git

cd source/
git clone git@github.com:Uniswap/default-token-list.git
cd default-token-list
npm install
npm run build
cd ..

git clone https://github.com/sameepsi/quickswap-default-token-list
cd quickswap-default-token-list
npm install
npm run build
cd ..

curl -X 'GET' 'https://api.coingecko.com/api/v3/coins/list?include_platform=true' -H 'accept: application/json' > ../data/coingecko.json

curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link' -H 'accept: application/json' > ../data/1inch.json

curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://erc20.cmc.eth.link' -H 'accept: application/json' > ../data/cmc200.json

curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://stablecoin.cmc.eth.link' -H 'accept: application/json' > ../data/cmcStableCoin.json

