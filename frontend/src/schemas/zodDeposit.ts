import z from "zod";

const DepositSchema = z.object({
  _id: z.string(),
  name: z.string(),
  value: z.number(),
});

const DepositCreateSchema = DepositSchema.omit({
  _id: true,
  value: true,
}).extend({ value: z.number().nullable() });

export type Deposit = z.infer<typeof DepositSchema>;

export type DepositCreate = z.infer<typeof DepositCreateSchema>;
