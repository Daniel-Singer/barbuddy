import express, { type Router } from 'express';
import { addItem } from '../controllers/item/addItem';
import { deleteItem } from '../controllers/item/deleteItem';
import { getItem } from '../controllers/item/getItem';
import { listItems } from '../controllers/item/listItems';
import { updateItem } from '../controllers/item/updateItem';
import { allowedRoles } from '../middlewares/auth';
import { transformValues } from '../middlewares/items';
import { UserRoleEnum } from '../schema/userSchema';

export const itemRouter: Router = express.Router();

itemRouter.get(
  '/',
  // allowedRoles([UserRoleEnum.ADMIN, UserRoleEnum.STATION]),
  listItems,
);

// itemRouter.post('/', allowedRoles([UserRoleEnum.ADMIN]), addItem);
itemRouter.post('/', transformValues, addItem);

itemRouter.get(
  '/:id',
  // allowedRoles([UserRoleEnum.ADMIN, UserRoleEnum.STATION]),
  getItem,
);

itemRouter.put('/:id', allowedRoles([UserRoleEnum.ADMIN]), updateItem);

itemRouter.patch(
  '/:id',
  // allowedRoles([UserRoleEnum.ADMIN]),
  deleteItem,
);
