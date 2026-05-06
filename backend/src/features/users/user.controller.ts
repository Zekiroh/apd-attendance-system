import { Request, Response } from 'express'
import { getCurrentUser } from './user.service'

export const getMe = (_req: Request, res: Response) => {
  const user = getCurrentUser()

  return res.json({
    user,
  })
}