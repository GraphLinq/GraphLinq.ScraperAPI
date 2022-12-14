import "./db";
import cors from "cors";
import express from "express";
import crud, {
  sequelizeCrud,
  sequelizeSearchFields,
} from "express-sequelize-crud";
import dotenv from "dotenv";
import { jobs } from "./jobs";
import {
  CoinGecko,
  Quickswap,
  LiveCoinWatch,
  Uniswap,
  CoinMarketCap200,
  CoinMarketCapStable,
  Pancakeswap,
  OneInch,
  LcwExchange,
  LcwFiat,
} from "./models";
import { Sequelize, DataTypes, Op } from "sequelize";
import Bull from "bull";
import consolere from "console-remote-client";

// Get config
dotenv.config();

// Get debug mode
const debugMode = process.env.CONSOLE_RE_DEBUG;
if (debugMode) {
  (function () {
    var oldLog = console.log;
    console.re.debug = function (message) {
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
      oldLog.apply(console, arguments);
    };
  })();
}

// Console Remote
consolere.connect({
  server: process.env.CONSOLE_RE_SERVER,
  channel: process.env.CONSOLE_RE_CHANNEL,
  redirectDefaultConsoleToRemote: true,
  disableDefaultConsoleOutput: false,
});
console.re.clear();

// Database
const dbBase = process.env.DB_BASE || "database";
const dbUser = process.env.DB_USER || "user";
const dbPass = process.env.DB_PASS || "password";
const dbHost = process.env.DB_HOST || "localhost";

// Create database connection
const sequelize = new Sequelize(dbBase, dbUser, dbPass, {
  host: dbHost,
  dialect: "mariadb",
  logging: (msg) => console.re.debug("[maria_db]:", msg),
});

// Say hello!
console.re.log("[starting]: [GraphLinq Scraper API v1.0]");

// Set our app to use express
const app = express();
app.use(express.json());

// Get our API settings
const port = process.env.API_PORT || 8000;
const host = process.env.API_HOST || "http://localhost";

// Get our CORS options
console.re.debug("[corsopts]:", process.env.CORS_ORIGIN);
const corsOrigin = process.env.CORS_ORIGIN || ["http://localhost:8000"];

// Add our Middlewares
const whitelist = corsOrigin;
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.re.debug(
        "[api_serv]: [CORS: Rejected Request] FROM: script kiddie]"
      );
      //callback(new Error("Not allowed by CORS")); // UNDO THIS!!!!!
      callback(null, true);
    }
  },
  exposeHeaders: ["Content-Length", "Content-Range"],
};
app.use(cors(corsOptions));

// Routes for our API
app.use(crud("/v2/coingeckos", sequelizeCrud(CoinGecko)));
app.use(crud("/v2/quickswaps", sequelizeCrud(Quickswap)));
app.use(crud("/v2/livecoinwatches", sequelizeCrud(LiveCoinWatch)));
app.use(crud("/v2/uniswaps", sequelizeCrud(Uniswap)));
app.use(crud("/v2/coinmarketcap200s", sequelizeCrud(CoinMarketCap200)));
app.use(crud("/v2/coinmarketcapstables", sequelizeCrud(CoinMarketCapStable)));
app.use(crud("/v2/pancakeswaps", sequelizeCrud(Pancakeswap)));
app.use(crud("/v2/oneinches", sequelizeCrud(OneInch)));
app.use(crud("/v2/lcwexchanges", sequelizeCrud(LcwExchange)));
app.use(crud("/vd/lcwfiats", sequelizeCrud(LcwFiat)));

app.use(
  crud("/v2/search", {
    getList: ({ filter, limit, offset, order }) =>
      LiveCoinWatch.findAndCountAll({ limit, offset, order, where: filter }),
  })
);

app.use(
  crud("/v2/test/search", {
    ...sequelizeCrud(LiveCoinWatch),
    search: sequelizeSearchFields(LiveCoinWatch, ["name", "code"]),
  })
);

// Start our server
const apiServer = app.listen(port, () =>
  console.re.log(
    `[api_serv]: [GraphLinq Scraper API Server Listening] [${host}:${port}]`
  )
);

// Redis Bull Queue
const serverRunnerrQueue = new Bull("serverRunner", {
  redis: {
    port: process.env.REDIS_PORT,
    host: "127.0.0.1",
    password: process.env.REDIS_PASS,
  },
});

// Clear the queue
async () => {
  await serverRunnerrQueue.obliterate({ force: true });
};

// Add jobs to the queue
serverRunnerrQueue.process(async function (job: any, done: any) {
  await jobs();
  done();
});

// Run job on a cron schedule
serverRunnerrQueue.add(
  {
    startMsg: "",
    endMsg: "",
  },
  {
    repeat: {
      every: 590000,
      //cron: process.env.JOB_SERVER_CRON,
    },
  }
);
