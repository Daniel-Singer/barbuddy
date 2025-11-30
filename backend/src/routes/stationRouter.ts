import express, { type Router } from 'express';
import { listStations } from '../controllers/station/listStations';
import { addStation } from '../controllers/station/addStation';
import { getStation } from '../controllers/station/getStation';
import { updateStation } from '../controllers/station/updateStation';
import { deleteStation } from '../controllers/station/deleteStation';
import { validateRequest } from '../middlewares/validation';
import { zodCreateStation } from '../schema/zodStation';
import { allowedRoles } from '../middlewares/auth';
import { UserRoleEnum } from '../schema/userSchema';

export const stationRouter: Router = express.Router();

stationRouter.get('/', allowedRoles([UserRoleEnum.ADMIN]), listStations);

stationRouter.post(
  '/',
  validateRequest(zodCreateStation),
  allowedRoles([UserRoleEnum.ADMIN]),
  addStation,
);

stationRouter.get('/:id', getStation);

stationRouter.put('/:id', updateStation);

stationRouter.patch('/:id', deleteStation);
