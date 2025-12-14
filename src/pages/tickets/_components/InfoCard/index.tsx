import React from 'react'
import TicketIcon from '@/assets/svg/opened-ticket-icon.svg'
import ChatIcon from '@/assets/svg/chat-icon.svg'
import CheckedIcon from '@/assets/svg/checked-icon.svg'
import ClockIcon from '@/assets/svg/clock-icon.svg'

const IconsData = {
  ticket: {
    icon: <TicketIcon />,
    label: 'Tickets Abertos',
  },
  progress: {
    icon: <ChatIcon />,
    label: 'Em andamento',
  },
  solved: {
    icon: <CheckedIcon />,
    label: 'Resolvidos hoje',
  },
  time: {
    icon: <ClockIcon />,
    label: 'Tempo Médio',
  },
}

interface InfoCardProps {
  type: 'ticket' | 'progress' | 'solved' | 'time'
  value?: number
}

export const InfoCard: React.FC<InfoCardProps> = ({ type, value = 0 }) => {
  const icon = IconsData[type].icon
  const label = IconsData[type].label

  return (
    <div className="bg-[linear-gradient(135deg,#1F2A44,#141C2F) flex w-full max-w-60 flex-col gap-8 rounded-2xl border-[1px] border-[#F6F8FC1A] p-6">
      <span className="font-montserrat text-t1 text-white">{label}</span>
      <div className="flex flex-row items-center justify-between">
        <span className="text-t3 font-bold text-white">
          {type === 'time' ? `${value}h` : value}
        </span>
        {icon}
      </div>
    </div>
  )
}
