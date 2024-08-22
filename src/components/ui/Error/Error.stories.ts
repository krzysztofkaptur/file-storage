import type { Meta, StoryObj } from '@storybook/react'

import { Error } from './Error'

const meta = {
  title: 'Ui/Error',
  component: Error,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    error: 'test kek',
  },
}
