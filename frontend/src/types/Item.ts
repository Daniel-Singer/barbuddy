import type { TCategory } from "./Category";
import type { TCurrencyString } from "./Currency";
import type { TUnit } from "./Unit";

export type TItem = {
  id: string;
  name: string;
  categories: TCategory[];
  image?: Base64URLString;
  currency: TCurrencyString;
  unit: TUnit;
  servingSize: number;
  purchase: {
    price: number;
    taxRate: number;
  };
  sell: {
    price: number;
    taxRate: number;
  };
  deposit: number | null;
};
