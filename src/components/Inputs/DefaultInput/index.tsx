import React, { InputHTMLAttributes } from 'react'
import PasswordIcon from '@/assets/svg/password-icon.svg'
import { customTwMerge } from '@/utils/customTwMerge'
import { useSafeState } from '@/hooks/useSafeState'

export interface DefaultInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean
  inputLabel?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  inputClassName?: string
  inputWrapperClassName?: string
}

export const DefaultInput = React.forwardRef<
  HTMLInputElement,
  DefaultInputProps
>(
  (
    {
      isPassword,
      inputLabel,
      className,
      error,
      rightIcon,
      leftIcon,
      inputClassName,
      inputWrapperClassName,
      ...props
    },
    ref,
  ) => {
    const [isTextVisible, setIsTextVisible] = useSafeState(!isPassword)

    return (
      <div
        className={customTwMerge('flex flex-col gap-2', inputWrapperClassName)}
      >
        <div
          className={customTwMerge(
            'flex w-full max-w-[47.7rem] items-center justify-between rounded-[1.25625rem] border-[1px] border-white px-[1.2725rem] py-[1.3rem]',
            className,
          )}
        >
          <div className="flex w-full flex-row items-center gap-3">
            {!!leftIcon && leftIcon}
            <input
              ref={ref}
              {...props}
              className={customTwMerge(
                'w-full border-none bg-transparent text-[1.11rem] text-[#C9C9C9] outline-none ring-0 placeholder:text-[1.11rem] placeholder:text-[#C9C9C9] focus:ring-0',
                inputClassName,
              )}
              type={isTextVisible ? 'text' : 'password'}
            />
            {!!rightIcon && rightIcon}
          </div>

          {isPassword && (
            <button
              type="button"
              onClick={() => setIsTextVisible((prev) => !prev)}
            >
              <PasswordIcon />
            </button>
          )}
        </div>
        {inputLabel && !error && (
          <span className="font-weight-400 pl-5 font-inter text-[1rem] leading-[1.2725rem] text-[#C9C9C9]">
            {inputLabel}
          </span>
        )}
        {error && (
          <span className="font-weight-400 pl-5 font-inter text-t1 text-error2 ">
            {error}
          </span>
        )}
      </div>
    )
  },
)

DefaultInput.displayName = 'DefaultInput'
