// todo: add tests
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'

import * as stories from './Text.stories'

const { Default } = composeStories(stories)

describe('Text', () => {
  test('should render given text', () => {
    render(<Default />)

    expect(screen.getByText(Default.args.children as string)).toBeVisible()
  })
})
