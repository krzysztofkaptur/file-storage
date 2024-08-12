import { bytesToSize, formatDate } from '@/lib/utils'
import { composeStories } from '@storybook/react'
import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'vitest'

import * as stories from './Table.stories'

afterEach(() => cleanup())

const { Default } = composeStories(stories)

describe('Table', () => {
  test('should render table with content', () => {
    render(<Default />)

    // headers
    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeVisible()
    expect(screen.getByRole('columnheader', { name: 'Created' })).toBeVisible()
    expect(screen.getByRole('columnheader', { name: 'Updated' })).toBeVisible()
    expect(screen.getByRole('columnheader', { name: 'Type' })).toBeVisible()
    expect(screen.getByRole('columnheader', { name: 'Size' })).toBeVisible()

    const date = new Date()
    date.setDate(date.getDate() + 1)
    const tomorrow = formatDate(date.toString())
    const today = formatDate(new Date().toString())

    // body
    expect(screen.getByRole('cell', { name: 'item 1' })).toBeVisible()
    expect(screen.getByRole('cell', { name: today })).toBeVisible()
    expect(screen.getByRole('cell', { name: tomorrow })).toBeVisible()
    expect(screen.getByRole('cell', { name: 'item 1' })).toBeVisible()
    expect(screen.getByRole('cell', { name: 'item 1' })).toBeVisible()
  })
})
