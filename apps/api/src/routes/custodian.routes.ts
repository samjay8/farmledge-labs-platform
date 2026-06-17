import { Router } from 'express'

export const custodianRouter = Router()

custodianRouter.post('/deposits', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — POST /api/v1/deposits' })
})

custodianRouter.post('/exits/:token_id', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — POST /api/v1/exits/:token_id' })
})

custodianRouter.get('/warehouse/:warehouse_id/inventory', (req, res) => {
  res.status(200).json({ success: true, data: 'STUB — GET /api/v1/warehouse/:warehouse_id/inventory' })
})
