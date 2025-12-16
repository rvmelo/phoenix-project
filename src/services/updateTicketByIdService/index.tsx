import { api } from '..'

type TicketData = {
  priority: 'Urgente' | 'Média' | 'Baixa'
  client: string
  email: string
  subject: string
  status: 'Aberto' | 'Em andamento' | 'Fechado'
  responsible: string
}

export interface UpdateTicketByIdRequestDTO {
  ticketId: string
  ticketData: Partial<TicketData>
  accessToken: string
}

interface UpdateTicketByIdResponseDTO {
  access_token: string
}

export const updateTicketByIdService = async ({
  ticketId,
  ticketData,
  accessToken,
}: UpdateTicketByIdRequestDTO) => {
  const { data: responseData } = await api.patch<UpdateTicketByIdResponseDTO>(
    `/tickets/${ticketId}`,
    ticketData,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  return responseData
}
