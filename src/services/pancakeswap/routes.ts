import express from "express";
import jwt from "express-jwt";

import { config } from "../../config";
import * as controller from "./controller";

export const pancakeswapRouter = express.Router();

/** GET /v2/pancakeswaps */
pancakeswapRouter.route("/").get(controller.find);

/** GET /v2/pancakeswaps/:pancakeswapsId */
pancakeswapRouter.route("/:pancakeswapsId").get(controller.get);
