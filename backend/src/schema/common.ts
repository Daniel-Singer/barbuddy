import z from 'zod';

export const commonValidations = {
  orgId: z.string(),
  timestamps: {
    createdAt: z.date(),
    updatedAt: z.date(),
  },
};
