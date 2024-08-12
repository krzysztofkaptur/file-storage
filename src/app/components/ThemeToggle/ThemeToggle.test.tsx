import { composeStories } from '@storybook/react'
import { userEvent } from '@storybook/test'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import * as stories from './ThemeToggle.stories'

afterEach(() => cleanup())

const { Default } = composeStories(stories)

describe('ThemeToggle', () => {
  test('should render the button', () => {
    render(<Default />)

    const button = screen.getByRole('button', { name: 'Toggle theme' })

    expect(button).toBeVisible()
  })

  test('should contain theme options', async () => {
    const user = userEvent.setup()
    render(<Default />)

    const button = screen.getByRole('button', { name: 'Toggle theme' })

    await user.click(button)

    const options = ['Light', 'Dark', 'System']

    for (let i = 0; i < options.length; i++) {
      const menuItem = screen.getByRole('menuitem', { name: options[i] })
      expect(menuItem).toBeVisible()
    }
  })

  // todo: add test for toggling different themes
})
