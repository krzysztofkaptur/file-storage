import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'

import * as stories from './PageHeader.stories'

const { Default } = composeStories(stories)

describe('PageHeader', () => {
  test('should render title', () => {
    render(<Default />)

    expect(screen.getByText(Default.args.title as string)).toBeVisible()
  })
})
