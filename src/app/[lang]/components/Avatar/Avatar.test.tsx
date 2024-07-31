import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'

import * as stories from './Avatar.stories'

const { Default } = composeStories(stories)

describe('Avatar', () => {
  test('should render fallback when no src provided', () => {
    render(<Default />)

    const avatar = screen.getByText(Default.args.fallback as string)

    expect(avatar).toBeVisible()
  })
})
