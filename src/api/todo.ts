'use client'

import { createSupabaseBrowserClient } from '@/lib/client/supabase'

export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient()
  return await supabase.from('my-todo').select('*').is('deleted_at', null).order('id', { ascending: false })
}

export const getTodosById = async (id: number) => {
  const supabase = createSupabaseBrowserClient()
  return await supabase
    .from('my-todo')
    .select('*')
    .is('deleted_at', null)
    .eq('id', id)
    .order('id', { ascending: false })
}

export const getTodosByTerms = async (terms: string) => {
  const supabase = createSupabaseBrowserClient()
  return await supabase
    .from('my-todo')
    .select('*')
    .is('deleted_at', null)
    .ilike('content', `%${terms}%`)
    .order('id', { ascending: false })
}

export const createTodo = async (content: string) => {
  const supabase = createSupabaseBrowserClient()
  return await supabase.from('my-todo').insert([{ content }]).select()
}

export const updateTodo = async (id: number, content: string) => {
  const supabase = createSupabaseBrowserClient()
  return await supabase.from('my-todo').update({ content, updated_at: new Date().toISOString() }).eq('id', id).select()
}

export const deleteTodo = async (id: number) => {
  const supabase = createSupabaseBrowserClient()
  return await supabase.from('my-todo').update({ deleted_at: new Date().toISOString() }).eq('id', id).select()
}
1