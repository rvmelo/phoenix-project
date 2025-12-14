import React from 'react'
import CalculatorIcon from '@/assets/svg/calculator.svg'
import ChartIcon from '@/assets/svg/chart-icon.svg'
import DialogIcon from '@/assets/svg/dialog-icon.svg'
import TicketIcon from '@/assets/svg/ticket-icon.svg'
import UserIcon from '@/assets/svg/user-icon.svg'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { customTwMerge } from '@/utils/customTwMerge'

const IconsData = {
  calculator: {
    icon: <CalculatorIcon />,
    href: '/simulator',
  },
  chart: {
    icon: <ChartIcon />,
    href: '/dashboard',
  },
  dialog: {
    icon: <DialogIcon />,
    href: '/chat',
  },
  ticket: {
    icon: <TicketIcon />,
    href: '/tickets',
  },
  user: {
    icon: <UserIcon />,
    href: null,
  },
}

interface NavItemProps {
  name: 'calculator' | 'chart' | 'dialog' | 'ticket' | 'user'
}

export const NavItem: React.FC<NavItemProps> = ({ name }) => {
  const router = useRouter()

  const isSelected = router.pathname.includes(IconsData[name].href)

  const icon = IconsData[name].icon

  const path = IconsData[name].href || ''

  return (
    <Link href={path}>
      <div
        className={customTwMerge(
          'flex h-[3.75rem] w-16 cursor-pointer items-center justify-center rounded-xl ',
          isSelected ? 'bg-primary' : 'bg-[#2B3851]',
        )}
      >
        {icon}
      </div>
    </Link>
  )
}
