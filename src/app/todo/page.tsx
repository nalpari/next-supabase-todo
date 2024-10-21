import Loading from '@/components/common/Loading'
import TodoContainer from '@/components/todo/TodoContainer'
import { Suspense } from 'react'

export default async function page() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <TodoContainer />
      </Suspense>
    </div>
  )
}
