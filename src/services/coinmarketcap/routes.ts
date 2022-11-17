import express from "express";
import jwt from "express-jwt";

import { config } from "../../config";
import * as controller from "./controller";

export const coinmarketcapRouter = express.Router();

/** GET /api/coingeckos */
coinmarketcapRouter.route("/").get(controller.find);

/** GET /api/coingeckos/:coingeckoId */
coinmarketcapRouter.route("/:coinmarketcapId").get(controller.get);
