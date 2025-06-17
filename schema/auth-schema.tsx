
import {z} from 'zod'

export const LoginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(6)
   
})

export type LoginDTO = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
    email:z.string().email(),
    username:z.string().min(2),
    password:z.string().min(6)
   
})

export type RegisterDTO = z.infer<typeof RegisterSchema>