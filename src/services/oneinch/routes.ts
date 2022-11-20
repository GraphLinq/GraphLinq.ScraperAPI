import express from "express";
import jwt from "express-jwt";

import { config } from "../../config";
import * as controller from "./controller";

export const oneinchRouter = express.Router();

/** GET /v2/oneinches */
oneinchRouter.route("/").get(controller.find);

/** GET /v2/oneinches/:oneinchesId */
oneinchRouter.route("/:oneinchesId").get(controller.get);
