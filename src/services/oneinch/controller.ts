import { NextFunction, Request, Response } from "express";

import { OneInch } from "../../models/oneinch.model";

export const find = (req: Request, res: Response, next: NextFunction) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause =
    req.query && req.query.isPaused
      ? {
          where: { isPaused: req.query.isPaused },
        }
      : undefined;

  return OneInch.findAll(whereClause)
    .then((oneinches: OneInch[]) => res.json(oneinches))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  return OneInch.findByPk(req.params.oneinchesId)
    .then((oneinches: OneInch | null) => res.json(oneinches))
    .catch(next);
};
