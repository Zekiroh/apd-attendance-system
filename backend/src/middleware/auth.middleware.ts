import { NextFunction, Request, Response } from 'express'
import { User } from '@supabase/supabase-js'
import { supabase } from '../config/supabase'

export interface AuthenticatedRequest extends Request {
  authUser?: User
}

export const requireAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      message: 'Unauthorized. Missing access token.',
    })
  }

  const token = authHeader.replace('Bearer ', '').trim()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token)

  if (error || !user) {
    return res.status(401).json({
      message: 'Unauthorized. Invalid or expired token.',
    })
  }

  req.authUser = user
  next()
}