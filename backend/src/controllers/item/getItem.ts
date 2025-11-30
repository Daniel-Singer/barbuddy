import { Request, Response, NextFunction } from 'express';
import { Item } from '../../models/itemModel';
import { baseFilter } from '../common';
import { StatusCodes } from 'http-status-codes';

export const getItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const item = await Item.findOne({
      _id: req.params.id,
      ...baseFilter(req),
    });
    res.status(StatusCodes.OK).json(item);
  } catch (error) {
    next(error);
  }
};
