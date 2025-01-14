'use client'

import { useRecoilState } from 'recoil'
import { testSelector } from '@/store/TestAtom'
import CommBtn from '../common/CommBtn'

export default function Section2() {
  const [test, setTest] = useRecoilState(testSelector)
  return (
    <>
      <div>{test}</div>
      <CommBtn onClick={() => setTest(test + 1)} text="Increase age" />
      <CommBtn onClick={() => setTest(test - 1)} text="Decrease age" />
    </>
  )
}
