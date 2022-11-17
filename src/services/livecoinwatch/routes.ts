import express from "express";
import jwt from "express-jwt";

import { config } from "../../config";
import * as controller from "./controller";

export const livecoinwatchRouter = express.Router();

/** GET /api/coingeckos */
livecoinwatchRouter.route("/").get(controller.find);

/** GET /api/coingeckos/:coingeckoId */
livecoinwatchRouter.route("/:livecoinwatchId").get(controller.get);
