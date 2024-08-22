// todo: add password input
import type { Meta, StoryObj } from '@storybook/react'

import { InputGroup } from './InputGroup'

const meta = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'test',
    label: 'Test',
  },
}

export const WithPlaceholder: Story = {
  args: {
    ...Default.args,
    placeholder: 'sample placeholder',
  },
}

export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'Problem',
  },
}

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}
