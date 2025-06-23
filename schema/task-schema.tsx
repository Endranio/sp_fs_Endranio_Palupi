import { z } from "zod";

export const assigneeSchema = z.object({
  username: z.string().optional(),
});

export const TaskSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  description: z.string().min(5),
  status: z.string().optional(),
  assignedId: z.string(),
  assignee: assigneeSchema.optional(),
});

export type TaskDTO = z.infer<typeof TaskSchema>;
