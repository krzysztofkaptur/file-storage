import { composeStories } from '@storybook/react'
import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach, describe, expect, test } from 'vitest'

import * as stories from './DropdownMenu.stories'

afterEach(() => cleanup())

const { Default } = composeStories(stories)

describe('DropdownMenu', () => {
  test('should render trigger', () => {
    render(<Default />)

    const button = screen.getByRole('button', {
      name: 'Click me',
    })

    expect(button).toBeVisible()
  })

  test('should open the dropdown', async () => {
    const user = userEvent.setup()
    render(<Default />)

    const button = screen.getByRole('button', {
      name: 'Click me',
    })

    await user.click(button)

    expect(screen.getByText('My Account')).toBeVisible()
  })
})
