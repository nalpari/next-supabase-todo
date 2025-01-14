'use client'

import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FaPencil, FaTrashCan } from 'react-icons/fa6'
import useTodosController from '@/hooks/useTodosController'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Loading from '../common/Loading'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const formSchema = z.object({
  content: z.string().min(2, {
    message: 'Enter your todo.',
  }),
})

export default function TodoContainer() {
  const { loading, todos, onCreateTodo, onUpdateTodo, onDeleteTodo } = useTodosController()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    onCreateTodo(values.content)
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">To Do List</h1>
        <section className="my-4 w-[640px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NEW TOOD</FormLabel>
                    <FormControl>
                      <Input placeholder="Some todo..." {...field} />
                    </FormControl>
                    <FormDescription>This is your new todo.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">ADD</Button>
            </form>
          </Form>
        </section>
        <div className="flex flex-col gap-4 w-[640px] h-full">
          {loading && <Loading />}
          {todos && (
            <ul>
              {todos.map((todo) => (
                <li key={todo.id} className="flex justify-between py-2">
                  <span className="font-bold">{todo.content}</span>
                  <div className="flex">
                    <button className="mx-2" onClick={() => onDeleteTodo(todo.id)}>
                      <FaTrashCan />
                    </button>
                    <button className="mx-2">
                      <FaPencil />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <section className="my-4">
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
        </section>
      </div>
    </>
  )
}
