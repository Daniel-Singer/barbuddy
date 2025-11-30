import { Request, Response, NextFunction } from 'express';
import { Station } from '../../models/stationModel';
import { baseFilter } from '../common';
import { StatusCodes } from 'http-status-codes';

export const addStation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const exists = await Station.findOne({
      name: req.body.name,
      ...baseFilter(req),
    });

    if (exists) {
      res.status(StatusCodes.CONFLICT);
      throw new Error('Station already exists');
    }

    await Station.create({
      ...req.body,
      orgId: req.auth.orgId,
    });

    res.sendStatus(StatusCodes.CREATED);
  } catch (error) {
    next(error);
  }
};
