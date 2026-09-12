import { processEstimate } from '../server/sendEstimateEmail.js'

function readJson(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    let size = 0

    req.on('data', (chunk) => {
      size += chunk.length
      if (size > 20_000) {
        reject(new Error('Payload too large'))
        return
      }
      chunks.push(chunk)
    })
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8')
        resolve(raw ? JSON.parse(raw) : {})
      } catch (error) {
        reject(error)
      }
    })
    req.on('error', reject)
  })
}

function sendJson(res, status, json) {
  const body = JSON.stringify(json)
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Content-Length', Buffer.byteLength(body))
  res.end(body)
}

async function handleNodeRequest(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { ok: false })
    return
  }

  try {
    const body = await readJson(req)
    const result = await processEstimate(body)
    sendJson(res, result.status, result.json)
  } catch {
    sendJson(res, 400, { ok: false })
  }
}

function isEstimatePath(url = '') {
  return url.split('?')[0] === '/api/estimate'
}

export function estimateApiPlugin() {
  return {
    name: 'estimate-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!isEstimatePath(req.url)) {
          next()
          return
        }
        handleNodeRequest(req, res)
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!isEstimatePath(req.url)) {
          next()
          return
        }
        handleNodeRequest(req, res)
      })
    },
  }
}
