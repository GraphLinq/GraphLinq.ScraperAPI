import { NextFunction, Request, Response } from "express";

import { CoinGecko } from "../../models/coingecko.model";

export const find = (req: Request, res: Response, next: NextFunction) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause =
    req.query && req.query.isPaused
      ? {
          where: { isPaused: req.query.isPaused },
        }
      : undefined;

  return CoinGecko.findAll(whereClause)
    .then((coingeckos: CoinGecko[]) => res.json(coingeckos))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  return CoinGecko.findByPk(req.params.coingeckoId)
    .then((coingeckos: CoinGecko | null) => res.json(coingeckos))
    .catch(next);
};
