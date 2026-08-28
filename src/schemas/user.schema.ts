import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().min(2),
  email: z.string().email(),
});