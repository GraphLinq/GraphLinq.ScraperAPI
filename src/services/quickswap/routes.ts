import express from "express";
import jwt from "express-jwt";

import { config } from "../../config";
import * as controller from "./controller";

export const quickswapRouter = express.Router();

/** GET /api/coingeckos */
quickswapRouter.route("/").get(controller.find);

/** GET /api/coingeckos/:coingeckoId */
quickswapRouter.route("/:quickswapId").get(controller.get);
