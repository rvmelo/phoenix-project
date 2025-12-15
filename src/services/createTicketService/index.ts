import { api } from '..'

export interface CreateTicketRequestDTO {
  ticketData: {
    ticketId: string
    priority: 'Urgente' | 'Média' | 'Baixa'
    client: string
    email: string
    subject: string
    status: 'Aberto' | 'Em andamento' | 'Fechado'
    responsible: string
  }
  accessToken: string
}

interface CreateTicketResponseDTO {
  access_token: string
}

export const createTicketService = async ({
  ticketData,
  accessToken,
}: CreateTicketRequestDTO) => {
  const { data: responseData } = await api.post<CreateTicketResponseDTO>(
    `/tickets`,
    ticketData,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  return responseData
}
