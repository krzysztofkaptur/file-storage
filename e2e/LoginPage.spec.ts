import { expect, test } from '@playwright/test'

test.describe('Login page', () => {
  test('has proper title', async ({ page }) => {
    await page.goto('/auth/login')

    await expect(page).toHaveTitle('Sign in | FilesFront')
  })
})
