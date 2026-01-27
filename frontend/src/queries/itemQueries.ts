import type { TItem } from "../types/Item";

// TODO - replace with real data from backend

const items: TItem[] = [
  {
    id: "1",
    name: "Bier",
    categories: [],
    currency: "EUR",
    unit: "ltr",
    price: 350,
  },
  {
    id: "2",
    name: "Spritzer",
    categories: [],
    currency: "EUR",
    unit: "ltr",
    price: 450,
  },
  {
    id: "3",
    name: "Limo",
    categories: [],
    currency: "EUR",
    unit: "ltr",
    price: 300,
  },
];

export const listAvailableItems = async (): Promise<TItem[]> => {
  return items;
};
