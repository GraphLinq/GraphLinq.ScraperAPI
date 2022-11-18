import { NextFunction, Request, Response } from "express";

import { Pancakeswap } from "../../models/pancakeswap.model";

export const find = (req: Request, res: Response, next: NextFunction) => {
  // If a query string ?publicAddress=... is given, then filter results
  const whereClause =
    req.query && req.query.isPaused
      ? {
          where: { isPaused: req.query.isPaused },
        }
      : undefined;

  return Pancakeswap.findAll(whereClause)
    .then((pancakeswaps: Pancakeswap[]) => res.json(pancakeswaps))
    .catch(next);
};

export const get = (req: Request, res: Response, next: NextFunction) => {
  return Pancakeswap.findByPk(req.params.pancakeswapsId)
    .then((pancakeswaps: Pancakeswap | null) => res.json(pancakeswaps))
    .catch(next);
};
