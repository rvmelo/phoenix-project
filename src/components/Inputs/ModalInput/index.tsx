import { customTwMerge } from '@/utils/customTwMerge'
import React, { InputHTMLAttributes } from 'react'

export interface ModalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const ModalInput = React.forwardRef<HTMLInputElement, ModalInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div
        className={customTwMerge(
          'w-full max-w-[32.125rem] rounded-3xl border-[1px] border-white px-6 py-[17px]',
          className,
        )}
      >
        <input
          ref={ref}
          className={
            'border-none bg-transparent text-t1 text-[#FBFBFB80] outline-none ring-0 placeholder:text-t1 placeholder:text-[#FBFBFB80] focus:ring-0'
          }
          {...props}
        />
        {error && (
          <span className="font-weight-400 font-inter text-t1 text-error2">
            {error}
          </span>
        )}
      </div>
    )
  },
)

ModalInput.displayName = 'ModalInput'
