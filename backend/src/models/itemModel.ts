import { Schema, model, type InferSchemaType } from 'mongoose';
import { categorySchema } from './categoryModel';
import { ItemVariantDocument, itemVariantSchema } from './itemVariantModel';

const itemSchema = new Schema(
  {
    orgId: {
      type: Schema.Types.ObjectId,
      required: true,
      select: false,
    },
    name: {
      type: String,
      required: true,
    },
    categories: {
      type: [categorySchema],
      default: [],
    },
    image: {
      type: String,
      default: null,
    },
    currency: {
      type: String,
      default: 'EUR',
    },
    active: {
      type: Boolean,
      default: true,
    },
    variants: {
      type: [itemVariantSchema],
      ref: 'ItemVariant',
    },
  },
  {
    timestamps: true,
  },
);

itemSchema
  .path('variants')
  .validate((value: ItemVariantDocument[] | undefined) => {
    return value && value.length > 0;
  });

export const Item = model('Item', itemSchema);

export type ItemDocument = InferSchemaType<typeof itemSchema>;
