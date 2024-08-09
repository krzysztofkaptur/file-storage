'use server'

import { createClient } from '@/lib/utils/supabase/server'
import type {
  LoginCredentials,
  LoginOAuth,
  RegisterCredentials,
} from '@/types/auth'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login({ email, password }: LoginCredentials) {
  const supabase = createClient()

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return {
      message: error.message,
    }
  }

  revalidatePath('/dashboard', 'page')
  redirect('/dashboard')
}

export async function loginWithOAuth({ provider }: LoginOAuth) {
  const supabase = createClient()
  const origin = headers().get('origin')

  const { error, data } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    console.log(error)
  } else {
    return redirect(data.url)
  }
}

export async function register({ email, password }: RegisterCredentials) {
  const supabase = createClient()

  const { error } = await supabase.auth.signUp({ email, password })

  if (error) {
    return {
      message: error.message,
    }
  }

  revalidatePath('/dashboard', 'page')
  redirect('/dashboard')
}

export async function logout() {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  if (!error) {
    redirect('/auth/login')
  }
}
