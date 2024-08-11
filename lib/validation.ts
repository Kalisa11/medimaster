import { z } from "zod";

export const userFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters long",
    })
    .max(50, {
      message: "Name must be at most 50 characters long",
    }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().refine((value) => /^\+[1-9]\d{1,14}$/.test(value), {
    message: "Invalid phone number",
  }),
});
