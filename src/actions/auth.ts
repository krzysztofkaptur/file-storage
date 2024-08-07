'use server'

import { createClient } from '@/lib/utils/supabase/server'
import type { LoginCredentials, RegisterCredentials } from '@/types/auth'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login({ email, password }: LoginCredentials) {
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    redirect('/error')
  }

  revalidatePath('/dashboard', 'page')
  redirect('/dashboard')
}

export async function register({ email, password }: RegisterCredentials) {
  const supabase = createClient()

  const { error } = await supabase.auth.signUp({ email, password })

  if (error) {
    redirect('/error')
  }

  revalidatePath('/dashboard', 'page')
  redirect('/dashboard')
}

export async function logout() {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  if (!error) {
    console.log('redirect')
    redirect('/auth/login')
  }
}
