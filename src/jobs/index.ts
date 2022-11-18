import Bull from "bull";
import axios from "axios";
import { sequelize } from "../db";
import {
  CoinGecko,
  CoinMarketCap,
  LiveCoinWatch,
  Uniswap,
  Quickswap,
} from "../models";
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

// Get debug mode
const debugMode = process.env.CONSOLE_RE_DEBUG;
if (debugMode) {
  (function () {
    var oldLog = console.log;
    console.re.debug = function (message) {
      // DO MESSAGE HERE.
      oldLog.apply(console, arguments);
    };
  })();
}

// Get warn mode
const warnMode = process.env.CONSOLE_RE_WARN;
if (warnMode) {
  (function () {
    var oldLog = console.log;
    console.re.warn = function (message) {
      // DO MESSAGE HERE.
      oldLog.apply(console, arguments);
    };
  })();
}

const sleepTime = 3666;

const lcwMaxLimit = 21000;
const lcwOffset = 1000;
let lcwCurrOff = 0;

//////////////////////////////////////////////////////////////////////
/////////////////////////////    JOBS    /////////////////////////////
//////////////////////////////////////////////////////////////////////

export const jobs = async () => {
  try {
    // Jobs Start
    await sleep(sleepTime);
    console.re.log("[jobstart]: [GraphLinq Scraper API Job Server Is Running]");

    await sleep(sleepTime);
    console.re.log("[jobs_run]: [GraphLinq Scraper API Job LiveCoinWatch]");

    const currDB = await LiveCoinWatch.count();
    console.re.debug("[currDB]: ", currDB);

    await sleep(sleepTime);

    // Axios config
    var config = {
      method: "post",
      url: "https://api.livecoinwatch.com/coins/list",
      headers: {
        "x-api-key": "e445bbe9-5a54-4925-a17f-dfb4c36a09fa",
      },
      data: {
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: currDB,
        limit: 1000,
        meta: true,
      },
    };
    //console.re.debug("[debugger]:", JSON.stringify(data));
    await sleep(sleepTime);
    // Axios Request
    const response = await axios(config);
    console.re.debug("[debugger]:", JSON.stringify(response.data));
    await sleep(sleepTime);

    response.data.forEach(async (item: any) => {
      //console.re.warn("ITEM!!!!", item);
      await sleep(sleepTime);
      await sleep(sleepTime);
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
          categories: item.code,
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
          deltaYear: item.deltaYear,
        },
      });
      if (created) {
        console.re.warn("[dbinsert]: [Record did not exist]: INSERT:");
        await sleep(sleepTime);
      } else {
        console.re.warn(
          "[dbupdate]: A RECORD EXISTED AND WE NEED TO UPDATE IT"
        );
        await sleep(sleepTime);
        let newLCW = await LiveCoinWatch.update(
          {
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
            categories: item.code,
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
            deltaYear: item.deltaYear,
          },
          {
            where: {
              code: item.code,
            },
          }
        );
      }
    });

    await sleep(sleepTime);
    console.re.log("[complete]: [GraphLinq Scraper API Job LiveCoinWatch]");
    await sleep(sleepTime);
    await sleep(sleepTime);
    console.re.log("[jobsdone]: [GraphLinq Scraper API Job Server Finished]");
  } catch (err) {
    console.error("[ERROR!!!]: ", err);
  }
};

/////////////////////////////////////////////////////////////////////
///////////////////////////// FUNCTIONS /////////////////////////////
/////////////////////////////////////////////////////////////////////

// Sleep
async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
