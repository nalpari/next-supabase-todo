'use client'

import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function BtnArea() {
  const router = useRouter()

  return (
    <>
      <Button onClick={() => router.push('/recoil-test')}>Recoil Test</Button>
    </>
  )
}
