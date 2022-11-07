DIR="H:\Projects\GraphLinq\GraphLinq.ScrapperAPI"
OUT="H:\Projects\GraphLinq\GraphLinq.ScrapperAPI\data"

cd $DIR source/default-token-list
git pull
npm run build
mv build/uniswap-default.tokenlist.json $OUT

cd $DIR source/quickswap-default-token-list
git pull
npm run build
mv build/quickswap-default.tokenlist.json $OUT

cd $OUT
curl -X 'GET' 'https://api.coingecko.com/api/v3/coins/list?include_platform=true' -H 'accept: application/json' > coingecko.json

cd $OUT
curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link' -H 'accept: application/json' > 1inch.json

cd $OUT
curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://erc20.cmc.eth.link' -H 'accept: application/json' > cmc200.json

cd $OUT
curl -X 'GET' 'https://wispy-bird-88a7.uniswap.workers.dev/?url=http://stablecoin.cmc.eth.link' -H 'accept: application/json' > cmcStableCoin.json

