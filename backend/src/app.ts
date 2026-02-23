import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express, { type Express } from 'express';
import config from './config/config';
import connectDB from './config/db';
import { errorHandler } from './middlewares/errorHandler';
import { authRouter } from './routes/authRouter';
import { categoryRouter } from './routes/categoryRouter';
import { depositRouter } from './routes/depositRouter';
import { itemRouter } from './routes/itemRouter';
import { orgRouter } from './routes/orgRouter';
import { stationRouter } from './routes/stationRouter';

dotenv.config();

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

// app.use(protect);

// protected routes go here

app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/deposits', depositRouter);
app.use('/api/v1/items', itemRouter);
app.use('/api/v1/stations', stationRouter);

app.use(errorHandler);

export default app;
