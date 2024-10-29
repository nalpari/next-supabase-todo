import { useEffect, useState } from 'react'
import { createTodo, deleteTodo, getTodos, updateTodo } from '@/api/todo'
import { Database } from '@/types/database.types'

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

  const onCreateTodo = async (content: string) => {
    console.log('onCreateTodo', content)
    await createTodo(content)
    onGetTodos()
  }

  const onUpdateTodo = async (id: number, content: string) => {
    console.log('onUpdateTodo', id, content)
    await updateTodo(id, content)
    onGetTodos()
  }

  const onDeleteTodo = async (id: number) => {
    console.log('onDeleteTodo', id)
    await deleteTodo(id)
    onGetTodos()
  }

  useEffect(() => {
    onGetTodos()
  }, [])

  return {
    loading,
    todos,
    onCreateTodo,
    onUpdateTodo,
    onDeleteTodo,
  }
}

export default useTodosController
