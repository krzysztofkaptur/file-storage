import type { Meta, StoryObj } from '@storybook/react'

import { Image } from './'

const meta = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    width: 100,
    height: 100,
    alt: 'some alt',
  },
}
