import express, { type Router } from 'express';
import { loginUser } from '../controllers/auth/loginUser';
import { registerUser } from '../controllers/auth/registerUser';
import { validateRequest } from '../middlewares/validation';
import { UserLoginSchema, UserRegisterSchema } from '../schema/userSchema';

export const authRouter: Router = express.Router();

authRouter.post('/register', validateRequest(UserRegisterSchema), registerUser);

authRouter.post('/', validateRequest(UserLoginSchema), loginUser);
