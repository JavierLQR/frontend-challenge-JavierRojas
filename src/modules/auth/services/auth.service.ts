import { proxyAxiosMethods } from '@/common/adapters/adapters'
import { PathServices } from '@/common/path-services/path.services'
import { AuthResponse, Login, Signup } from '../types/auth'
import { ResponseServer } from '@/helpers/response-server'

export const signup = async (data: Signup) =>
  await proxyAxiosMethods.POST<ResponseServer<AuthResponse>, Signup>(
    PathServices.SIGNUP,
    data
  )

export const logout = async () =>
  await proxyAxiosMethods.DELETE<ResponseServer<AuthResponse>>(
    PathServices.LOGOUT
  )
