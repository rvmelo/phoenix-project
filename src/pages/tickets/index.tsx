import { UserSideBar } from '@/components/UserSideBar'
import { UserTopBar } from '@/components/UserTopBar'
import { InfoCard } from './_components/InfoCard'
import { TicketItem } from '@/services/getTicketsService'
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
import { useGetTicketService } from '@/services/getTicketsClientService'
import { useQueryClient } from '@tanstack/react-query'
import { Dropdown } from '@/components/DropDown'

const limit = 5
const priorityOptions = [
  { value: 'Urgente', label: 'Urgente' },
  { value: 'Média', label: 'Média' },
  { value: 'Baixa', label: 'Baixa' },
  { value: null, label: 'Todos as prioridades' },
]
const statusOptions = [
  { value: 'Aberto', label: 'Aberto' },
  { value: 'Em andamento', label: 'Em andamento' },
  { value: 'Fechado', label: 'Fechado' },
  { value: null, label: 'Todos os status' },
]

export default function Tickets() {
  const [page, setPage] = useSafeState(1)

  const queryClient = useQueryClient()

  const [priority, setPriority] = useSafeState<
    'Urgente' | 'Média' | 'Baixa' | ''
  >('')
  const [status, setStatus] = useSafeState<
    'Aberto' | 'Em andamento' | 'Fechado' | ''
  >('')

  const {
    data: {
      tickets,
      openCount,
      progressCount,
      closedCount,
      averageDurationHours,
      lastPage,
    },
    isFetching,
  } = useGetTicketService({
    limit,
    page,
    status,
    priority,
  })

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

  const onInvalidateQuery = () => {
    queryClient.invalidateQueries({
      queryKey: ['/api/get-tickets', limit, page, status, priority],
    })
  }

  if (isFetching) return null

  return (
    <>
      {isModalOpen && (
        <TicketModal
          onClose={handleModalClose}
          selectedTicket={selectedTicket}
          onInvalidateQuery={onInvalidateQuery}
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
                  <Dropdown
                    options={priorityOptions}
                    value={priority}
                    setValue={(value) =>
                      setPriority(value as 'Urgente' | 'Média' | 'Baixa')
                    }
                    dropDownContentPosition="popper"
                    trigger={
                      <DefaultInput
                        rightIcon={<DropdownIcon />}
                        disabled={true}
                        inputWrapperClassName="cursor-pointer z-[9999]"
                        className="h-[2.375rem] w-[10.56rem] rounded-3xl border-none bg-background"
                        placeholder={priority || 'Todos os status'}
                        inputClassName="placeholder:text-t1 placeholder:text-[#F6F8FC]"
                      />
                    }
                  />
                  <Dropdown
                    options={statusOptions}
                    value={status}
                    setValue={(value) =>
                      setStatus(value as 'Aberto' | 'Em andamento' | 'Fechado')
                    }
                    dropDownContentPosition="popper"
                    trigger={
                      <DefaultInput
                        rightIcon={<DropdownIcon />}
                        disabled={true}
                        inputWrapperClassName="cursor-pointer z-[9999]"
                        className="h-[2.375rem] w-[12.625rem] rounded-3xl border-none bg-background"
                        placeholder={status || 'Todos os status'}
                        inputClassName="placeholder:text-t1 placeholder:text-[#F6F8FC]"
                      />
                    }
                  />
                  <DefaultInput
                    rightIcon={<DropdownIcon />}
                    disabled={true}
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
                  <button
                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                  >
                    <ChevronLeftIcon />
                  </button>
                  <span className="font-grotesk text-t3">
                    {page} de {lastPage}
                  </span>
                  <button onClick={() => setPage((prev) => prev + 1)}>
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
