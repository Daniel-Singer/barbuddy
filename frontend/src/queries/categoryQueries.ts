import axios from "../axios";
import type { TCategory, TCategoryCreate } from "../types/Category";

export const listCategories = async (): Promise<TCategory[]> => {
  const { data } = await axios.get("/api/v1/categories");
  return data;
};

export const addCategory = async (category: TCategoryCreate) => {
  const { data } = await axios.post("/api/v1/categories", category);
  return data;
};
