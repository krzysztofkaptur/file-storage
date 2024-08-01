import { loadEnvConfig } from '@next/env'
import { defineConfig } from 'drizzle-kit'
import { cwd } from 'node:process'

loadEnvConfig(cwd())

export default defineConfig({
  // schema: './src/lib/db/models.ts',
  schema: './src/lib/db/**/schema.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    // url: process.env.DATABASE_URL!,
    host: process.env.DB_HOST!,
    port: +process.env.DB_PORT!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
  },
})
