import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Station } from '../../models/stationModel';
import { baseFilter } from '../common';

export const listStations = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const stations = await Station.find(baseFilter(req));
    res.status(StatusCodes.OK).json(stations);
  } catch (error) {
    next(error);
  }
};
