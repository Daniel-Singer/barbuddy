import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config/config';
import { User } from '../models/userModel';
import { UserRoleEnum } from '../schema/userSchema';

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401);
      throw new Error('Unauthorized');
    }

    const accessToken = authHeader.split(' ')[1];

    if (!accessToken) {
      res.status(403);
      throw new Error('No auth credentials provided');
    }

    const decoded = jwt.verify(
      accessToken,
      config.accessTokenSecret,
    ) as JwtPayload;

    req.auth = {
      orgId: decoded.user.orgId,
      userId: decoded.user._id,
    };

    next();
  } catch (error) {
    next(error);
  }
};

export const allowedRoles = (roles: UserRoleEnum[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const mongoose = require('mongoose');

      const user = await User.findOne({
        _id: req.auth.userId,
        orgId: new mongoose.Types.ObjectId(req.auth.orgId),
      });

      if (!user) {
        res.status(404);
        throw new Error('No user found');
      }

      const isAllowed =
        user.role.some((element) => roles?.includes(element)) ||
        user.role.includes(UserRoleEnum.ADMIN);

      if (!isAllowed) {
        res.status(401);
        throw new Error('Unauthorized');
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

export const allowOwnOrAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const targetUserId = req.params.id;

    if (String(req.auth.userId) !== targetUserId) {
      if (!req.body.auth.role.includes(UserRoleEnum.ADMIN)) {
        res.status(StatusCodes.UNAUTHORIZED);
        throw new Error('Unauthorized');
      }

      next();
    }
    next();
  } catch (error) {
    next(error);
  }
};
