import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'

import * as stories from './Badge.stories'

const { Default } = composeStories(stories)

describe('Badge', () => {
  test('should render passed text', () => {
    render(<Default />)

    const el = screen.getByText(new RegExp(Default.args.text as string))

    expect(el).toBeVisible()
  })
})
