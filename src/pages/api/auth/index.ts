/* eslint-disable camelcase */
import { authService } from '@/services/authService'
import { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'
import { getUsersByEmailService } from '@/services/getUserByEmailService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  const { access_token } = await authService({ email, password })

  const data = await getUsersByEmailService({
    email,
    accessToken: access_token,
  })

  res.setHeader(
    'Set-Cookie',
    serialize('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    }),
  )

  return res.status(200).json({ message: 'Login successful', user: data })
}
