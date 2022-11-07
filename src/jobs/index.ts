import Bull from "bull";
//import chalk from "chalk";
import axios from "axios";

import { sequelize } from "../db";
import { CoinGecko } from "../models";
const { Op } = require("sequelize");
const CG = require("coingecko-api");
const CGClient = new CG();

const sleepTime = 666;

export const jobs = async () => {
  try {
    // Jobs Start
    //await sleep(sleepTime);
    console.log("[starting]: [GraphLinq Scraper API Job Server Is Running]");

    console.log("Nothing to do yet!");

    console.log("[complete]: [GraphLinq Scraper API Job Server Finished]");
    return true;
  } catch (err) {
    console.error("[ERROR!!!]: ", err);
    return false;
  }
};

//////////////////////////////////////////////////////////////////////
/////////////////////////////   PRICES   /////////////////////////////
//////////////////////////////////////////////////////////////////////

export const prices = async () => {
  try {
    // Prices Start
    await sleep(sleepTime);
    console.log("[starting]: [Log Job2]");

    await sleep(sleepTime);

    // Prices End
    sleep(sleepTime);
    console.log("[complete]: [GraphLinq API Scraper Stopped]");
    return true;
  } catch (error) {
    console.error("err", error);
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
