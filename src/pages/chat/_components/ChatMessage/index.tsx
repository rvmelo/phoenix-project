import React from 'react'
import { GetChatDataServiceResponseDTO } from '@/services/getChatDataService'
import IAIcon from '@/assets/svg/ia-icon.svg'
import MessageReceivedIcon from '@/assets/svg/message-received-icon.svg'

interface ChatMessageProps {
  message: GetChatDataServiceResponseDTO['messages'][number]
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  console.log(message.type)

  if (message.type === 'user_message') {
    return (
      <div className="w-full max-w-[31.5rem] rounded-t-2xl rounded-br-2xl border border-[#FFFFFF33] bg-[#1876D2] px-4 pb-3 pt-2">
        <div className="flex flex-col gap-2">
          <span className="font-montserrat text-t1 font-semibold text-[#FFFFFF80]">
            {message.author}
          </span>
          <span className="font-montserrat text-t1 leading-5 text-white">
            {message.content}
          </span>
        </div>
        <div className="mt-1 flex w-full flex-row items-center justify-end gap-[10px]">
          <span className="font-montserrat text-t1 font-[0.75rem] text-white">
            {message.timestamp}
          </span>
          <MessageReceivedIcon />
        </div>
      </div>
    )
  }

  if (message.type === 'assistant_message') {
    return (
      <div className="w-full max-w-[31.5rem] rounded-t-2xl rounded-bl-2xl border border-[#FFFFFF33] bg-[#E1F2FD33] px-4 pb-3 pt-2">
        <div className="flex flex-col gap-2">
          <span className="font-montserrat text-t1 font-semibold text-[#FFFFFF80]">
            {message.author}
          </span>
          <span className="font-montserrat text-t1 leading-5 text-white">
            {message.content}
          </span>
        </div>
        <div className="mt-1 flex w-full flex-row items-center justify-end">
          <span className="font-montserrat text-t1 font-[0.75rem] text-white">
            {message.timestamp}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full max-w-[31.5rem] rounded-t-2xl rounded-bl-2xl border border-[#FFFFFF33] bg-[#E1F2FD33] px-4 pb-3 pt-2">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <IAIcon />
            <span className="font-montserrat text-t1 font-semibold text-[#FFFFFF80]">
              {message.author}
            </span>
          </div>
          <span className="font-montserrat text-t1 leading-5 text-white">
            {message.content}
          </span>
        </div>
        <div className="mt-1 flex w-full flex-row items-center justify-end">
          <span className="font-montserrat text-t1 font-[0.75rem] text-white">
            {message.timestamp}
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3">
        <button className="h-10 w-full max-w-44 rounded-[6.25rem] bg-[#1876D2]">
          <span className="font-montserrat text-[0.75rem] font-semibold text-white">
            Enviar Proposta
          </span>
        </button>
        <button className="h-10 w-full max-w-44 rounded-[6.25rem] bg-[#1876D2]">
          <span className="font-montserrat text-[0.75rem] font-semibold text-white">
            Fazer Ligação
          </span>
        </button>
        <button className="h-10 w-full max-w-44 rounded-[6.25rem] bg-[#1876D2]">
          <span className="font-montserrat text-[0.75rem] font-semibold text-white">
            Ver histórico
          </span>
        </button>
      </div>
    </div>
  )
}
