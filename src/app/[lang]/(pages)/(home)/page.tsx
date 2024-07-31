import { useMemo } from 'react'
import { db, todos } from '@/lib/db'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import {
  Avatar,
  Badge,
  Calendar,
  Card,
  Checkbox,
  Combobox,
  DatePicker,
  Drawer,
  DropdownMenu,
  FAQ,
  Image,
  InputGroup,
  Modal,
  Pagination,
  Select,
  Skeleton,
  Switch,
  Table,
  Tabs,
  Text,
  Textarea,
  ThemeToggle,
  Toast,
  Tooltip,
} from '@/components'

import type { Locale } from '@/lib/i18n'

type Props = {
  params: { lang: Locale }
}

const selectOptions = [
  {
    label: 'Fruits',
    title: true,
  },
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Banana',
    value: 'banana',
  },
  {
    label: 'Blueberry',
    value: 'blueberry',
  },
  {
    label: 'Grapes',
    value: 'grapes',
  },
  {
    label: 'Grapes',
    value: 'grapes',
  },
  {
    label: 'Pineapple',
    value: 'pineapple',
  },
]

export default async function Home({ params: { lang } }: Props) {
  const footerSample = <Badge text='badge' />

  const data = await db.select().from(todos)
  const t = await getDictionary(lang)

  console.log(data)

  return (
    <main>
      <Card footer={footerSample}>Some content</Card>
      {/* <ThemeToggle />
      <Avatar src='https://github.com/shadcn.png' alt='@shadcn' fallback='CN' />
      <InputGroup name='test' label='Test' />
      <Badge text='badge' />
      <Image src='/images/next.svg' alt='' width={100} height={20} />
      <Select label='Sample' name='sample' options={selectOptions} />
      <Text variant='h1'>{t.home.title}</Text>
      <Modal />
      <FAQ />
      <Checkbox />
      <Combobox />
      <DropdownMenu />
      <Pagination />
      <Drawer />
      <Textarea />
      <Switch />
      <Tabs />
      <Toast />
      <Tooltip />
      <Calendar />
      <DatePicker />
      <Table />
      <Skeleton /> */}
    </main>
  )
}
