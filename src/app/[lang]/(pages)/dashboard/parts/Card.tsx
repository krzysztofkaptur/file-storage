import { Text } from '@/components'
import { Card, CardContent, CardHeader } from '@/ui'

type DashboardCardProps = {
  title: string
  content: string
  footer: string
  icon: JSX.Element
}

export const DashboardCard = ({
  title,
  content,
  footer,
  icon,
}: DashboardCardProps) => {
  return (
    <Card title='Total revenue' className='flex flex-1 flex-col gap-2 p-4'>
      <CardHeader className='flex flex-row items-center justify-between p-0 text-sm font-medium'>
        <Text>{title}</Text>
        {icon}
      </CardHeader>
      <CardContent className='p-0'>
        <Text className='text-3xl font-bold'>{content}</Text>
        <Text className='text-xs text-muted-foreground'>{footer}</Text>
      </CardContent>
    </Card>
  )
}
