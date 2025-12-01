import z from "zod";
import { commonValidations } from "./common";

const ItemVariantPriceSchema = z.object({
  price: z.number(),
  taxRate: z.number(),
});

const ItemVariantSchema = z.object({
  name: z.string().min(1, "Pflichtfeld"),
  servingSize: z.number().min(0, "Pflichtfeld"),
  purchase: ItemVariantPriceSchema,
  sell: ItemVariantPriceSchema,
  deposit: z.union([commonValidations.zodId, z.literal("")]).optional(),
});

export type Item = z.infer<typeof ItemSchema>;

const ItemSchema = z.object({
  _id: commonValidations.zodId,
  name: z.string().min(1, "Name ist erforderlich"),
  categories: z.array(z.string()),
  currency: z.string().default("EUR"),
  unit: z.union([commonValidations.zodId, z.literal("")]),
  variants: z
    .array(ItemVariantSchema)
    .min(1, "Muss mindestens eine Variante enthalten"),
});

export const ItemCreateSchema = ItemSchema.pick({ name: true });

export type ItemCreate = Omit<Item, "_id">;
