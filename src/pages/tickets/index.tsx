import { UserSideBar } from '@/components/UserSideBar'
import { UserTopBar } from '@/components/UserTopBar'
import { InfoCard } from './_components/InfoCard'

export default function Tickets() {
  return (
    <>
      <UserSideBar />
      <UserTopBar sectionTitle="Gestão de Tickets" buttonTitle="Novo Ticket" />
      <div className="grid min-h-screen grid-cols-[9.375rem_1fr] grid-rows-[auto_1fr]">
        <aside className="row-span-2"></aside>
        <header className="h-[5.5rem] w-full"></header>
        <main className="flex flex-col justify-center">
          <div className="flex flex-row justify-center gap-6">
            <InfoCard type="ticket" />
            <InfoCard type="progress" />
            <InfoCard type="solved" />
            <InfoCard type="time" />
          </div>
        </main>
      </div>
    </>
  )
}
