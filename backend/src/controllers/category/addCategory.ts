import { Request, Response, NextFunction } from 'express';
import { Category } from '../../models/categoryModel';
import { baseFilter } from '../common';
import { StatusCodes } from 'http-status-codes';

export const addCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const exists = await Category.findOne({
      name: new RegExp(`^${req.body.name}$`, 'i'),
      ...baseFilter(req),
    });
    if (exists) {
      res.status(StatusCodes.CONFLICT);
      throw new Error('Category already exists');
    }

    await Category.create({
      ...req.body,
      orgId: req.auth.orgId,
    });

    res.sendStatus(StatusCodes.OK);
  } catch (error) {
    next(error);
  }
};
