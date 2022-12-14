import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
import {
  CoinGecko,
  Quickswap,
  LiveCoinWatch,
  Uniswap,
  CoinMarketCap200,
  CoinMarketCapStable,
  Pancakeswap,
  OneInch,
  CoinGeckoPlatformType,
  CoinGeckoPlatform,
  LcwExchange,
  LcwFiat,
} from "./models";
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

// Create database connection
const sequelize = new Sequelize(dbBase, dbUser, dbPass, {
  host: dbHost,
  dialect: "mariadb",
  logging: (msg) => console.re.debug("[maria_db]:", msg),
});

console.re.debug("[dbtables]: Sequelize tables...");

console.re.debug("[dbtables]: Sequelize table CoinGecko");
CoinGecko.init(
  {
    coinGeckoId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    symbol: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    platforms: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "coingecko",
    sequelize,
    timestamps: false,
  }
);

console.re.debug("[dbtables]: Sequelize table Quickswap");
Quickswap.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    symbol: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    decimals: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    chainId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    logoURI: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "quickswap",
    sequelize,
    timestamps: false,
  }
);

console.re.debug("[dbtables]: Sequelize table LiveCoinWatch");
LiveCoinWatch.init(
  {
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    symbol: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    rank: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    age: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    color: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    png32: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    png64: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    webp32: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    webp64: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    exchanges: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    markets: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    pairs: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    categories: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    allTimeHighUSD: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    circlulatingSupply: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    totalSupply: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    maxSupply: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    linkWebsite: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    linkPaper: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    linkTwitter: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    linkReddit: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    linkTelegram: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    linkDiscord: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    linkMedium: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    linkInstagram: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    code: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    rate: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    volume: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    cap: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    deltaHour: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    deltaDay: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    deltaWeek: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    deltaMonth: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    deltaQuarter: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    deltaYear: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
  },
  {
    modelName: "livecoinwatch",
    sequelize,
    timestamps: false,
  }
);

console.re.debug("[dbtables]: Sequelize table Uniswap");
Uniswap.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    symbol: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    decimals: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    chainId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    logoURI: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "uniswap",
    sequelize,
    timestamps: false,
  }
);

console.re.debug("[dbtables]: Sequelize table CoinMarketCap200");
CoinMarketCap200.init(
  {
    chainId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    symbol: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    decimals: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "coinmarketcap200",
    sequelize,
    timestamps: false,
  }
);

console.re.debug("[dbtables]: Sequelize table CoinMarketCapStable");
CoinMarketCapStable.init(
  {
    chainId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    symbol: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    decimals: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "coinmarketcapstable",
    sequelize,
    timestamps: false,
  }
);

console.re.debug("[dbtables]: Sequelize table Pancakeswap");
Pancakeswap.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    symbol: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    decimals: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    chainId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    logoURI: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "pancakeswap",
    sequelize,
    timestamps: false,
  }
);


console.re.debug("[dbtables]: Sequelize table OneInches");
OneInch.init(
  {
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    chainId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    symbol: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    decimals: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },

    logoURI: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "oneinch",
    sequelize,
    timestamps: false,
  }
);


console.re.debug("[dbtables]: Sequelize table CoinGeckoPlaformTypes");
CoinGeckoPlatformType.init(
  {
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "coingeckoplatformtype",
    sequelize,
    timestamps: false,
  }
);

console.re.debug("[dbtables]: Sequelize table CoinGeckoPlaform");
CoinGeckoPlatform.init(
  {
    coingeckoId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "coingeckoplatform",
    sequelize,
    timestamps: false,
  }
);

console.re.debug("[dbtables]: Sequelize table LcwExchanges");
LcwExchange.init(
  {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    png64: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    png128: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    webp64: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    webp128: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    code: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "lcwexchange",
    sequelize,
    timestamps: false,
  }
);

console.re.debug("[dbtables]: Sequelize table LcwFiats");
LcwFiat.init(
  {
    code: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    countries: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    flag: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    symbol: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "lcwfiat",
    sequelize,
    timestamps: false,
  }
);


// Create new tables
sequelize.sync();

console.re.debug("[dbtables]: Sequelize tables... DONE");

export { sequelize };
