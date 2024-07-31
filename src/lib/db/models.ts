import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
  id: serial('id').primaryKey(),
  title: varchar('title'),
  description: varchar('description'),
})
