import React, { InputHTMLAttributes } from 'react'
import SendIcon from '@/assets/svg/send-icon.svg'
import { customTwMerge } from '@/utils/customTwMerge'

interface ChatInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onclick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onclick,
  className,
  ...props
}) => {
  return (
    <div
      className={customTwMerge(
        'flex w-full max-w-[58.875rem]  flex-row items-center justify-between rounded-[6.25rem] border-[1px] border-white px-[1.33rem] py-4',
        className,
      )}
    >
      <input
        {...props}
        className="border-none bg-transparent text-[1.11rem] text-[#EFF6FF] outline-none ring-0 placeholder:text-[1.11rem] placeholder:text-[#EFF6FF] focus:ring-0"
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
