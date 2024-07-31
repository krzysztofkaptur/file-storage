'use client'

import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const PASSWORD_ICON_SIZE = 16

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
      <div
        className={cn(
          'flex items-center rounded-md border border-input bg-background px-3 py-2',
          className
        )}
      >
        <input
          type={showPassword ? 'text' : type}
          className='w-full bg-transparent text-sm ring-offset-background file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50'
          ref={ref}
          {...props}
        />
        {
          <>
            {type === 'password' && !showPassword ? (
              <button onClick={() => setShowPassword(true)}>
                <Eye size={PASSWORD_ICON_SIZE} />
              </button>
            ) : null}
          </>
        }
        {
          <>
            {type === 'password' && showPassword ? (
              <button onClick={() => setShowPassword(false)}>
                <EyeOff size={PASSWORD_ICON_SIZE} />
              </button>
            ) : null}
          </>
        }
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
