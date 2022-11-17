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
    .then((coingeckos: Quickswap[]) => res.json(coingeckos))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  return Quickswap.findByPk(req.params.coingeckoId)
    .then((coingeckos: Quickswap | null) => res.json(coingeckos))
    .catch(next);
};
