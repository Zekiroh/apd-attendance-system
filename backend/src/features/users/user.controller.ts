import { Response } from 'express'
import { AuthenticatedRequest } from '../../middleware/auth.middleware'
import { getUserProfileByGoogleId } from './user.service'

export const getMe = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.authUser) {
    return res.status(401).json({
      message: 'Unauthorized.',
    })
  }

  const user = await getUserProfileByGoogleId(req.authUser)

  if (!user) {
    return res.json({
      needsProfileCompletion: true,
      authUser: {
        id: req.authUser.id,
        email: req.authUser.email,
      },
      user: null,
    })
  }

  return res.json({
    needsProfileCompletion: false,
    user,
  })
}