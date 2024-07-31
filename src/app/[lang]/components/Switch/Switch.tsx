import { Label, Switch as UiSwitch } from '@/ui'

export const Switch = () => {
  return (
    <div className='flex items-center space-x-2'>
      <UiSwitch id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  )
}
