import { NextFunction, Request, Response } from "express";

import { CoinMarketCap200 } from "../../models/coinmarketcap200.model";

export const find = (req: Request, res: Response, next: NextFunction) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause =
    req.query && req.query.isPaused
      ? {
          where: { isPaused: req.query.isPaused },
        }
      : undefined;

  return CoinMarketCap200.findAll(whereClause)
    .then((coinmarketcap200s: CoinMarketCap200[]) => res.json(coinmarketcap200s))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  return CoinMarketCap200.findByPk(req.params.coingeckoId)
    .then((coinmarketcap200s: CoinMarketCap200 | null) => res.json(coinmarketcap200s))
    .catch(next);
};
