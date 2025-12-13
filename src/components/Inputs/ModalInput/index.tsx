import React, { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const ModalInput: React.FC<InputProps> = ({ ...props }) => {
  return (
    <div className="w-full max-w-[32.125rem] rounded-3xl border-[1px] border-white px-6 py-[17px]">
      <input
        className="border-none bg-transparent outline-none ring-0 focus:ring-0"
        {...props}
      />
    </div>
  )
}
