import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { estimateApiPlugin } from './server/viteEstimatePlugin.js'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  if (env.RESEND_API_KEY) {
    process.env.RESEND_API_KEY = env.RESEND_API_KEY
  }

  return {
    plugins: [react(), estimateApiPlugin()],
  }
})
