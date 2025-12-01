import z from "zod";

export const commonValidations = {
  zodId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Ungültiger Wert"),
};
