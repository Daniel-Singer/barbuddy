import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Item } from '../../models/itemModel';
import { convertCentsToEuro } from '../../util/conversions/currency';

export const getItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await Item.findOne({
      _id: req.params.id,
      // ...baseFilter(req),
    });

    if (!result) {
      res.status(404);
      throw new Error('Item not found');
    }

    const item = {
      ...result.toObject(),
      purchase: {
        ...result.purchase,
        price: convertCentsToEuro(result.purchase?.price!),
      },
      sell: {
        ...result.sell,
        price: convertCentsToEuro(result.sell?.price!),
      },
    };
    res.status(StatusCodes.OK).json(item);
  } catch (error) {
    next(error);
  }
};
