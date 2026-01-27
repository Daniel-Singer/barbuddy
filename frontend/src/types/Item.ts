import type { TCurrencyString } from "./Currency";

export type TItem = {
  id: string;
  name: string;
  categories: any[]; // TODO - declare category
  image?: Base64URLString;
  currency: TCurrencyString;
  unit: string; // TODO - declare unit
  price: number;
  deposit?: number;
};
