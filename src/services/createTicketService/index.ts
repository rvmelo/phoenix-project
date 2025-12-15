import { api } from '..'

interface CreateTicketRequestDTO {
  ticketId: string
  priority: 'Urgente' | 'Média' | 'Baixa'
  client: string
  email: string
  subject: string
  status: 'Aberto' | 'Em andamento' | 'Fechado'
  responsible: string
}

interface CreateTicketResponseDTO {
  access_token: string
}

export const createTicketService = async (data: CreateTicketRequestDTO) => {
  const { data: responseData } = await api.post<CreateTicketResponseDTO>(
    `/tickets`,
    data,
  )

  return responseData
}
