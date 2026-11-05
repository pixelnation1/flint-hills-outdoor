import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Static metadata serves crawlers before JavaScript; React 19 owns it after mount.
// Remove only the marked build-time tags so route changes cannot leave duplicates.
document.querySelectorAll('[data-rh="true"]').forEach((tag) => tag.remove())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
