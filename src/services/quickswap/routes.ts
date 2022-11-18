import express from "express";
import jwt from "express-jwt";

import { config } from "../../config";
import * as controller from "./controller";

export const quickswapRouter = express.Router();

/** GET /api/quickswaps */
quickswapRouter.route("/").get(controller.find);

/** GET /api/quickswaps/:coingeckoId */
quickswapRouter.route("/:quickswapId").get(controller.get);
