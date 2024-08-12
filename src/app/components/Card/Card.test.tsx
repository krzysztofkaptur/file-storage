import { composeStories } from '@storybook/react'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import * as cardStories from './Card.stories'

const { Default, WithTitle, WithDescription, WithFooter } =
  composeStories(cardStories)

afterEach(() => cleanup())

describe('Card', () => {
  test('should render content', () => {
    render(<Default />)

    expect(screen.getByText('content')).toBeVisible()
  })

  test('should render title', () => {
    render(<WithTitle />)

    expect(screen.getByText(WithTitle.args.title as string)).toBeVisible()
  })

  test('should render description', () => {
    render(<WithDescription />)

    expect(
      screen.getByText(WithDescription.args.description as string)
    ).toBeVisible()
  })

  test('should render footer', () => {
    render(<WithFooter />)

    expect(screen.getByText(WithFooter.args.footer as string)).toBeVisible()
  })
})
