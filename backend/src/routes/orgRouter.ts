import express, { type Router } from 'express';
import { registerOrg } from '../controllers/auth/registerOrg';
import { listOrgs } from '../controllers/org/listOrgs';

export const orgRouter: Router = express.Router();

orgRouter.get('/', listOrgs);

orgRouter.post('/', registerOrg);
