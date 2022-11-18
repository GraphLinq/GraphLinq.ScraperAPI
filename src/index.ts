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
  CoinMarketCap,
  LiveCoinWatch,
  Uniswap,
} from "./models";
import { Sequelize, DataTypes, Op } from "sequelize";
import Bull from "bull";
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
console.re.clear();

// Database
const dbBase = process.env.DB_BASE;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;

// Check if needed variables are set for DB
if (!dbBase || !dbUser || !dbPass || !dbHost) {
  throw new Error("The database connection must be defined in your .env!");
}

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
const corsOrigin = process.env.CORS_ORIGIN || ["http://localhost:3333"];

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
app.use(crud("/v2/qstokens", sequelizeCrud(Quickswap)));
app.use(crud("/v2/coinmarketcaps", sequelizeCrud(CoinMarketCap)));
app.use(crud("/v2/livecoinwatchs", sequelizeCrud(LiveCoinWatch)));
app.use(crud("/v2/uniswaps", sequelizeCrud(Uniswap)));

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
    port: 6379,
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
  console.re.log("[queuemgr]: [Queue Manager]: +++ ", job.data.startMsg);
  await jobs();
  console.re.log("[queuemgr]: [Queue Manager]: +++ ", job.data.endMsg);
  done();
});

// Run job on a cron schedule
serverRunnerrQueue.add(
  {
    startMsg: "[ServerParser Job Runner Starting]",
    endMsg: "[ServerParser Job Runner Finished]",
  },
  {
    repeat: {
      every: 150000,
      //cron: '* * * * *'
    },
  }
);
