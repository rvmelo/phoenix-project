import { customTwMerge } from '@/utils/customTwMerge'
import { format, parseISO } from 'date-fns'
import PencilIcon from '@/assets/svg/pencil-icon.svg'
import ArrowRightIcon from '@/assets/svg/arrow-right-icon.svg'
import { TicketItem } from '@/services/getTicketsService'

const priorityStyles = {
  Urgente: 'bg-error2 text-[0.75rem] text-white font-medium',
  Média: 'bg-[#B5EDFF] text-[0.75rem] text-background font-medium',
  Baixa: 'bg-[#E0F7FF] text-[0.75rem] text-background font-medium',
}

const statusStyles = {
  Aberto: 'bg-[#43D2CB] text-[0.75rem] text-background font-medium',
  'Em andamento': 'bg-[#D2B843] text-[0.75rem] text-background font-medium',
  Fechado: 'bg-error2 text-[0.75rem] text-white font-medium',
}

interface TicketsTableProps {
  data: TicketItem[]
  handleModalOpen: (ticket: TicketItem) => void
}

export function TicketsTable({ data, handleModalOpen }: TicketsTableProps) {
  return (
    <div className="max-w-[75rem] rounded-2xl bg-[#23283A] p-6 ">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-4 py-3 text-start font-normal">ID</th>
            <th className="px-4 py-3 text-start font-normal">Prioridade</th>
            <th className="px-4 py-3 text-start font-normal">Cliente</th>
            <th className="px-4 py-3 text-start font-normal">Assunto</th>
            <th className="px-4 py-3 text-start font-normal">Status</th>
            <th className="px-4 py-3 text-start font-normal">Criado em</th>
            <th className="px-4 py-3 text-start font-normal">Responsável</th>
            <th className="px-4 py-3 text-start font-normal">Ações</th>
          </tr>
        </thead>

        <tbody>
          {data.map((ticket) => (
            <tr
              key={ticket.id}
              className="border-b border-white/5 hover:bg-white/5"
            >
              <td className="px-4 py-4 font-medium">{ticket.ticketId}</td>

              <td className="px-4 py-4">
                <span
                  className={customTwMerge(
                    'rounded-full px-3 py-1 text-xs font-semibold',
                    priorityStyles[ticket.priority],
                  )}
                >
                  {ticket.priority}
                </span>
              </td>

              <td className="px-4 py-4">
                <div className="break-words font-semibold">{ticket.client}</div>
                <div className="break-all font-normal">{ticket.email}</div>
              </td>

              <td className="px-4 py-4 font-semibold">{ticket.subject}</td>

              <td className="px-4 py-4">
                <span
                  className={customTwMerge(
                    'whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold',
                    statusStyles[ticket.status],
                  )}
                >
                  {ticket.status}
                </span>
              </td>

              <td className="px-4 py-4 font-semibold">
                {format(parseISO(ticket.createdAt), 'dd/MM/yyyy')}
              </td>

              <td className="px-4 py-4 font-semibold">{ticket.responsible}</td>

              <td className="px-4 py-4">
                <div className="flex h-full flex-row items-center gap-1">
                  <button
                    onClick={() => handleModalOpen(ticket)}
                    className="mr-3 flex flex-row items-center gap-2 text-[0.75rem] font-normal text-[#EFF6FF] hover:underline"
                  >
                    Editar
                    <PencilIcon />
                  </button>
                  <button className="flex flex-row items-center gap-2 text-[0.75rem] font-normal text-[#EFF6FF] hover:underline">
                    Ver
                    <ArrowRightIcon />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
