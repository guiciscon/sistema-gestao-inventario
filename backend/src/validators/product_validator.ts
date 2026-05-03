import { z } from "zod";

export const product_schema = z.object({
    name: z.string().min(2, "Nome não é opcional!"),
    description: z.string().nullable(),
    price: z.number().positive("Preço não pode ser negativo!"),
    stock_quantity: z.number().int().nonnegative("Quantidade em estoque não pode ser negativa!"),
})

export const product_update_schema = product_schema.partial();