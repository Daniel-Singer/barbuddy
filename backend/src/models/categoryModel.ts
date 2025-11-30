import { Schema, model, type InferSchemaType } from 'mongoose';

export const categorySchema = new Schema(
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
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Category = model('Category', categorySchema);

export type CategoryDocument = InferSchemaType<typeof categorySchema>;
