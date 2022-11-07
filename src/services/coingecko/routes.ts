import express from "express";
import jwt from "express-jwt";

import { config } from "../../config";
import * as controller from "./controller";

export const coingeckoRouter = express.Router();

/** GET /api/coingeckos */
coingeckoRouter.route("/").get(controller.find);

/** GET /api/coingeckos/:coingeckoId */
coingeckoRouter.route("/:coingeckoId").get(controller.get);
