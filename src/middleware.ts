import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const auth = req.cookies.get('auth')

  if (req.nextUrl.pathname === '/signup' && auth)
    return NextResponse.redirect(new URL('/thank-you', req.url))

  if (req.nextUrl.pathname === '/thank-you' && !auth)
    return NextResponse.redirect(new URL('/signup', req.url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/signup', '/thank-you'],
}
