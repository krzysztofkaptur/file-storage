'use server'

import { db } from '@/lib/db'
import { usersTable } from '@/lib/db'

export const addUser = async (name: string, email: string, age: number) => {
  await db.insert(usersTable).values({
    email,
    name,
    age,
  })
}
