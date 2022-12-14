import express from "express";
import jwt from "express-jwt";

import { config } from "../../config";
import * as controller from "./controller";

export const lcwexchangeRouter = express.Router();

/** GET /api/lcwexchangess */
lcwexchangeRouter.route("/").get(controller.find);

lcwexchangeRouter.route("/:lcwexchangeId").get(controller.get);
