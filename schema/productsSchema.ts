import { z } from "zod";

export const ProductsResponseSchema = z.array(
  z.object({
    id: z.string().max(2),
    title: z.string(),
    price: z.number().max(1000),
  })
);
export type ProductsResponseSchemaType = z.infer<typeof ProductsResponseSchema>;
