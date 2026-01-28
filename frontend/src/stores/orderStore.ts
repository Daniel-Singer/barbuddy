import { makeAutoObservable } from "mobx";
import { convertCentsToEuros } from "../utils/currency";
import type { Item, ItemReceive } from "../schemas/zodItem";

export type TOrderedItem = Item & {
  count: number;
  total: number;
};

class OrderStore {
  private _items: ItemReceive[] = [];
  private _total: number = 0;
  private _totalDeposit = 0;
  private _chargedDepositCount = 0;

  constructor() {
    makeAutoObservable(this, undefined, {
      autoBind: true,
    });
  }

  get orderedItems() {
    const mappedItems = new Map<string, ItemReceive & TOrderedItem>();

    for (const item of this._items) {
      const key = `${item._id}|${item.name}|${item.currency}|${item.unit}`;

      if (!mappedItems.has(key)) {
        mappedItems.set(key, {
          ...item,
          count: 1,
          total: item.sell.price,
        });
      } else {
        const existing = mappedItems.get(key)!;

        existing.deposit = this.calculateDeposit(existing, item.deposit);
        existing.count += 1;
        existing.total += item.sell.price || 0;
      }
    }
    return Array.from(mappedItems.values());
  }

  get orderTotal() {
    return convertCentsToEuros(this._total + this._totalDeposit);
  }

  get totalDeposits() {
    return convertCentsToEuros(this._totalDeposit);
  }

  get depositCount() {
    return this._chargedDepositCount;
  }

  private calculateDeposit(existingItem: Item, deposit: number | null) {
    return deposit
      ? (existingItem.deposit || 0) + deposit
      : existingItem.deposit;
  }

  private updateDeposit(direction: "add" | "remove", deposit: number | null) {
    if (!deposit) {
      return;
    }

    const multiplier = direction === "add" ? 1 : -1;

    this._totalDeposit += deposit * multiplier;
    this._chargedDepositCount += 1 * multiplier;
  }

  addItemToOrder(item: ItemReceive) {
    this._items.push(item);
    this._total += item.sell.price;
    this.updateDeposit("add", item.deposit);
  }

  removeItemFromOrder(itemId: Item["_id"]) {
    const index = this._items.findIndex((item) => item._id === itemId);

    if (index === -1) return this._items;

    const itemToRemove = this._items[index];

    this._total -= itemToRemove.sell.price;
    this._items.splice(index, 1);
    this.updateDeposit("remove", itemToRemove.deposit);
  }

  resetOrder() {
    this._items = [];
    this._total = 0;
    this._totalDeposit = 0;
    this._chargedDepositCount = 0;
  }
}

export const orderStore = new OrderStore();
