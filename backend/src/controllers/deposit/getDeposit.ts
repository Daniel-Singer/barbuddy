import { Request, Response, NextFunction } from 'express';

export const getDeposit = async (
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
