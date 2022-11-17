import { NextFunction, Request, Response } from "express";

import { CoinMarketCap } from "../../models/coinmarketcap.model";

export const find = (req: Request, res: Response, next: NextFunction) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause =
    req.query && req.query.isPaused
      ? {
          where: { isPaused: req.query.isPaused },
        }
      : undefined;

  return CoinMarketCap.findAll(whereClause)
    .then((coinmarketcaps: CoinMarketCap[]) => res.json(coinmarketcaps))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  return CoinMarketCap.findByPk(req.params.coingeckoId)
    .then((coinmarketcaps: CoinMarketCap | null) => res.json(coinmarketcaps))
    .catch(next);
};
