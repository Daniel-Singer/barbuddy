import axios from "../axios";
import { apiPath } from "../config";
import type { AuthenticatedUser } from "../schemas/zodUser";

export type AuthCredentials = {
  email: string;
  password: string;
};

export const auth = async (
  authCredentials: AuthCredentials,
): Promise<AuthenticatedUser> => {
  const { data } = await axios.post(apiPath("auth"), authCredentials);
  return data;
};
