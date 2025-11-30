import { Request, Response, NextFunction } from 'express';
import { Station } from '../../models/stationModel';
import { baseFilter } from '../common';
import { StatusCodes } from 'http-status-codes';

export const deleteStation = async (
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
      { active: false },
      { new: true },
    );
    res.status(StatusCodes.OK).json(station);
  } catch (error) {
    next(error);
  }
};
