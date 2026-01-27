import { makeAutoObservable } from "mobx";
import type { TItem } from "../types/Item";
import { convertCentsToEuros } from "../utils/currency";

type OrderedItem = {
  name: string;
  amount: number;
  total: number;
  deposit: number | undefined;
};

class OrderStore {
  private _items: Record<string, OrderedItem> = {};
  private _total: number = 0;
  private _totalDeposit = 0;

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
  }

  get orderedItems() {
    return Object.entries(this._items).map(([_key, value]) => ({ ...value }));
  }

  get orderTotal() {
    return convertCentsToEuros(this._total + this._totalDeposit);
  }

  get totalDeposits() {
    return convertCentsToEuros(this._totalDeposit);
  }

  addItemToOrder(item: TItem) {
    const { id, name, price, deposit } = item;
    if (!this._items[id]) {
      this._items = {
        ...this._items,
        [item.id]: {
          name,
          amount: 1,
          total: price,
          deposit,
        },
      };
    } else {
      const calculatedDeposit = deposit
        ? (this._items[id].deposit || 0) + deposit
        : this._items[id].deposit;

      this._items[id] = {
        name,
        amount: this._items[id].amount + 1,
        total: this._items[id].total + price,
        deposit: calculatedDeposit,
      };
    }
    this._total += item.price;
    this._totalDeposit += item.deposit || 0;
  }

  resetOrder() {
    this._items = {};
    this._total = 0;
    this._totalDeposit = 0;
  }
}

export const orderStore = new OrderStore();
