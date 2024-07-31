import { render, screen, cleanup } from '@testing-library/react'
import { vi, expect, describe, test, afterEach } from 'vitest'
import { composeStories } from '@storybook/react'
import userEvent from '@testing-library/user-event'

import * as stories from './Select.stories'

class MockPointerEvent extends Event {
  button: number
  ctrlKey: boolean
  pointerType: string

  constructor(type: string, props: PointerEventInit) {
    super(type, props)
    this.button = props.button || 0
    this.ctrlKey = props.ctrlKey || false
    this.pointerType = props.pointerType || 'mouse'
  }
}

window.PointerEvent = MockPointerEvent as any
window.HTMLElement.prototype.scrollIntoView = vi.fn()
window.HTMLElement.prototype.releasePointerCapture = vi.fn()
window.HTMLElement.prototype.hasPointerCapture = vi.fn()

afterEach(() => cleanup())

const { Default, WithLabel, WithPlaceholder, Required, Disabled } =
  composeStories(stories)

describe('Select', () => {
  test('should render given options', async () => {
    const user = userEvent.setup()
    render(<Default />)

    const button = screen.getByRole('combobox')
    await user.click(button)

    Default.args.options?.forEach((option) => {
      expect(screen.getByText(option.label)).toBeVisible()
    })
  })

  test('should render label', async () => {
    render(<WithLabel />)

    expect(screen.getByText(WithLabel.args.label as string)).toBeVisible()
  })

  test('should render placeholder', async () => {
    render(<Required />)

    expect(screen.getByText(/\*/i)).toBeVisible()
  })

  test('should render require indicator', async () => {
    render(<WithPlaceholder />)

    expect(
      screen.getByText(WithPlaceholder.args.placeholder as string)
    ).toBeVisible()
  })

  test('should render disabled field', async () => {
    render(<Disabled />)

    const button = screen.getByRole('combobox')
    expect(button).toBeDisabled()
  })

  test('should choose an option', async () => {
    const user = userEvent.setup()
    render(<Default />)

    await user.click(screen.getByRole('combobox'))

    const options = await screen.findAllByRole('option')
    const chosenOption = options[1]

    await user.click(chosenOption)

    expect(screen.getByText(chosenOption.textContent as string)).toBeVisible()
  })
})
