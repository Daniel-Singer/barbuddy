import { Request, Response, NextFunction } from 'express';
import { Org } from '../../models/orgModel';
import { StatusCodes } from 'http-status-codes';

export const listOrgs = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const orgs = await Org.find({});
    res.status(StatusCodes.OK).json(orgs);
  } catch (error) {
    next(error);
  }
};
