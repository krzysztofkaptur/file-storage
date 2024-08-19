import { createClient } from '@/lib/utils/supabase/client'
import { expect, test } from '@playwright/test'

// todo: move user removal to afterEach
// todo: test for account deletion

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/auth/login')
  })

  test('has proper title', async ({ page }) => {
    await expect(page).toHaveTitle('Sign in | FilesFront')
  })

  test('should login user', async ({ page, request }) => {
    const supabase = createClient({
      supabaseKey: process.env.API_SECRET,
    })

    // create an account for tests
    const response = await request.post(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/signup?apikey=${process.env.API_SECRET}`,
      {
        data: {
          email: process.env.E2E_EMAIL,
          password: process.env.E2E_PASSWORD,
        },
      }
    )

    const userData = await response.json()
    const userId = userData.user.id

    await page
      .getByRole('textbox', { name: 'Email' })
      .fill(process.env.E2E_EMAIL!)
    await page
      .getByRole('textbox', { name: 'Password' })
      .fill(process.env.E2E_PASSWORD!)
    await page.getByRole('button', { name: 'Sign in' }).click()

    await expect(page).toHaveURL('/dashboard')

    await supabase.auth.admin.deleteUser(userId)
  })
})

test.describe('Register', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/auth/register')
  })

  test('has proper title', async ({ page }) => {
    await expect(page).toHaveTitle('Sign up | FilesFront')
  })

  // todo: delete user after successful registration
  test('should register user', async ({ page, request }) => {
    const supabase = createClient({
      supabaseKey: process.env.API_SECRET,
    })

    await page
      .getByRole('textbox', { name: 'Email' })
      .fill(process.env.E2E_EMAIL!)
    await page
      .getByRole('textbox', { name: 'Password' })
      .fill(process.env.E2E_PASSWORD!)
    await page.getByRole('button', { name: 'Sign up' }).click()

    await expect(page).toHaveURL('/dashboard')

    // get logged in user data
    const response = await request.post(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/token?grant_type=password&apikey=${process.env.API_SECRET}`,
      {
        data: {
          email: process.env.E2E_EMAIL,
          password: process.env.E2E_PASSWORD,
        },
      }
    )

    const userData = await response.json()
    const userId = userData.user.id

    // delete test user
    await supabase.auth.admin.deleteUser(userId)
  })
})

test.describe('Logout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/auth/login')
  })

  test('should logout user', async ({ page, request }) => {
    const supabase = createClient({
      supabaseKey: process.env.API_SECRET,
    })

    // create an account for tests
    const response = await request.post(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/signup?apikey=${process.env.API_SECRET}`,
      {
        data: {
          email: process.env.E2E_EMAIL,
          password: process.env.E2E_PASSWORD,
        },
      }
    )

    const userData = await response.json()
    const userId = userData.user.id

    await page
      .getByRole('textbox', { name: 'Email' })
      .fill(process.env.E2E_EMAIL!)
    await page
      .getByRole('textbox', { name: 'Password' })
      .fill(process.env.E2E_PASSWORD!)
    await page.getByRole('button', { name: 'Sign in' }).click()

    await expect(page).toHaveURL('/dashboard')

    await page.getByText('KK').click()
    await page.getByText('Log out').click()

    await expect(page).toHaveURL('/auth/login')

    await supabase.auth.admin.deleteUser(userId)
  })
})
