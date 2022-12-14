import { NextFunction, Request, Response } from "express";

import { LcwExchange } from "../../models/lcwexchange.model";

export const find = (req: Request, res: Response, next: NextFunction) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause =
    req.query && req.query.isPaused
      ? {
          where: { isPaused: req.query.isPaused },
        }
      : undefined;

  return LcwExchange.findAll(whereClause)
    .then((lcwexchanges: LcwExchange[]) => res.json(lcwexchanges))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  return LcwExchange.findByPk(req.params.coingeckoId)
    .then((lcwexchanges: LcwExchange | null) => res.json(lcwexchanges))
    .catch(next);
};
