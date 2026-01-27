import { makeAutoObservable } from "mobx";
import type { TItem } from "../types/Item";
import { convertCentsToEuros } from "../utils/currency";

type OrderedItem = {
  name: string;
  amount: number;
  total: number;
};

class OrderStore {
  private _items: Record<string, OrderedItem> = {};
  private _total: number = 0;

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
  }

  get orderedItems() {
    return Object.entries(this._items).map(([_key, value]) => ({ ...value }));
  }

  get orderTotal() {
    return convertCentsToEuros(this._total);
  }

  addItemToOrder(item: TItem) {
    const { id, name, price } = item;
    if (!this._items[id]) {
      this._items = {
        ...this._items,
        [item.id]: {
          name,
          amount: 1,
          total: price,
        },
      };
    } else {
      this._items[id] = {
        name,
        amount: this._items[id].amount + 1,
        total: this._items[id].total + price,
      };
    }
    this._total += item.price;
  }

  resetOrder() {
    this._items = {};
    this._total = 0;
  }
}

export const orderStore = new OrderStore();
