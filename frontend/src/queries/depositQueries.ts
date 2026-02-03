import axios from "../axios";
import { apiPath } from "../config";
import type { Deposit } from "../schemas/zodDeposit";

export const getDeposit = async (): Promise<Deposit> => {
  const { data } = await axios.get(apiPath("deposit"));
  return data;
};
