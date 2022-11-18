import { NextFunction, Request, Response } from "express";

import { CoinMarketCapStable } from "../../models/coinmarketcapstable.model";

export const find = (req: Request, res: Response, next: NextFunction) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause =
    req.query && req.query.isPaused
      ? {
          where: { isPaused: req.query.isPaused },
        }
      : undefined;

  return CoinMarketCapStable.findAll(whereClause)
    .then((coinmarketcapstables: CoinMarketCapStable[]) => res.json(coinmarketcapstables))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  return CoinMarketCapStable.findByPk(req.params.coingeckoId)
    .then((coinmarketcapstables: CoinMarketCapStable | null) => res.json(coinmarketcapstables))
    .catch(next);
};
