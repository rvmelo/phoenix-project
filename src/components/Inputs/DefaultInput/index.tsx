import React, { InputHTMLAttributes } from 'react'
import PasswordIcon from '@/assets/svg/password-icon.svg'

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isPassword?: boolean
  inputLabel?: string
}

export const DefaultInput: React.FC<DefaultInputProps> = ({
  isPassword,
  inputLabel,
  ...props
}) => {
  return (
    <div className="flex w-full max-w-[47.7rem] items-center justify-between rounded-[1.25625rem] border-[1px] border-white px-[1.2725rem] py-[11.18px]">
      <input
        {...props}
        className="border-none bg-transparent outline-none ring-0 focus:ring-0"
      />
      {isPassword && <PasswordIcon />}
      {inputLabel && (
        <span className="font-weight-400 font-inter text-[1rem] leading-[1.2725rem] text-[#C9C9C9]">
          {inputLabel}
        </span>
      )}
    </div>
  )
}
