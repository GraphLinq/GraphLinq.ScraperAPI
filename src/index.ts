import "./db";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { services } from "./services";
import crud, {
  sequelizeCrud,
  sequelizeSearchFields,
} from "express-sequelize-crud";
import dotenv from "dotenv";
import { jobs, prices } from "./jobs";
import { CoinGecko, Quickswap } from "./models";
import { Sequelize, DataTypes, Op } from "sequelize";
import Bull from "bull";

// Get config
dotenv.config();

// Database
const dbBase = process.env.DB_BASE;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;

// Check if needed variables are set for DB
if (!dbBase || !dbUser || !dbPass || !dbHost) {
  throw new Error("The database connection must be defined in your .env!");
}

// Create database connection
const sequelize = new Sequelize(dbBase, dbUser, dbPass, {
  host: dbHost,
  dialect: "mariadb",
  //logging: (...msg) => console.log(msg),
  //logging: console.log,
  //logging: console.re.log,
  //logging: false,
  //logging:  msg => console.re.debug('[mariadb]:', msg)
  logging: (...msg) => console.log("[mysqlsrv]: [API Logger]: ", msg),
});

// Say hello!
console.log("[starting]: [GraphLinq Scraper API v1.0]");

// Set our app to use express
const app = express();
app.use(express.json());

// Get our API settings
const port = process.env.API_PORT || 8000;
const host = process.env.API_HOST || "http://localhost";

// Get our CORS options
//const corsOrigin = process.env.CORS_ORIGIN || ["http://localhost:3000"];

// Add our Middlewares
//const whitelist = corsOrigin;
//const corsOptions = {
//  origin: function (origin: any, callback: any) {
//    if (whitelist.indexOf(origin) !== -1) {
//      callback(null, true);
//    } else {
//      console.re.log('[blue][api_serv]:[/blue] [yellow][CORS: Rejected Request] FROM: script kiddie][/yellow]');
//      callback(new Error("Not allowed by CORS")); // UNDO THIS!!!!!
//      //callback(null, true);
//    }
//  },
//  exposeHeaders: ['Content-Length', 'Content-Range'],
//};
//app.use(cors(corsOptions));

// Admin Routes :)
app.use(crud("/v2/coingeckos", sequelizeCrud(CoinGecko)));
app.use(crud("/v2/qstokens", sequelizeCrud(Quickswap)));
/*
app.use(crud('/v2/rates', sequelizeCrud(Rate)));

app.use(
  crud('/v2/test', {
    getList: ({ filter, limit, offset, order }) =>
      Rate.findAndCountAll({ limit, offset, order, where: filter }),
  }));

app.use(
  crud('/v2/test/search', {
    ...sequelizeCrud(Rate),
    search: sequelizeSearchFields(Rate, ['symbol', 'tokenAddress']),
  }))
*/

const apiServer = app.listen(port, () =>
  console.log(
    `[api_serv]: [Log GraphLinq Scraper API Server Listening] [${host}:${port}]`
  )
);

/*
const serverRunnerrQueue = new Bull(
  'serverRunner', {
    redis:{
      port: 6379,
      host: '127.0.0.1',
      password: process.env.REDIS_PASS
    }
  }
);

const serverParserQueue = new Bull(
  'serverParser', {
    redis:{
      port: 6379,
      host: '127.0.0.1',
      password: process.env.REDIS_PASS
    }
  }
);

async () => {
  await serverParserQueue.obliterate({ force: true });
  await serverRunnerrQueue.obliterate({ force: true });
}


serverParserQueue.process(async function (job: any, done: any) {
  console.log('[queuemgr]: [Queue Manager]: +++ ', job.data.startMsg);
  await prices();
  console.log('[queuemgr]: [Queue Manager]: +++ ', job.data.endMsg);
  done();

});


serverRunnerrQueue.process(async function (job: any, done: any) {
  console.log('[queuemgr]: [Queue Manager]: +++ ', job.data.startMsg);
  await jobs();
  console.log('[queuemgr]: [Queue Manager]: +++ ', job.data.endMsg);
  done();
});

serverParserQueue.add(
  {
    startMsg: '[lime][Price Monitor Job Server Started][/lime]',
    endMsg: '[lime][Price Monitor Job Server Finished][/lime]',
  },
  {
    repeat:
    {
      every: 300000
      //cron: '15 * * * *'
    }
  }
);


serverRunnerrQueue.add(
  {
    startMsg: '[lime][ServerParser Job Runner Starting][/lime]',
    endMsg: '[lime][ServerParser Job Runner Finished][/lime]',
  },
  {
    repeat:
    {
      every: 600000
      //cron: '* * * * *'
    }
  }
);
*/
