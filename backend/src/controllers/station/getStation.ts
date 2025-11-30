import { Request, Response, NextFunction } from 'express';
import { Station } from '../../models/stationModel';
import { baseFilter } from '../common';
import { StatusCodes } from 'http-status-codes';

export const getStation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const station = await Station.findOne({
      _id: req.params.id,
      ...baseFilter(req),
    });

    if (!station) {
      res.status(StatusCodes.NOT_FOUND);
      throw new Error('Station not found');
    }
    res.status(StatusCodes.OK).json(station);
  } catch (error) {
    next(error);
  }
};
