import { Schema, model, type InferSchemaType } from 'mongoose';

const orgSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Org = model('Org', orgSchema);

export type OrgDocument = InferSchemaType<typeof orgSchema>;
