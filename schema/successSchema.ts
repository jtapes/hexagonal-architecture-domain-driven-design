import { z } from "zod";

export const SuccessResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
});

export type SuccessResponseSchemaType = z.infer<typeof SuccessResponseSchema>;
