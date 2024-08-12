import { composeStories } from '@storybook/react'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import * as stories from './TopMenu.stories'

afterEach(() => cleanup())

const { Default } = composeStories(stories)

describe('TopMenu', () => {
  test('should render content', () => {
    render(<Default />)

    expect(screen.getByText('some content')).toBeVisible()
  })
})
