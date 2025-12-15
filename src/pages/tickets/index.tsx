import { UserSideBar } from '@/components/UserSideBar'
import { UserTopBar } from '@/components/UserTopBar'
import { InfoCard } from './_components/InfoCard'
import { GetServerSideProps } from 'next'
import { getTicketsService, TicketItem } from '@/services/getTicketsService'
import { parse } from 'cookie'
import { TicketsTable } from './_components/TicketsTable'
import { TicketModal } from './_components/TicketModal'
import { useSafeState } from '../hooks/useSafeState'

type TicketsPageProps = {
  openCount: number
  progressCount: number
  closedCount: number
  tickets: TicketItem[]
  averageDurationHours: number
}

export default function Tickets({
  openCount,
  progressCount,
  closedCount,
  averageDurationHours,
  tickets,
}: TicketsPageProps) {
  const [isModalOpen, setIsModalOpen] = useSafeState(false)

  return (
    <>
      {isModalOpen && <TicketModal onClose={() => setIsModalOpen(false)} />}
      <UserSideBar />
      <UserTopBar
        sectionTitle="Gestão de Tickets"
        buttonTitle="Novo Ticket"
        onClick={() => setIsModalOpen(true)}
      />
      <div className="grid min-h-screen grid-cols-[9.375rem_1fr] grid-rows-[auto_1fr]">
        <aside className="row-span-2"></aside>
        <header className="h-[5.5rem] w-full"></header>
        <main className="flex flex-col items-center justify-center pb-8 pt-14">
          <div className="flex flex-col gap-10">
            <div className="flex w-full flex-row justify-between gap-6">
              <InfoCard type="ticket" value={openCount} />
              <InfoCard type="progress" value={progressCount} />
              <InfoCard type="solved" value={closedCount} />
              <InfoCard type="time" value={averageDurationHours} />
            </div>
            <div className="flex flex-col gap-4 rounded-3xl bg-[linear-gradient(135deg,#1F2A44,#141C2F)] px-4 pb-4 pt-10">
              <h2 className="font-montserrat text-s1 text-white">
                Lista de Tickets
              </h2>
              <TicketsTable data={tickets} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = parse(req.headers.cookie || '')
  const accessToken = cookies.access_token || ''

  // Opcional: redirecionar se não estiver autenticado
  if (!accessToken) {
    return {
      redirect: { destination: '/login', permanent: false },
    }
  }

  const { data: tickets } = await getTicketsService(accessToken)

  const openCount = tickets.filter((t) => t.status === 'Aberto').length
  const progressCount = tickets.filter(
    (t) => t.status === 'Em andamento',
  ).length
  const closedCount = tickets.filter((t) => t.status === 'Fechado').length

  const closedTickets = tickets.filter((t) => t.status === 'Fechado')
  const averageDurationHours =
    closedTickets.length > 0
      ? Number(
          (
            closedTickets.reduce((acc, t) => {
              const created = new Date(t.createdAt).getTime()
              const updated = new Date(t.updatedAt).getTime()
              const diffMs = Math.max(0, updated - created)
              return acc + diffMs
            }, 0) /
            closedTickets.length /
            3600000
          ).toFixed(1),
        )
      : 0

  return {
    props: {
      tickets: tickets.slice(0, 5),
      openCount,
      progressCount,
      closedCount,
      averageDurationHours,
    },
  }
}
