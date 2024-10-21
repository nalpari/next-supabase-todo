'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '../ui/input'
import { FaPencil, FaTrashCan } from 'react-icons/fa6'
import useTodosController from '@/hooks/useTodosController'
import Loading from '../common/Loading'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export default function TodoContainer() {
  const { loading, todos } = useTodosController()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
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
                name="username"
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
                    <button className="mx-2">
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
