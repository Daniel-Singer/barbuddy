import { Request, Response, NextFunction } from 'express';
import { Item } from '../../models/itemModel';
import { baseFilter } from '../common';
import { StatusCodes } from 'http-status-codes';

export const updateItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const item = await Item.findOneAndUpdate(
      {
        _id: req.params.id,
        ...baseFilter(req),
      },
      { ...req.body },
      { new: true },
    );
    res.status(StatusCodes.OK).json(item);
  } catch (error) {
    next(error);
  }
};
