import BtnArea from '@/components/recoilTest/BtnArea'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="m-2 px-4">
        <h1>Home</h1>
        <p>Home page content</p>
        <p>
          <Link href="/todo">Todo page content</Link>
        </p>

        <div className="py-2">
          <Button>Click me</Button>
        </div>
        <div className="py-2">
          <BtnArea />
        </div>
      </div>
    </>
  )
}
