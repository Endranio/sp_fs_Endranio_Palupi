import { z } from "zod";

export const LoginSchema = z.object({
  identity: z.string(),
  password: z.string().min(6),
});

export type LoginDTO = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  id: z.string().optional(),
  email: z.string().email(),
  username: z.string().min(2),
  password: z.string().min(6),
});

export type RegisterDTO = z.infer<typeof RegisterSchema>;

export const DeleteSchema = z.object({
  id: z.string().uuid(),
});
export type DeleteDTO = z.infer<typeof DeleteSchema>;
