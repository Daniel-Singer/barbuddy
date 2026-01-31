import { Request, Response, NextFunction } from 'express';
import { litersToMilliliters } from '../util/conversions/liquids';
import { convertEuroToCents } from '../util/conversions/currency';

export const transformValues = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    req.body = {
      ...req.body,
      servingSize: litersToMilliliters(req.body.servingSize),
      purchase: {
        ...req.body.purchase,
        price: convertEuroToCents(req.body.purchase.price),
      },
      sell: {
        ...req.body.sell,
        price: convertEuroToCents(req.body.sell.price),
      },
      deposit:
        req.body.deposit && !isNaN(req.body.deposit)
          ? convertEuroToCents(req.body.deposit)
          : null,
    };
    next();
  } catch (error) {
    next(error);
  }
};
