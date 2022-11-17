import { NextFunction, Request, Response } from "express";

import { LiveCoinWatch } from "../../models/livecoinwatch.model";

export const find = (req: Request, res: Response, next: NextFunction) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause =
    req.query && req.query.isPaused
      ? {
          where: { isPaused: req.query.isPaused },
        }
      : undefined;

  return LiveCoinWatch.findAll(whereClause)
    .then((coingeckos: LiveCoinWatch[]) => res.json(coingeckos))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  return LiveCoinWatch.findByPk(req.params.coingeckoId)
    .then((coingeckos: LiveCoinWatch | null) => res.json(coingeckos))
    .catch(next);
};
