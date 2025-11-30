import { Request, Response, NextFunction } from 'express';
import { Category } from '../../models/categoryModel';
import { baseFilter } from '../common';
import { StatusCodes } from 'http-status-codes';

export const listCategories = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const categories = await Category.find(baseFilter(req));
    res.status(StatusCodes.OK).json(categories);
  } catch (error) {
    next(error);
  }
};
