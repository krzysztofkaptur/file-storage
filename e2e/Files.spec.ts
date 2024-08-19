import { createClient } from '@/lib/utils/supabase/client'
import { expect, test } from '@playwright/test'

// todo: test for file download

const FILE_STORAGE = process.env.FILE_STORAGE!
const TEST_FILE_NAME = 'empty-test.pdf'

test.describe('Files', () => {
  const supabase = createClient({
    supabaseKey: process.env.API_SECRET,
  })
  let userId: string | null = null

  test.beforeAll(async ({ request }) => {
    // create an account for tests
    if (!userId) {
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
      userId = userData.user.id
    }
  })

  test.beforeEach(async ({ page }) => {
    await page.goto('/auth/login')

    await page
      .getByRole('textbox', { name: 'Email' })
      .fill(process.env.E2E_EMAIL!)
    await page
      .getByRole('textbox', { name: 'Password' })
      .fill(process.env.E2E_PASSWORD!)
    await page.getByRole('button', { name: 'Sign in' }).click()

    await expect(page).toHaveURL('/dashboard')
  })

  test.afterAll(async () => {
    // clean up test user
    await supabase.auth.admin.deleteUser(userId as string)
  })

  test('should have proper title', async ({ page }) => {
    await page.goto('/dashboard/files')

    await expect(page).toHaveTitle('Files | FilesFront')
  })

  test('should add file', async ({ page }) => {
    await page.goto('/dashboard/files')

    await page.getByRole('button', { name: 'Add file' }).click()
    await page
      .locator('input[type="file"]')
      .evaluate((element: HTMLElement) => element.click())

    await page
      .locator('input[type="file"]')
      .setInputFiles(`./e2e/${TEST_FILE_NAME}`)
    await page.getByRole('button', { name: 'Submit' }).click()

    await page.waitForResponse('/dashboard/files')

    await page.goto('/dashboard/files')
    await expect(page.getByText(TEST_FILE_NAME)).toBeVisible()

    // clean up the file
    await supabase.storage
      .from(FILE_STORAGE)
      .remove([`${userId}/${TEST_FILE_NAME}`])
  })

  test('should remove file', async ({ page }) => {
    await supabase.storage
      .from(`${FILE_STORAGE}`)
      .upload(`${userId}/${TEST_FILE_NAME}`, TEST_FILE_NAME, {
        cacheControl: '3600',
        upsert: true,
      })

    await page.goto('/dashboard/files')
    await page.locator('table button[data-state="closed"]').first().click()
    await page.getByRole('button', { name: 'Delete' }).click()

    await page.waitForResponse('/dashboard/files')

    await page.goto('/dashboard/files')
    await expect(page.getByText(TEST_FILE_NAME)).not.toBeVisible()
  })
})
