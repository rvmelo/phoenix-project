import { NextApiRequest, NextApiResponse } from 'next/types'
import { parse } from 'cookie'
import {
  UpdateTicketByIdRequestDTO,
  updateTicketByIdService,
} from '@/services/updateTicketByIdService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PATCH') {
    return res.status(405).end()
  }

  const cookies = parse(req.headers.cookie || '')
  const accessToken = cookies.access_token || ''

  if (!accessToken) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const { ticketId, ticketData } = req.body as UpdateTicketByIdRequestDTO

  if (!ticketId) {
    return res.status(400).json({ message: 'Ticket id is required' })
  }

  await updateTicketByIdService({
    ticketId,
    ticketData,
    accessToken,
  })

  return res.status(200).json({ message: 'Ticket updated successfully' })
}
