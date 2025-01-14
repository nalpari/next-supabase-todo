import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
  const response = NextResponse.next()

  console.log('🚀 ~ middleware ~ middleware pass!!:')

  return response
}

export const config = {
  matcher: ['/', '/todo', '/api/:path*'],
}
