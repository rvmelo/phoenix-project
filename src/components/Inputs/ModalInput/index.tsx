import { customTwMerge } from '@/utils/customTwMerge'
import React, { InputHTMLAttributes } from 'react'

export interface ModalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel?: string
  error?: string
}

export const ModalInput = React.forwardRef<HTMLInputElement, ModalInputProps>(
  ({ className, error, inputLabel, ...props }, ref) => {
    return (
      <div className="flex w-full max-w-[32.125rem] flex-col gap-3">
        {inputLabel && (
          <span className="ml-4 font-grotesk text-[1rem] text-t1 font-normal text-[#F6F8FC]">
            {inputLabel}
          </span>
        )}
        <div
          className={customTwMerge(
            'w-full max-w-[32.125rem] rounded-3xl border-[1px] border-[#FFFFFF1A] bg-[#FFFFFF0D] px-6 py-[17px]',
            className,
          )}
        >
          <input
            ref={ref}
            className={
              'w-full border-none bg-transparent text-t1 text-[#FBFBFB80] outline-none ring-0 placeholder:text-t1 placeholder:text-[#FBFBFB80] focus:ring-0'
            }
            {...props}
          />
        </div>
        {error && (
          <span className="font-weight-400 ml-4 font-inter text-t1 text-error2">
            {error}
          </span>
        )}
      </div>
    )
  },
)

ModalInput.displayName = 'ModalInput'
