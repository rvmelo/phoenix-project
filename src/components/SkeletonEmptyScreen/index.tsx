import React from 'react'
import { UserSideBar } from '../UserSideBar'
import { UserTopBar } from '../UserTopBar'

interface SkeletonEmptyScreenProps {
  sectionName:
    | 'Simulador de Planos'
    | 'Dashboard'
    | 'Chat & Assistente Virtual'
    | 'Gestão de Tickets'
  children?: React.ReactNode
}

export const SkeletonEmptyScreen: React.FC<SkeletonEmptyScreenProps> = ({
  sectionName,
  children,
}) => {
  return (
    <div>
      <>
        <UserSideBar />
        <UserTopBar sectionTitle={sectionName} />
        <div className="grid min-h-screen grid-cols-[9.375rem_1fr] grid-rows-[auto_1fr]">
          <aside className="row-span-2"></aside>
          <header className="h-[5.5rem] w-full"></header>
          <main>
            {children || (
              <div className="flex flex-1 items-center justify-center pt-10">
                <div className="h-[32rem] w-[62.5rem] animate-pulse rounded-3xl bg-[#23283A]"></div>
              </div>
            )}
          </main>
        </div>
      </>
    </div>
  )
}
