import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenuLabel } from '@/ui'

import { DropdownMenu } from '.'

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

const TriggerText: string = 'Click me'
const DropdownLabel: string = 'My Account'

const trigger = <button>{TriggerText}</button>
const content = <DropdownMenuLabel>{DropdownLabel}</DropdownMenuLabel>

export const Default: Story = {
  args: {
    trigger,
    children: content,
  },
}
