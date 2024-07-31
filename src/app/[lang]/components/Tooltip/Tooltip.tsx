import {
  Button,
  Tooltip as UiTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/ui'

export const Tooltip = () => {
  return (
    <TooltipProvider>
      <UiTooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </UiTooltip>
    </TooltipProvider>
  )
}
