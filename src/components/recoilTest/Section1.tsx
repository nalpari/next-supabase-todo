'use client'

import { useRecoilState } from 'recoil'
import { testState } from '@/store/TestAtom'
import CommBtn from '../common/CommBtn'

export default function Section1() {
  const [test, setTest] = useRecoilState(testState)

  return (
    <>
      <div>{test}</div>
      <CommBtn onClick={() => setTest(test + 1)} text="Increase age" />
      <CommBtn onClick={() => setTest(test - 1)} text="Decrease age" />
    </>
  )
}
