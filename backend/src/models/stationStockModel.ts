import { Schema, model, type InferSchemaType } from 'mongoose';

const stationStockSchema = new Schema(
  {
    orgId: {
      type: Schema.Types.ObjectId,
      required: true,
      select: false,
    },
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
    station: {
      type: Schema.Types.ObjectId,
      ref: 'Station',
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    minStock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

stationStockSchema.index({ item: 1, station: 1 }, { unique: true });

export const StationStock = model('StationStock', stationStockSchema);

export type StationStockDocument = InferSchemaType<typeof stationStockSchema>;
