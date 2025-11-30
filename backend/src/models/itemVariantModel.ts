import { Schema, model, type InferSchemaType } from 'mongoose';

export const itemVariantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    servingSize: {
      type: Number,
      required: true,
      min: 0,
    },
    purchase: {
      price: {
        type: Number,
        default: 0,
        min: 0,
      },
      taxRate: {
        type: Number,
        default: 0,
        min: 0,
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
        default: 0,
        min: 0,
      },
    },
    deposit: {
      type: Schema.Types.ObjectId,
      ref: 'Deposit',
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export const ItemVariant = model('ItemVariant', itemVariantSchema);

export type ItemVariantDocument = InferSchemaType<typeof itemVariantSchema>;
