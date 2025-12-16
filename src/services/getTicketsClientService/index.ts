import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export type TicketItem = {
  id: string
  ticketId: string
  client: string
  priority: 'Urgente' | 'Média' | 'Baixa'
  email: string
  subject: string
  status: 'Aberto' | 'Em andamento' | 'Fechado'
  createdAt: string
  updatedAt: string
  responsible: string
}

interface IGetTicketsRequestDTO {
  page: number
  limit: number
  status: 'Aberto' | 'Em andamento' | 'Fechado'
  priority: 'Urgente' | 'Média' | 'Baixa'
}

interface GetTicketsResponseDTO {
  openCount: number
  progressCount: number
  closedCount: number
  tickets: TicketItem[]
  averageDurationHours: number
  lastPage: number
}

export const getTicketsClientService = async ({
  limit,
  page,
  status,
  priority,
}: IGetTicketsRequestDTO) => {
  const { data } = await axios.get<GetTicketsResponseDTO>(`/api/get-tickets`, {
    params: { limit, page, status, priority },
  })

  return data
}

export function useGetTicketService({
  limit,
  page,
  status,
  priority,
}: IGetTicketsRequestDTO) {
  const methods = useQuery({
    queryKey: ['/api/get-tickets', limit, page, status, priority],
    queryFn: () => getTicketsClientService({ limit, page, status, priority }),
    placeholderData: () => ({
      tickets: [],
      openCount: 0,
      progressCount: 0,
      closedCount: 0,
      averageDurationHours: 0,
      lastPage: 0,
    }),
    staleTime: Infinity,
  })

  return methods
}
