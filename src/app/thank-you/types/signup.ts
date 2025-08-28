import { Signup } from '@/modules/auth/types/auth'

export type Profile = Omit<Signup, 'password'> | null
