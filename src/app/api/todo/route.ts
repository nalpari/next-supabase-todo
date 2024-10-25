import { createServerSideClient } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest, res: NextResponse) => {
  const supabase = await createServerSideClient()

  const result = await supabase.from('my-todo').select('*').is('deleted_at', null).order('id', {
    ascending: false,
  })

  console.log('todo get api income!!', result)
  return NextResponse.json({ ...result })
}
