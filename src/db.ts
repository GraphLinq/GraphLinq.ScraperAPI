import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
import { CoinGecko, Quickswap } from "./models";

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
  //logging: false,
  //logging:  msg => console.re.debug('[mariadb]:', msg)
  logging: (...msg) =>
    console.log("[mysqlsrv]: [Main DB Connection Logger]: ", msg),
});

// lazy
CoinGecko.init(
  {
    factoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    factoryName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    factorySymbol: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    factoryLink: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    creatorAddress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    royalty: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(26, 0).UNSIGNED,
    },
    currency: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    isPaused: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    curIndex: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    maxIndex: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "coingecko",
    sequelize,
    timestamps: true,
  }
);

//quickswap here
// lazy
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
    modelName: "qstoken",
    sequelize,
    timestamps: false,
  }
);

// Create new tables
sequelize.sync();

export { sequelize };
