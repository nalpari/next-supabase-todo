'use client'

import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function LinkBtn({ href, text }: { href: string; text: string }) {
  const router = useRouter()

  return (
    <div className="py-2">
      <Button onClick={() => router.push(href)}>{text}</Button>
    </div>
  )
}
