import { Request, Response, NextFunction } from 'express';
import { Category } from '../../models/categoryModel';
import { baseFilter } from '../common';
import { StatusCodes } from 'http-status-codes';

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const category = await Category.findOneAndUpdate(
      {
        _id: req.params.id,
        ...baseFilter(req),
      },
      { active: false },
      { new: true },
    );
    res.status(StatusCodes.OK).json(category);
  } catch (error) {
    next(error);
  }
};
