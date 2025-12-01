import { Schema, model, type InferSchemaType } from 'mongoose';

const unitSchema = new Schema(
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
  },
  {
    timestamps: true,
  },
);

export const Unit = model('unit', unitSchema);

export type UnitDocument = InferSchemaType<typeof unitSchema>;
