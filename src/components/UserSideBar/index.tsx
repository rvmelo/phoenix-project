import React from 'react'
import NortusIcon from '@/assets/svg/nortus-icon-2.svg'
import { NavItem } from './components/NavItem'
import { useUserStore } from '@/zustand-store/stores'

export const UserSideBar: React.FC = () => {
  const user = useUserStore((state) => state.user)

  const formatName = () => {
    const parts = user?.name?.trim().split(/\s+/).filter(Boolean) ?? []
    const first = parts[0]?.[0] ?? ''
    const second = parts[1]?.[0] ?? ''
    const initials = `${first}${second}`.toUpperCase()
    return initials || '?'
  }

  return (
    <aside className="fixed z-[999] flex h-[100vh] w-[9.375rem] flex-col items-center justify-between rounded-br-[2.5rem] rounded-tr-[2.5rem] bg-[#20273E] pb-10 pt-10 shadow-xl">
      <NortusIcon />
      <div className="flex flex-col items-center gap-10">
        <NavItem name="chart" />
        <NavItem name="ticket" />
        <NavItem name="dialog" />
        <NavItem name="user" />
        <NavItem name="calculator" />
      </div>

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
        <span>{formatName()}</span>
      </div>
    </aside>
  )
}
