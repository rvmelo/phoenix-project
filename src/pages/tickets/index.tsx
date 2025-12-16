import { UserSideBar } from '@/components/UserSideBar'
import { UserTopBar } from '@/components/UserTopBar'
import { InfoCard } from './_components/InfoCard'
import { GetServerSideProps } from 'next'
import { getTicketsService, TicketItem } from '@/services/getTicketsService'
import { parse } from 'cookie'
import { TicketsTable } from './_components/TicketsTable'
import { TicketModal } from './_components/TicketModal'
import { useSafeState } from '../hooks/useSafeState'
import { DefaultInput } from '@/components/Inputs/DefaultInput'
import SearchIcon from '@/assets/svg/search-icon.svg'
import DropdownIcon from '@/assets/svg/dropdown-arrow-icon.svg'
import FirstPageIcon from '@/assets/svg/p-first-page.svg'
import ChevronLeftIcon from '@/assets/svg/p-chevron-left.svg'
import ChevronRightIcon from '@/assets/svg/p-chevron-right.svg'
import LastPageIcon from '@/assets/svg/p-last-page.svg'

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
  const [selectedTicket, setSelectedTicket] = useSafeState<TicketItem | null>(
    null,
  )

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedTicket(null)
  }

  const handleModalOpen = (ticket: TicketItem) => {
    setIsModalOpen(true)
    setSelectedTicket(ticket)
  }

  return (
    <>
      {isModalOpen && (
        <TicketModal
          onClose={handleModalClose}
          selectedTicket={selectedTicket}
        />
      )}
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
              <div>
                <h2 className="font-montserrat text-s1 text-white">
                  Lista de Tickets
                </h2>
                <div className="mt-6 flex w-full flex-1 flex-row gap-2">
                  <DefaultInput
                    leftIcon={<SearchIcon />}
                    placeholder="Buscar por ID, cliente ou assunto..."
                    className=" h-[2.375rem] w-full max-w-[44.5rem] rounded-3xl border-none bg-background"
                    inputClassName="placeholder:text-t1 placeholder:text-[#F6F8FC]"
                    inputWrapperClassName="w-full max-w-[44.5rem]"
                  />
                  <DefaultInput
                    rightIcon={<DropdownIcon />}
                    className="h-[2.375rem] w-[10.56rem] rounded-3xl border-none bg-background"
                    placeholder="Todos os status"
                    inputClassName="placeholder:text-t1 placeholder:text-[#F6F8FC]"
                  />
                  <DefaultInput
                    rightIcon={<DropdownIcon />}
                    className="h-[2.375rem] w-[12.625rem] rounded-3xl border-none bg-background"
                    placeholder="Todas as prioridades"
                    inputClassName="placeholder:text-t1 placeholder:text-[#F6F8FC]"
                  />
                  <DefaultInput
                    rightIcon={<DropdownIcon />}
                    className="h-[2.375rem] w-[13.47rem] rounded-3xl border-none bg-background"
                    placeholder="Todos os responsáveis"
                    inputClassName="placeholder:text-t1 placeholder:text-[#F6F8FC]"
                  />
                </div>
              </div>
              <TicketsTable data={tickets} handleModalOpen={handleModalOpen} />
              <div className="flex w-full flex-row items-center justify-end">
                <div className="flex flex-row items-center gap-10">
                  <button>
                    <FirstPageIcon />
                  </button>
                  <button>
                    <ChevronLeftIcon />
                  </button>
                  <span className="font-grotesk text-t3">1 de 5</span>
                  <button>
                    <ChevronRightIcon />
                  </button>
                  <button>
                    <LastPageIcon />
                  </button>
                </div>
              </div>
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
