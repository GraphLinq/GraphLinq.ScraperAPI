# GraphLinq Scraper API

Collect, update, and maintain a list of token addresses, contract addresses, site specific ticker and naming, etc. for easy lookup.

For use in the GraphLinq App and IDE

## Requirements

In addition to the base requirements needed to run the Nodejs package the following additional packages are required:

- MariaDB 10 Server
- Python3
- Redis

## Install

`git clone git@github.com:GraphLinq/GraphLinq.ScraperAPI.git`

`cd GraphLinq.ScrapperAPI`

`npm install`

`cd scripts`

`chmod +x init.sh`

`./init.sh`

## Run

Back in the project root directory we can launch the api server and scraper job server by running:

`npm run start` will start the job server and api

`npm run dev` will start the job and api server in dev mode / hot reloads

`npm run build` build production site

## Jobs

- LiveCoinWatch /coins/list
- Parse JSON

## Crons

There are two cron systems. First is the standard built in crontab that comes with the Operating System. This is used to manage keeping the JSON data and github repos up-to-date. The second is a Redis Bull Queue which runs when you start the server. This is used to manage jobs inside the server.

### OS Cron

The repositories and JSON files are updated often. The cron job will keep these up-to-date.

Edit your crontab with `crontab -e`

Here is an example of running the cron every 12 hours and redirecting the output to a log file.

`* */12 * * * cd /path/to/GraphLinq.ScraperAPI/cron && ./update_data.sh > /logs/cron.log`

### Redis Bull Queue Cron

This cron can handle on demand actions, task queing, crons, jobs, and more. Connect to the Redis CLI to view.

After `AUTH` login run `KEYS *` to see all keys stored in Redis or run `KEYS bull*` to only see the bull related keys.

Same output:

1. bull:serverRunner:repeat:57d4290a94fbc055251fbe3b536dbc44:1668799650000
2. bull:serverRunner:delayed
3. bull:serverRunner:repeat
4. bull:serverRunner:repeat:57d4290a94fbc055251fbe3b536dbc44:1668799800000
5. bull:serverRunner:completed
6. bull:serverRunner:id

If you need to clear the queue run `FLUSHALL`

## Supported Networks / Data Sources

The following data sources are available:

- CoinMarketCap Top 200
- CoinMarketCap Stable Coins
- CoinGecko All Tokens
- LiveCoinWatch All Tokens
- QuickSwap Default List
- Uniswap Defaul List

## Database

The database is build on inital run so there is no need to supply a .sql file.
