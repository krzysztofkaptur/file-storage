import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'

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

export default async function Home() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  // const footerSample = <Badge text='badge' />

  return (
    <main>
      <p>Hello {data.user.email}</p>
      {/* <Card footer={footerSample}>Some content</Card> */}
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
      <Textarea />
      <Switch />
      <Tabs />
      <Drawer />
      <Toast />
      <Tooltip />
      <Calendar />
      <DatePicker />
      <Table />
      <Skeleton /> */}
    </main>
  )
}
