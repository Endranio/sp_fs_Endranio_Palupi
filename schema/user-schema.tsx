
import {z} from 'zod'

export const UserProjectSchema = z.object({
    id:z.string().optional(),
    name:z.string().min(1),
    email:z.string().email(),
    initials:z.string().optional(),
    ownerId:z.string().optional(),
    role:z.string().optional()
   
})

export type UserProjectDTO = z.infer<typeof UserProjectSchema>