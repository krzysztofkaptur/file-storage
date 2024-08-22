import { Text } from '@/lib/icons'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/ui'

import { Drawer } from '.'

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

const trigger = (
  <Button variant='ghost'>
    <Text size={16} />
  </Button>
)

export const Default: Story = {
  args: {
    trigger,
  },
}
