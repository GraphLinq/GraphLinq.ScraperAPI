import express from "express";
import jwt from "express-jwt";

import { config } from "../../config";
import * as controller from "./controller";

export const lcwfiatRouter = express.Router();

/** GET /api/lcwfiats */
lcwfiatRouter.route("/").get(controller.find);

lcwfiatRouter.route("/:lcwfiatsId").get(controller.get);
