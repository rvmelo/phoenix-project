import React from 'react'
import PlusIcon from '@/assets/svg/plus-icon.svg'

interface UserTopBarProps {
  buttonTitle?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  sectionTitle:
    | 'Simulador de Planos'
    | 'Dashboard'
    | 'Chat & Assistente Virtual'
    | 'Gestão de Tickets'
}

export const UserTopBar: React.FC<UserTopBarProps> = ({
  buttonTitle,
  onClick,
  sectionTitle,
}) => {
  return (
    <div className="fixed z-50 flex h-[5.5rem] w-full flex-row items-center justify-between bg-[#20273E] pl-[11.875rem] pr-[2.7rem]">
      <span className="text-s1 font-semibold text-[#F6F8FC]">
        {sectionTitle}
      </span>
      {!!buttonTitle && (
        <button
          className="flex h-10 w-[8rem] flex-row items-center justify-center gap-2 rounded-[6.25rem] bg-primary"
          onClick={onClick}
        >
          <PlusIcon />
          <span className="font-montserrat text-[0.75rem] font-semibold text-white">
            {buttonTitle}
          </span>
        </button>
      )}
    </div>
  )
}
