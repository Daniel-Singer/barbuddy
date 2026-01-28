import z from "zod";
import { commonValidations } from "./common";

const ItemPriceSchema = z.object({
  price: z.number().nullable(),
  taxRate: z.number().nullable(),
});

export type Item = z.infer<typeof ItemSchema>;

const ItemSchema = z.object({
  _id: commonValidations.zodId,
  name: z.string().min(1, "Name ist erforderlich"),
  categories: z.array(z.string()),
  currency: z.string().default("EUR"),
  unit: z.string(),
  servingSize: z.number().nullable(),
  purchase: ItemPriceSchema,
  sell: ItemPriceSchema,
  deposit: z.number().nullable(),
});

export const ItemCreateSchema = ItemSchema.omit({
  _id: true,
});

export const ItemReceiveSchema = z.object({
  _id: commonValidations.zodId,
  name: z.string(),
  categories: z.array(z.string()),
  currency: z.string(),
  unit: z.string(),
  servingSize: z.number(),
  purchase: ItemPriceSchema,
  sell: z.object({
    price: z.number(),
    taxRate: z.number().nullable(),
  }),
  deposit: z.number().nullable(),
});

export type ItemCreate = z.infer<typeof ItemCreateSchema>;

export type ItemReceive = z.infer<typeof ItemReceiveSchema>;
