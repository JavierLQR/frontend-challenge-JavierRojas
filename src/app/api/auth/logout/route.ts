import { NextResponse } from 'next/server'

export async function DELETE() {
  const res = NextResponse.json({
    success: true,
    message: 'User logged out successfully',
    statusCode: 200,
    timestamp: new Date().toISOString(),
    service: 'AuthService',
  })

  res.cookies.set('auth', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 0,
  })

  return res
}
