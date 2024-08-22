import { composeStories } from '@storybook/react'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import * as stories from './Image.stories'

afterEach(() => cleanup())

const { Default } = composeStories(stories)

describe('Image', () => {
  test('should render image', () => {
    render(<Default />)

    const image = screen.getByRole('img')

    expect(image).toBeVisible()
  })

  test('should have alt text', () => {
    render(<Default />)

    const image = screen.getByRole('img')

    expect(image).toHaveAttribute('alt', Default.args.alt)
  })

  test('should have passed width and height', () => {
    render(<Default />)

    const image = screen.getByRole('img')

    expect(image).toHaveAttribute('height', `${Default.args.height}`)
    expect(image).toHaveAttribute('width', `${Default.args.width}`)
  })
})
