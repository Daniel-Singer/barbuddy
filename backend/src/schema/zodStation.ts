import z from 'zod';
import { commonValidations } from './common';

export const zodStation = z.object({
  orgId: commonValidations.orgId,
  name: z.string('Pflichtfeld'),
  ...commonValidations.timestamps,
});

export const zodCreateStation = zodStation.pick({ name: true });
