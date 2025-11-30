import { Request, Response, NextFunction } from 'express';

export const updateDeposit = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};
