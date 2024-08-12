import { composeStories } from '@storybook/react'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import * as stories from './Button.stories'

const { Default, Destructive, Loading, Disabled } = composeStories(stories)

afterEach(() => cleanup())

describe('Button', () => {
  test('should render content', () => {
    render(<Default />)

    const button = screen.getByRole('button', {
      name: Default.args.children as string,
    })

    expect(button).toBeVisible()
  })

  test('should be desctructive variant', () => {
    render(<Destructive />)

    const button = screen.getByRole('button', {
      name: Destructive.args.children as string,
    })

    expect(button).toHaveClass('bg-destructive')
  })

  test('should be loading', () => {
    render(<Loading />)

    const button = screen.getByRole('button')
    const status = screen.getByRole('status')

    expect(status).toBeVisible()
    expect(button).toBeDisabled()
  })

  test('should be disabled', () => {
    render(<Disabled />)

    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
  })
})
