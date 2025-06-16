
import {z} from 'zod'

export const ProjectSchema = z.object({
    id:z.string().optional(),
    name:z.string().min(1),
    description:z.string().min(5)
   
})

export type ProjectDTO = z.infer<typeof ProjectSchema>