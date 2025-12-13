import React, { InputHTMLAttributes } from 'react'
import SendIcon from '@/assets/svg/send-icon.svg'

interface ChatInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onclick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ChatInput: React.FC<ChatInputProps> = ({ onclick, ...props }) => {
  return (
    <div
      className="flex w-full max-w-[58.875rem]  flex-row items-center justify-between rounded-[6.25rem] border-[1px] border-white px-[1.33rem] py-4
    "
    >
      <input
        {...props}
        className="border-none bg-transparent outline-none ring-0 focus:ring-0"
      />
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary"
        onClick={onclick}
      >
        <SendIcon />
      </button>
    </div>
  )
}
