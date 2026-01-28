import type { TItem } from "../types/Item";

// TODO - replace with real data from backend

const items: TItem[] = [
  {
    id: "1",
    name: "Bier",
    categories: [],
    currency: "EUR",
    unit: {
      name: "ltr",
    },
    servingSize: 0.33,
    purchase: {
      price: 120,
      taxRate: 20,
    },
    sell: {
      price: 300,
      taxRate: 20,
    },
    deposit: 200,
  },
  {
    id: "2",
    name: "Spritzer",
    categories: [],
    currency: "EUR",
    unit: {
      name: "ltr",
    },
    servingSize: 0.5,
    purchase: {
      price: 180,
      taxRate: 20,
    },
    sell: {
      price: 400,
      taxRate: 20,
    },
    deposit: 200,
  },
  {
    id: "3",
    name: "Limo",
    categories: [],
    currency: "EUR",
    unit: {
      name: "ltr",
    },
    servingSize: 0.33,
    purchase: {
      price: 120,
      taxRate: 20,
    },
    sell: {
      price: 300,
      taxRate: 20,
    },
    deposit: 200,
  },
];

export const listAvailableItems = async (): Promise<TItem[]> => {
  return items;
};
