import axios from "../axios";
import { apiPath } from "../config";
import type { Item, ItemCreate, ItemReceive } from "../schemas/zodItem";

export const listAvailableItems = async (): Promise<ItemReceive[]> => {
  const { data } = await axios.get(apiPath("items"));
  return data;
};

export const addItem = async (item: ItemCreate) => {
  const { data } = await axios.post(apiPath("items"), item);
  return data;
};

export const updateItem = async (item: Item) => {
  const { data } = await axios.put(apiPath("items"), item);
  return data;
};

export const removeItem = async (_id: Item["_id"]) => {
  const { data } = await axios.patch(apiPath(`/${_id}`));
  return data;
};
