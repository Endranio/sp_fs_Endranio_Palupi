import { z } from "zod";

export const MemberUserSchema = z.object({
  email: z.string().email(),
  username: z.string(),
});

export const MemberSchemaDTO = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  projectId: z.string().uuid(),
  role: z.enum(["Owner", "Member"]),
  user: MemberUserSchema,
});

export type MemberDTO = z.infer<typeof MemberSchemaDTO>;

export const MemberSchemaDTO2 = z.object({
  id: z.string().uuid(),
  username: z.string(),
  email: z.string().email(),
});

export type MemberDTO2 = z.infer<typeof MemberSchemaDTO2>;

export const addMemberSchema = z.object({
  userId: z.string().uuid(),
});
export type addMemberDTO = z.infer<typeof addMemberSchema>;
