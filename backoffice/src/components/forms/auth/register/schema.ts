"use client";

import * as z from "zod";

export const registerFormSchema = z
  .object({
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    cpassword: z.string().min(8),
    username: z.string().min(2).max(50),
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
  })
  .superRefine((data, ctx) => {
    if (data.cpassword !== data.password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["cpassword"],
      });
    }
  });
