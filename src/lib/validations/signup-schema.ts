import { Signup } from '@/modules/auth/types/auth'
import * as z from 'zod'

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  email: z
    .string()
    .min(5, { message: 'El correo debe tener al menos 5 caracteres' })
    .max(254, { message: 'El correo no puede exceder 254 caracteres' })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: 'Formato de correo inválido',
    }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
})

export const initialSignupValues: Signup = {
  name: '',
  email: '',
  password: '',
}
