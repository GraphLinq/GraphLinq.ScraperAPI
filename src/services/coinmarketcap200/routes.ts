import express from "express";
import jwt from "express-jwt";

import { config } from "../../config";
import * as controller from "./controller";

export const coinmarketcap200Router = express.Router();

/** GET /api/coinmarketcap200s */
coinmarketcap200Router.route("/").get(controller.find);

/** GET /api/coinmarketcap200s/:coinmarketcap200Id */
coinmarketcap200Router.route("/:coinmarketcap200Id").get(controller.get);
