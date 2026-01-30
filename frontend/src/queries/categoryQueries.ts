import axios from "../axios";

export const listCategories = async (): Promise<any[]> => {
  const { data } = await axios.get("/api/v1/categories");
  return data;
};

export const addCategory = async (category: any) => {
  const { data } = await axios.post("/api/v1/categories", category);
  return data;
};
