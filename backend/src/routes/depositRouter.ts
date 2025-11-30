import express, { type Router } from 'express';
import { listDeposits } from '../controllers/deposit/listDeposits';
import { addDeposit } from '../controllers/deposit/addDeposit';
import { getDeposit } from '../controllers/deposit/getDeposit';
import { updateDeposit } from '../controllers/deposit/updateDeposit';
import { deleteDeposit } from '../controllers/deposit/deleteDeposit';
import { allowedRoles } from '../middlewares/auth';
import { UserRoleEnum } from '../schema/userSchema';

export const depositRouter: Router = express.Router();

depositRouter.get('/', allowedRoles([UserRoleEnum.ADMIN]), listDeposits);

depositRouter.post('/', allowedRoles([UserRoleEnum.ADMIN]), addDeposit);

depositRouter.get('/:id', allowedRoles([UserRoleEnum.ADMIN]), getDeposit);

depositRouter.put('/:id', allowedRoles([UserRoleEnum.ADMIN]), updateDeposit);

depositRouter.patch('/:id', allowedRoles([UserRoleEnum.ADMIN]), deleteDeposit);
