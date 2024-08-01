import { Badge } from './'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      // todo: get types from available types
      options: ['default', 'secondary', 'destructive', 'outline'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'sample',
    variant: 'default',
  },
}

export const Destructive: Story = {
  args: {
    text: 'sample',
    variant: 'destructive',
  },
}

export const Outline: Story = {
  args: {
    text: 'sample',
    variant: 'outline',
  },
}

export const Secondary: Story = {
  args: {
    text: 'sample',
    variant: 'secondary',
  },
}
