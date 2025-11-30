import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Station } from '../../models/stationModel';
import { baseFilter } from '../common';

export const updateStation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const station = await Station.findOneAndUpdate(
      {
        _id: req.params.id,
        ...baseFilter(req),
      },
      req.body,
      { new: true },
    );
    res.status(StatusCodes.OK).json(station);
  } catch (error) {
    next(error);
  }
};
