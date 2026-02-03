import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Item } from '../../models/itemModel';

export const listItems = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // const items = await Item.find(baseFilter(req));

    const items = await Item.aggregate([
      {
        $match: { active: true },
      },
      {
        $addFields: {
          deposit: {
            $cond: {
              if: { $eq: ['$deposit', true] },
              then: 200,
              else: null,
            },
          },
        },
      },
    ]);

    res.status(StatusCodes.OK).json(items);
  } catch (error) {
    next(error);
  }
};
