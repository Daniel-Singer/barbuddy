import express, { type Express } from 'express';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/errorHandler';
import connectDB from './config/db';
import { authRouter } from './routes/authRouter';
import config from './config/config';
import { protect } from './middlewares/auth';
import { stationRouter } from './routes/stationRouter';
import { orgRouter } from './routes/orgRouter';
import { categoryRouter } from './routes/categoryRouter';
import { itemRouter } from './routes/itemRouter';
import { depositRouter } from './routes/depositRouter';

const app: Express = express();

connectDB();

app.use(express.json());
app.use(cookieParser(config.accessTokenSecret));

// public routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/orgs', orgRouter);

declare global {
  namespace Express {
    interface Request {
      auth: {
        userId: string;
        orgId: string;
      };
    }
  }
}

app.use(protect);

// protected routes go here

app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/deposits', depositRouter);
app.use('/api/v1/items', itemRouter);
app.use('/api/v1/stations', stationRouter);

app.use(errorHandler);

export default app;
