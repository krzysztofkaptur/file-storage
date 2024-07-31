import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'

import * as stories from './InputGroup.stories'

const { Default, WithPlaceholder, WithError, Required, Disabled } =
  composeStories(stories)

describe('InputGroup', () => {
  test('should render input field and label', () => {
    render(<Default />)

    expect(screen.getByText(Default.args.label as string)).toBeVisible()
    expect(screen.getByRole('textbox')).toBeVisible()
  })

  test('should render placeholder text', () => {
    render(<WithPlaceholder />)

    expect(
      screen.getByPlaceholderText(WithPlaceholder.args.placeholder as string)
    ).toBeVisible()
  })

  test('should render error', () => {
    render(<WithError />)

    expect(screen.getByText(WithError.args.error as string)).toBeVisible()
  })

  test('should render require indicator', () => {
    render(<Required />)

    expect(screen.getByText(/\*/i)).toBeVisible()
  })

  // todo: disabled property not working correctly
  test.skip('should render disabled field', () => {
    render(<Disabled />)

    expect(screen.getByLabelText(Disabled.args.label as string)).toBeDisabled()
  })
})
