import { Request, Response, NextFunction } from 'express';
import { Item } from '../../models/itemModel';
import { baseFilter } from '../common';
import { StatusCodes } from 'http-status-codes';

export const addItem = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const exists = await Item.findOne({
      name: req.body.name,
      ...baseFilter(req),
    });
    if (exists) {
      res.status(StatusCodes.CONFLICT);
      throw new Error('Item already exists');
    }
    await Item.create({ ...req.body, orgId: req.auth.orgId });
    res.sendStatus(StatusCodes.OK);
  } catch (error) {
    next(error);
  }
};
