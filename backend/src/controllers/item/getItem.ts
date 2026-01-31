import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Item } from '../../models/itemModel';

export const getItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const item = await Item.findOne({
      _id: req.params.id,
      // ...baseFilter(req),
    });
    res.status(StatusCodes.OK).json(item);
  } catch (error) {
    next(error);
  }
};
