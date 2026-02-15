import z from "zod";
import { commonValidations } from "./common";

export const zodAuthenticatedUser = z.object({
  _id: commonValidations.zodId,
  email: z.string(),
  accessToken: z.string(),
});

export type AuthenticatedUser = z.infer<typeof zodAuthenticatedUser>;
