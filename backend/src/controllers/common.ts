import { Request } from 'express';

export const baseFilter = (req: Request) => {
  return {
    orgId: req.auth.orgId,
    active: true,
  };
};
