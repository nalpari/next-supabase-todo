'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function Todo2Page() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-background shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">할 일 목록</h1>
      <div className="flex space-x-2 mb-4">
        <Input
          type="text"
          placeholder="새로운 할 일"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <Button onClick={addTodo}>
          <Plus className="w-4 h-4 mr-2" />
          추가
        </Button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center space-x-2 bg-secondary p-2 rounded">
            <Checkbox id={`todo-${todo.id}`} checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
            <label
              htmlFor={`todo-${todo.id}`}
              className={`flex-grow ${todo.completed ? 'line-through text-muted-foreground' : ''}`}
            >
              {todo.text}
            </label>
            <Button variant="destructive" size="icon" onClick={() => deleteTodo(todo.id)}>
              <Trash2 className="w-4 h-4" />
              <span className="sr-only">삭제</span>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
