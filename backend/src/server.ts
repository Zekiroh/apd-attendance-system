import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import { supabase } from './config/supabase'

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({
    message: 'APD Attendance API is running',
  })
})

app.get('/api/health/db', async (_req, res) => {
  const { error } = await supabase
    .from('users')
    .select('id')
    .limit(1)

  if (error) {
    return res.status(500).json({
      message: 'Database connection failed',
      error: error.message,
    })
  }

  return res.json({
    message: 'Database connected successfully',
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})