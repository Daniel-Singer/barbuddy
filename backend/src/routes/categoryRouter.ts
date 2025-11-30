import express, { type Router } from 'express';
import { allowedRoles } from '../middlewares/auth';
import { UserRoleEnum } from '../schema/userSchema';
import { listCategories } from '../controllers/category/listCategories';
import { addCategory } from '../controllers/category/addCategory';
import { getCategory } from '../controllers/category/getCategory';
import { updateCategory } from '../controllers/category/updateCategory';
import { deleteCategory } from '../controllers/category/deleteCategory';

export const categoryRouter: Router = express.Router();

categoryRouter.get(
  '/',
  allowedRoles([UserRoleEnum.ADMIN, UserRoleEnum.STATION]),
  listCategories,
);

categoryRouter.post('/', allowedRoles([UserRoleEnum.ADMIN]), addCategory);

categoryRouter.get('/:id', allowedRoles([UserRoleEnum.ADMIN]), getCategory);

categoryRouter.put('/:id', allowedRoles([UserRoleEnum.ADMIN]), updateCategory);

categoryRouter.patch(
  '/:id',
  allowedRoles([UserRoleEnum.ADMIN]),
  deleteCategory,
);
