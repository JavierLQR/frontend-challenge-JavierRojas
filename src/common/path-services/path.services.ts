export const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export const PathServices = {
  SIGNUP: '/auth/signup',
  LOGOUT: '/auth/logout',
  THANKYOU: '/thank-you',
} as const
