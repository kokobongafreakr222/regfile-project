import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
console.log('Root element:', root)

try {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  console.log('React rendered successfully')
} catch (e) {
  console.error('React render error:', e)
}
