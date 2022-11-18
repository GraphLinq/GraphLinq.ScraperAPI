import express from "express";
import jwt from "express-jwt";

import { config } from "../../config";
import * as controller from "./controller";

export const coinmarketcapstableRouter = express.Router();

/** GET /v2/coinmarketcapstables */
coinmarketcapstableRouter.route("/").get(controller.find);

/** GET /v2/coinmarketcapstables/:coinmarketcapstableId */
coinmarketcapstableRouter.route("/:coinmarketcapstableId").get(controller.get);
