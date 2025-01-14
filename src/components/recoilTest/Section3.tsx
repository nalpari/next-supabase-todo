'use client'

import { useRecoilState } from 'recoil'
import { userInfoSelector } from '@/store/TestAtom'
import CommBtn from '../common/CommBtn'

export default function Section3() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoSelector)

  const handleIncreaseAge = () => {
    setUserInfo({ ...userInfo, age: userInfo.age + 1 })
  }

  const handleChangeAddress = () => {
    setUserInfo({ ...userInfo, address: 'Busan' })
  }

  return (
    <>
      <div>{userInfo.name}</div>
      <div>{userInfo.age}</div>
      <div>{userInfo.address}</div>
      <CommBtn onClick={handleIncreaseAge} text="Increase age" />
      <CommBtn onClick={handleChangeAddress} text="Change address" />
    </>
  )
}
