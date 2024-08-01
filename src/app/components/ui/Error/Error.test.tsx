import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'

import Meta, { Default } from './Error.stories'

const Error = composeStory(Default, Meta)

describe('Error', () => {
  test('Checks if the form is valid', () => {
    render(<Error />)

    const text = screen.getByText(Default.args?.error)

    expect(text).toBeVisible()
  })
})
