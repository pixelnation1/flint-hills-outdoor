import { processEstimate } from '../server/sendEstimateEmail.js'

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ ok: false })
    return
  }

  let body = req.body ?? {}
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}')
    } catch {
      res.status(400).json({ ok: false })
      return
    }
  }

  const result = await processEstimate(body)
  res.status(result.status).json(result.json)
}
