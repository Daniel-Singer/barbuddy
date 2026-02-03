import { NextFunction, Request, Response } from 'express';
import { convertEuroToCents } from '../util/conversions/currency';
import { litersToMilliliters } from '../util/conversions/liquids';

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
    };
    next();
  } catch (error) {
    next(error);
  }
};
