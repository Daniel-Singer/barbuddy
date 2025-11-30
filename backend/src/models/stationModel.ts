import { Schema, model, type InferSchemaType } from 'mongoose';

const stationSchema = new Schema(
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

export const Station = model('Station', stationSchema);

export type StationDocument = InferSchemaType<typeof stationSchema>;
