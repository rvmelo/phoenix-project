import React, { InputHTMLAttributes } from 'react'
import PasswordIcon from '@/assets/svg/password-icon.svg'
import { customTwMerge } from '@/utils/customTwMerge'

export interface DefaultInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean
  inputLabel?: string
  error?: string
}

export const DefaultInput = React.forwardRef<
  HTMLInputElement,
  DefaultInputProps
>(({ isPassword, inputLabel, className, error, ...props }, ref) => {
  return (
    <div
      className={customTwMerge(
        'flex w-full max-w-[47.7rem] items-center justify-between rounded-[1.25625rem] border-[1px] border-white px-[1.2725rem] py-[11.18px]',
        className,
      )}
    >
      <input
        ref={ref}
        {...props}
        className={
          'border-none bg-transparent outline-none ring-0 focus:ring-0'
        }
      />
      {isPassword && <PasswordIcon />}
      {inputLabel && !error && (
        <span className="font-weight-400 font-inter text-[1rem] leading-[1.2725rem] text-[#C9C9C9]">
          {inputLabel}
        </span>
      )}
      {error && (
        <span className="font-weight-400 font-inter text-t1 text-error2 ">
          {error}
        </span>
      )}
    </div>
  )
})

DefaultInput.displayName = 'DefaultInput'
