import { createFormContext } from "@mantine/form";
import type { ItemCreate } from "../../../schemas/zodItem";

export const [ItemFormProvider, useItemFormContext, useItemForm] =
  createFormContext<ItemCreate>();
