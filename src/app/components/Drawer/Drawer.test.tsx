import { composeStories } from '@storybook/react'
import { cleanup, render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { afterEach, describe, expect, test } from 'vitest'

import * as stories from './Drawer.stories'

afterEach(() => cleanup())

const { Default } = composeStories(stories)

describe('Drawer', () => {
  test('should open the drawer', async () => {
    const user = userEvent.setup()
    render(<Default />)

    const button = screen.getByRole('button')

    expect(
      screen.queryByRole('button', { name: 'Close' })
    ).not.toBeInTheDocument()

    await user.click(button)

    expect(screen.getByRole('button', { name: 'Close' })).toBeVisible()
  })
})
