import express from "express";

import { coingeckoRouter } from "./coingecko";

export const services = express.Router();

services.use("/coingeckos", coingeckoRouter);
