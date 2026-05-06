import { Router } from 'express'
import { getMe } from './user.controller'

const router = Router()

router.get('/me', getMe)

export default router