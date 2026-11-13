import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './content-second-conditional-pratica.ts'
import './content-second-conditional.ts'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
