import z from "zod";
import { commonValidations } from "./common";

const ItemVariantPriceSchema = z.object({
  price: z.number(),
  taxRage: z.number(),
});

const ItemVariantSchema = z.object({
  name: z.string(),
  servingSize: z.string().nullable(),
  purchase: ItemVariantPriceSchema,
  sell: ItemVariantPriceSchema,
  deposit: commonValidations.zodId,
});

export type Item = z.infer<typeof ItemSchema>;

const ItemSchema = z.object({
  _id: commonValidations.zodId,
  name: z.string(),
  categories: z.array(z.string()),
  image: z.string().nullable(),
  currency: z.string().default("EUR"),
  unit: commonValidations.zodId,
  variants: z
    .array(ItemVariantSchema)
    .min(1, { error: "Muss mindestens eine Variante enthalten" }),
});

export type ItemCreate = Omit<Item, "_id">;
