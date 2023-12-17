"use client";

import * as z from "zod";

export const productFormSchema = z.object({
    product_name: z.string().min(2).max(50),
    description: z.string().min(2).max(50),
    category: z.string().min(2).max(50),
    images: z.array(z.string()).optional(),
    quantity_available: z.string().min(0).max(1000000),
    price: z.string().min(0).max(1000000),
    is_active: z.boolean(),
    sizes: z.array(z.string()).optional(),
    colors: z.array(z.string()).optional(),
});
