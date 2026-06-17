import { Router } from 'express'

export const farmerRouter = Router()

farmerRouter.get('/farmers/:farmer_id/tokens', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — GET /api/v1/farmers/:farmer_id/tokens' })
})

farmerRouter.get('/farmers/:farmer_id/history', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — GET /api/v1/farmers/:farmer_id/history' })
})

farmerRouter.post('/transfers', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — POST /api/v1/transfers' })
})

farmerRouter.get('/certificates/:token_id', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — GET /api/v1/certificates/:token_id' })
})
