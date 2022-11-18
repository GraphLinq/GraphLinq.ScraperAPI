import { NextFunction, Request, Response } from "express";

import { Quickswap } from "../../models/quickswap.model";

export const find = (req: Request, res: Response, next: NextFunction) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause =
    req.query && req.query.isPaused
      ? {
          where: { isPaused: req.query.isPaused },
        }
      : undefined;

  return Quickswap.findAll(whereClause)
    .then((quickswaps: Quickswap[]) => res.json(quickswaps))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  return Quickswap.findByPk(req.params.coingeckoId)
    .then((quickswaps: Quickswap | null) => res.json(quickswaps))
    .catch(next);
};
