/* eslint-disable camelcase */
import { NextApiRequest, NextApiResponse } from 'next'
import { parse } from 'cookie'

import {
  CreateTicketRequestDTO,
  createTicketService,
} from '@/services/createTicketService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const cookies = parse(req.headers.cookie || '')
  const accessToken = cookies.access_token || ''

  if (!accessToken) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const {
    ticketData: { client, email, priority, subject, responsible },
  } = req.body as CreateTicketRequestDTO

  if (!client || !email || !priority || !subject || !responsible) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  await createTicketService({
    ticketData: {
      ticketId: 'string',
      client,
      email,
      priority,
      subject,
      status: 'Aberto',
      responsible,
    },
    accessToken,
  })

  return res.status(200).json({ message: 'Ticket created successfully' })
}
