import { Request, Response, NextFunction } from 'express';
import { Item } from '../../models/itemModel';
import { baseFilter } from '../common';
import { StatusCodes } from 'http-status-codes';

export const listItems = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const items = await Item.find(baseFilter(req));
    res.status(StatusCodes.OK).json(items);
  } catch (error) {
    next(error);
  }
};
