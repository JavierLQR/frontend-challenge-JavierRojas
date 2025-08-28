import { NextResponse } from 'next/server'

import { Signup } from '@/modules/auth/types/auth'

export async function POST(req: Request) {
  const body = (await req.json()) as Signup

  const { email, name } = body

  const res = NextResponse.json({
    success: true,
    data: { email, name },
    message: 'User signed up successfully',
    statusCode: 201,
    timestamp: new Date().toISOString(),
    service: 'AuthService',
  })

  res.cookies.set('auth', JSON.stringify({ email, name }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })

  return res
}
