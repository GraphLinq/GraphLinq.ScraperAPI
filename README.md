# GraphLinq Scrapper API

Collect, update, and maintain a list of token addresses, contract addresses, etc. for easy lookup.

Private Repo.

For use in the GraphLinq App and IDE

## Supported Networks

| Network   | Version | Description        |
| --------- | ------- | ------------------ |
| QuickSwap | v2      | Default Token Link |
| Uniswap   | v2      | Token List         |
| Uniswap   | v3      | Token List         |
| CoinGecko | x       | Token List         |
|           |         |                    |

## API Endpoints

Base Url: https://data.graphlinq.io/v1

| Endpoint   | Method | Use |
| ---------- | ------ | --- |
| /coingecko | GET    |     |
| /uniswapv2 | GET    |     |
| /uniswapv3 | GET    |     |
| /quickswap | GET    |     |
|            |        |     |

## Database

Backend database is MariaDB but could be stored in SQLite2. Search function would make caching this difficult.
