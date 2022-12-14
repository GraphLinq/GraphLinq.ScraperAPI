import { NextFunction, Request, Response } from "express";

import { LcwFiat } from "../../models/lcwfiat.model";

export const find = (req: Request, res: Response, next: NextFunction) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause =
    req.query && req.query.isPaused
      ? {
          where: { isPaused: req.query.isPaused },
        }
      : undefined;

  return LcwFiat.findAll(whereClause)
    .then((lcwfiats: LcwFiat[]) => res.json(lcwfiats))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  return LcwFiat.findByPk(req.params.coingeckoId)
    .then((lcwfiats: LcwFiat | null) => res.json(lcwfiats))
    .catch(next);
};
