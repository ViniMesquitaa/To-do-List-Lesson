import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './route/App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
