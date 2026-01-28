import z from "zod";
import { commonValidations } from "./common";

const ItemPriceSchema = z.object({
  price: z.number(),
  taxRate: z.number(),
});

export type Item = z.infer<typeof ItemSchema>;

const ItemSchema = z.object({
  _id: commonValidations.zodId,
  name: z.string().min(1, "Name ist erforderlich"),
  categories: z.array(z.string()),
  currency: z.string().default("EUR"),
  unit: z.string(),
  servingSize: z.number().min(0, "Pflichtfeld"),
  purchase: ItemPriceSchema,
  sell: ItemPriceSchema,
  deposit: z.number().nullable(),
});

export const ItemCreateSchema = ItemSchema.pick({ name: true });

export type ItemCreate = Omit<Item, "_id">;
