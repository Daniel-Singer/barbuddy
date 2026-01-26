export type TCategory = {
  id: string;
  name: string;
};

export type TCategoryCreate = Omit<TCategory, "id">;
