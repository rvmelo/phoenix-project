import { api } from '..'

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

interface GetTicketsResponseDTO {
  data: TicketItem[]
  total: number
}

export const getTicketsService = async (accessToken: string) => {
  const { data } = await api.get<GetTicketsResponseDTO>(`/tickets`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return data
}
