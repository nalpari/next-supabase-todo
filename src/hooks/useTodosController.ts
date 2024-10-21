import { getTodos } from '@/api/todo'
import { Database } from '@/types/database.types'
import { useEffect, useState } from 'react'

type TodoDto = Database['public']['Tables']['my-todo']['Row']

const useTodosController = () => {
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState<TodoDto[]>([])

  const onGetTodos = async () => {
    setLoading(true)
    try {
      const { data, error } = await getTodos()
      if (error) {
        console.error(error)
      } else if (data) {
        setTodos(data)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    onGetTodos()
  }, [])

  return {
    loading,
    todos,
  }
}

export default useTodosController
