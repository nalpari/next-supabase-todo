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

        <Button onClick={() => console.log('버튼이 클릭되었습니다!')}>Click me</Button>
      </div>
    </>
  )
}
