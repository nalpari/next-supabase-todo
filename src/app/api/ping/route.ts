import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest, res: NextResponse) => {
  console.log('ping get api income!!')
  return NextResponse.json({ message: 'pong' })
}
