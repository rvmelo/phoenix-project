import React from 'react'
import NortusIcon from '@/assets/svg/nortus-icon-2.svg'
import { NavItem } from './components/NavItem'

export const UserSideBar: React.FC = () => {
  return (
    <div className="fixed z-[999] flex h-[100vh] w-[9.375rem] flex-col items-center justify-between rounded-br-[2.5rem] rounded-tr-[2.5rem] bg-[#20273E] pb-10 pt-10">
      <NortusIcon />
      <div className="flex flex-col items-center gap-10">
        <NavItem name="chart" />
        <NavItem name="ticket" />
        <NavItem name="dialog" />
        <NavItem name="user" />
        <NavItem name="calculator" />
      </div>

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
        <span>AC</span>
      </div>
    </div>
  )
}
