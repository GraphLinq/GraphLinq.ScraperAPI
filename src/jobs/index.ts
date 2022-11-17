import Bull from "bull";
import axios from "axios";
import { sequelize } from "../db";
import { CoinGecko, CoinMarketCap, LiveCoinWatch, Uniswap, Quickswap } from "../models";
const { Op } = require("sequelize");
const CG = require("coingecko-api");
const CGClient = new CG();
import dotenv from "dotenv";
import consolere from "console-remote-client";

// Get config
dotenv.config();

// Console Remote
consolere.connect({
  server: process.env.CONSOLE_RE_SERVER,
  channel: process.env.CONSOLE_RE_CHANNEL,
  redirectDefaultConsoleToRemote: true,
  disableDefaultConsoleOutput: false,
});

const sleepTime = 666;
const lcwMaxLimit = 21000;
const lcwOffset = 1000;

//////////////////////////////////////////////////////////////////////
/////////////////////////////    JOBS    /////////////////////////////
//////////////////////////////////////////////////////////////////////

export const jobs = async () => {
  try {
    // Jobs Start
    await sleep(sleepTime);
    console.re.warn("[jobstart]: [GraphLinq Scraper API Job Server Is Running]");

    await sleep(sleepTime);
    console.re.warn("[jobs_run]: [GraphLinq Scraper API Job LiveCoinWatch]");

    // get LCW data and insert/update into DB
    const data = await getLiveCoinWatchData("USD", "rank", "ascending", 0, 10, true);
    await sleep(sleepTime);
    //await insertLiveCoinWatchData(data);
    console.re.warn("[jobsdone]: [GraphLinq Scraper API Job Server Finished]");
    return true;
  } catch (err) {
    console.error("[ERROR!!!]: ", err);
    return false;
  }
};

/////////////////////////////////////////////////////////////////////
///////////////////////////// FUNCTIONS /////////////////////////////
/////////////////////////////////////////////////////////////////////

// Sleep
async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Get LiveCoinWatch Data (coins/list)
async function getLiveCoinWatchData(currency: string, sort: string, order: string, offset: number, limit: number, meta: boolean) {
  try {
    // Body Data
    const data = {
      "currency": "USD",
      "sort": "rank",
      "order": "ascending",
      "offset": 0,
      "limit": 10,
      "meta": true
    }
    await sleep(sleepTime);
    // Axios config
    var config = {
      method: 'post',
      url: 'https://api.livecoinwatch.com/coins/list',
      headers: {
        'x-api-key': 'e445bbe9-5a54-4925-a17f-dfb4c36a09fa'
      },
      body: JSON.stringify(data)
    };
    await sleep(sleepTime);
    // Axios Request
    axios(config)
    .then(function (response) {
      //console.re.warn(JSON.stringify(response.data));
      //const ins = insertLiveCoinWatchData(JSON.stringify(response.data));
      sleep(sleepTime);
      sleep(sleepTime);
      const ins = insertLiveCoinWatchData(response.data);

      return response.data;
    })
    .catch(function (error) {
      console.re.warn(error);
    });


  } catch (error) {
    console.error("err", error);
  }
}

async function insertLiveCoinWatchData(data: any) {
  //console.re.warn("DATA!!!!", data);
  await sleep(sleepTime);

  data.forEach(async (item: any) => {
    console.re.warn("ITEM!!!!", item);
    await sleep(sleepTime);

    if ((item.name = null) || (item.name = undefined) || (item.name = "")) {
      item.name = "NA";
    }

    let [lcw, created] = await LiveCoinWatch.findOrCreate({
      where: { code: item.code },
      defaults: {
        id: null,
        name: item.name,
        symbol: item.symbol,
        rank: item.rank,
        age: item.age,
        color: item.color,
        png32: item.png32,
        png64: item.png64,
        webp32: item.webp32,
        webp64: item.webp64,
        exchanges: item.exchanges,
        markets: item.markets,
        pairs: item.pairs,
        categories: item.categories,
        allTimeHighUSD: item.allTimeHighUSD,
        circlulatingSupply: item.circlulatingSupply,
        totalSupply: item.totalSupply,
        maxSupply: item.maxSupply,
        linkWebsite: item.linkWebsite,
        linkPaper: item.linkWhitepaper,
        linkTwitter: item.linkTwitter,
        linkReddit: item.linkReddit,
        linkTelegram: item.linkTelegram,
        linkDiscord: item.linkDiscord,
        linkMedium: item.linkMedium,
        linkInstagram: item.linkInstagram,
        code: item.code,
        rate: item.rate,
        volume: item.volume,
        cap: item.cap,
        deltaHour: item.deltaHour,
        deltaDay: item.deltaDay,
        deltaWeek: item.deltaWeek,
        deltaMonth: item.deltaMonth,
        deltaQuarter: item.deltaQuarter,
        deltaYear: item.deltaYear
      }
    });
    if (created) {
      console.re.warn('[dbinsert]: [Record did not exist]: INSERT:');
      await sleep(sleepTime);
    } else {
      console.re.warn('[dbupdate]: A RECORD EXISTED AND WE NEED TO UPDATE IT');
      await sleep(sleepTime);
      let newLCW = await LiveCoinWatch.update({
        name: item.name,
        symbol: item.symbol,
        rank: item.rank,
        age: item.age,
        color: item.color,
        png32: item.png32,
        png64: item.png64,
        webp32: item.webp32,
        webp64: item.webp64,
        exchanges: item.exchanges,
        markets: item.markets,
        pairs: item.pairs,
        categories: item.categories,
        allTimeHighUSD: item.allTimeHighUSD,
        circlulatingSupply: item.circlulatingSupply,
        totalSupply: item.totalSupply,
        maxSupply: item.maxSupply,
        linkWebsite: item.linkWebsite,
        linkPaper: item.linkWhitepaper,
        linkTwitter: item.linkTwitter,
        linkReddit: item.linkReddit,
        linkTelegram: item.linkTelegram,
        linkDiscord: item.linkDiscord,
        linkMedium: item.linkMedium,
        linkInstagram: item.linkInstagram,
        rate: item.rate,
        volume: item.volume,
        cap: item.cap,
        deltaHour: item.deltaHour,
        deltaDay: item.deltaDay,
        deltaWeek: item.deltaWeek,
        deltaMonth: item.deltaMonth,
        deltaQuarter: item.deltaQuarter,
        deltaYear: item.deltaYear
      }, {
        where: {
          code: item.code
        }
      });
    }
    await sleep(sleepTime);
    console.re.warn('[dbupdate]: [Record already exists update it]');
    return true;
  });
}
