import { describe, test, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { composeStories } from '@storybook/react'

import * as cardStories from './Card.stories'
import * as badgeStories from '../Badge/Badge.stories'

const { Default, WithTitle, WithDescription, WithFooter } =
  composeStories(cardStories)

afterEach(() => cleanup())

describe('Card', () => {
  test('should render content', () => {
    render(<Default />)

    expect(screen.getByText(badgeStories.Default.args.text)).toBeVisible()
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
