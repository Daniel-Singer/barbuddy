import { Request, Response, NextFunction } from 'express';
import { Category } from '../../models/categoryModel';
import { baseFilter } from '../common';
import { StatusCodes } from 'http-status-codes';

export const getCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const category = await Category.findOne({
      _id: req.params.id,
      ...baseFilter(req),
    });

    if (!category) {
      res.status(StatusCodes.NOT_FOUND);
      throw new Error('Category not found');
    }
    res.status(StatusCodes.OK).json(category);
  } catch (error) {
    next(error);
  }
};
