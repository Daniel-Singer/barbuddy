import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Item } from '../../models/itemModel';

export const updateItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const item = await Item.findOneAndUpdate(
      {
        _id: req.params.id,
        // ...baseFilter(req),
      },
      { ...req.body },
      { new: true },
    );
    res.status(StatusCodes.OK).json(item);
  } catch (error) {
    next(error);
  }
};
