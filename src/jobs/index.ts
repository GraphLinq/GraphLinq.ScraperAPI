import Bull from "bull";
import axios from "axios";
import { sequelize } from "../db";
import {
  CoinGecko,
  CoinMarketCap200,
  CoinMarketCapStable,
  LiveCoinWatch,
  Uniswap,
  Quickswap,
  LcwExchange,
  LcwFiat,
} from "../models";
const { Op } = require("sequelize");
const CG = require("coingecko-api");
const CGClient = new CG();
import dotenv from "dotenv";
import consolere from "console-remote-client";
import { response } from "express";

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

const lcwMaxLimit = 23000;
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

    await sleep(sleepTime);
    console.re.log("[jobs_run]: [GraphLinq Scraper API Job LiveCoinWatch DISABLED]");


    //const currDB = await LiveCoinWatch.count();
    //console.re.debug("[currDB]: ", currDB);
    var currDB = 0;
    await sleep(sleepTime);
do while (currDB < lcwMaxLimit) {

    // Axios config
    var config = {
      method: "post",
      url: process.env.LCW_API + "/coins/list",
      headers: {
        "x-api-key": process.env.LCW_KEY,
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
    currDB = currDB + 1000;

    response.data.forEach(async (item: any) => {
      //console.re.warn("ITEM!!!!", item);
      //item.links.forEach(async (litem: any) => {
      //item.links = "[" + item.links + "]";
      //console.re.warn("LI", item.links);
      //var z = JSON.parse(item.links);
      //console.re.warn("Z", z);
      //item.links = "[" + item.links + "]";
       //(item.links);
      //JSON.parse(item.links).forEach(async (litem: any) => {
      //  if (litem == "website") {
      //    console.log("LIW!", litem);
      //  }
      //});
      //item.links.forEach(async (litem: any) => {
      var litem = item.links;
      var delta = item.delta;
      console.log("LIW!", delta.hour);
      //});

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
          linkWebsite: litem.website,
          linkPaper: litem.whitepaper,
          linkTwitter: litem.twitter,
          linkReddit: litem.reddit,
          linkTelegram: litem.telegram,
          linkDiscord: litem.discord,
          linkMedium: litem.medium,
          linkInstagram: litem.instagram,
          code: item.code,
          rate: item.rate,
          volume: item.volume,
          cap: item.cap,
          deltaHour: delta.hour,
          deltaDay: delta.day,
          deltaWeek: delta.week,
          deltaMonth: delta.month,
          deltaQuarter: delta.quarter,
          deltaYear: delta.year,
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
            linkWebsite: litem.website,
            linkPaper: litem.whitepaper,
            linkTwitter: litem.twitter,
            linkReddit: litem.reddit,
            linkTelegram: litem.telegram,
            linkDiscord: litem.discord,
            linkMedium: litem.medium,
            linkInstagram: litem.instagram,
            rate: item.rate,
            volume: item.volume,
            cap: item.cap,
            deltaHour: delta.hour,
            deltaDay: delta.day,
            deltaWeek: delta.week,
            deltaMonth: delta.month,
            deltaQuarter: delta.quarter,
            deltaYear: delta.year,
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
    await sleep(sleepTime);
    await sleep(sleepTime);
    await sleep(sleepTime);
  } while(currDB < lcwMaxLimit);

    await sleep(sleepTime);
    console.re.log("[complete]: [GraphLinq Scraper API Job LiveCoinWatch]");
    await sleep(sleepTime);



//////////////////////////////////////////////////////////////////////

    await sleep(sleepTime);
    console.re.log("[jobs_run]: [GraphLinq Scraper API Job LiveCoinWatch Exchanges]");

    //const curreDB = await LcwExchange.count();
    //console.re.debug("[currDB]: ", curreDB);

    await sleep(sleepTime);

    // Axios config
    var confige = {
      method: "post",
      url: process.env.LCW_API + "/exchanges/list",
      headers: {
        "x-api-key": process.env.LCW_KEY,
      },
      data: {
        currency: "USD",
        sort: "code",
        order: "ascending",
        offset: 0,
        limit: 500,
        meta: true,
      },
    };
    //console.re.debug("[debugger]:", JSON.stringify(data));
    await sleep(sleepTime);
    // Axios Request
    const responsee = await axios(confige);
    console.re.debug("[debugger]:", JSON.stringify(responsee.data));
    await sleep(sleepTime);

    responsee.data.forEach(async (item: any) => {
      console.re.warn("name", item.name);
      if (item.name == null) {
        console.re.warn("HERE1!!!!");
      }
      if (item.name == "") {
        console.warn("HERE2!!!!");
      }
      console.re.warn("ITEM!!!!", item);
      await sleep(sleepTime);
      await sleep(sleepTime);
      let [lcw, created] = await LcwExchange.findOrCreate({
        where: { code: item.code },
        defaults: {
          name: item.name,
          png64: item.png64,
          png128: item.png128,
          webp64: item.webp64,
          webp128: item.webp128,
          code: item.code,
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
        let newLCW = await LcwExchange.update(
          {
            name: item.name,
            png64: item.png64,
            png128: item.png128,
            webp64: item.webp64,
            webp128: item.webp128,
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
    console.re.log("[complete]: [GraphLinq Scraper API Job LiveCoinWatch Exchanges]");
    await sleep(sleepTime);



//////////////////////////////////////////////////////////////////////
await sleep(sleepTime);
console.re.log("[jobs_run]: [GraphLinq Scraper API Job LiveCoinWatch Fiats]");

//const curreDB = await LcwExchange.count();
//console.re.debug("[currDB]: ", curreDB);

await sleep(sleepTime);

// Axios config
var configee = {
  method: "post",
  url: process.env.LCW_API + "/fiats/all",
  headers: {
    "x-api-key": process.env.LCW_KEY,
  },
  data: {},
};
//console.re.debug("[debugger]:", JSON.stringify(data));
await sleep(sleepTime);
// Axios Request
const responseee = await axios(configee);
console.re.debug("[debugger]:", JSON.stringify(responseee.data));
await sleep(sleepTime);

responseee.data.forEach(async (item: any) => {
  console.re.warn("name", item.name);
  if (item.symbol == null) {
    console.re.warn("HERE1!!!!");
    item.symbol = "Unknown";
  }
  if (item.name == "") {
    console.warn("HERE2!!!!");
  }
  var c = "";
  if (item.countries == null) {
    c = "Unknown";
  }
  if (item.countries == "") {
    c = "Unknown";
  }
  var s = "";
  if (item.symbol == null) {
    s = "Unknown";
  }
  if (item.symbol == "") {
    s = "Unknown";
  }
  item.countries.forEach(async (country: any) => {
    console.re.warn("country", country);
    s = s + country + ",";
  });

  console.re.warn("ITEM!!!!", item);
  await sleep(sleepTime);
  await sleep(sleepTime);
  let [lcw, created] = await LcwFiat.findOrCreate({
    where: { code: item.code },
    defaults: {
      countries: c,
      flag: item.flag,
      name: item.name,
      symbol: s,
      code: item.code,
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
    let newLCW = await LcwFiat.update(
      {
        countries: item.countries,
        flag: item.flag,
        name: item.name,
        symbol: item.symbol,
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
console.re.log("[complete]: [GraphLinq Scraper API Job LiveCoinWatch Fiats]");
await sleep(sleepTime);

//////////////////////////////////////////////////////////////////////



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
