import { Schema, model, type InferSchemaType } from 'mongoose';
import { categorySchema } from './categoryModel';

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
    unit: {
      type: String,
      ref: 'Unit',
    },
    active: {
      type: Boolean,
      default: true,
    },
    servingSize: {
      type: Number,
      default: 0,
    },
    purchase: {
      price: {
        type: Number,
        default: null,
      },
      taxRate: {
        type: Number,
        default: null,
      },
    },
    sell: {
      price: {
        type: Number,
        default: 0,
        min: 0,
      },
      taxRate: {
        type: Number,
        default: null,
      },
    },
    deposit: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// itemSchema
//   .path('variants')
//   .validate((value: ItemVariantDocument[] | undefined) => {
//     return value && value.length > 0;
//   });

export const Item = model('Item', itemSchema);

export type ItemDocument = InferSchemaType<typeof itemSchema>;
