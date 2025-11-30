import { Schema, model, type InferSchemaType } from 'mongoose';

const depositSchema = new Schema(
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
    price: {
      type: Number,
      required: true,
    },
    trackStock: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Deposit = model('Deposit', depositSchema);

export type DepositDocument = InferSchemaType<typeof depositSchema>;
