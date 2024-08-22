import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <p>content</p>
    </Card>
  ),
}

export const WithTitle: Story = {
  ...Default,
  args: {
    title: 'Some title',
  },
}

export const WithDescription: Story = {
  ...Default,
  args: {
    description: 'Some description',
  },
}

export const WithFooter: Story = {
  ...Default,
  args: {
    footer: 'some footer element',
  },
}
