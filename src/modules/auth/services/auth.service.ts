import { proxyAxiosMethods } from '@/common/adapters/adapters'
import { PathServices } from '@/common/path-services/path.services'
import { ResponseServer } from '@/helpers/response-server'
import { AuthResponse, Signup } from '../types/auth'

export const signup = async (data: Signup) =>
  await proxyAxiosMethods.POST<ResponseServer<AuthResponse>, Signup>(
    PathServices.SIGNUP,
    data
  )

export const logout = async () =>
  await proxyAxiosMethods.DELETE<ResponseServer<AuthResponse>>(
    PathServices.LOGOUT
  )
