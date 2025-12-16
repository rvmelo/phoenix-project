import { NextApiRequest, NextApiResponse } from 'next'
import { parse } from 'cookie'
import { getTicketsService } from '@/services/getTicketsService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const cookies = parse(req.headers.cookie || '')
  const accessToken = cookies.access_token || ''

  if (!accessToken) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const { page, limit, status, priority } = req.query as {
    page: string
    limit: string
    status: string
    priority: string
  }

  const pageNumber = parseInt(page, 10)
  const limitNumber = parseInt(limit, 10)

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

  const skip = (pageNumber - 1) * limitNumber

  const data = {
    tickets: tickets.slice(skip, skip + limitNumber),
    lastPage: Math.ceil(tickets.length / 5),
    openCount,
    progressCount,
    closedCount,
    averageDurationHours,
  }

  return res.status(200).json(data)
}
