import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LandingScene from './LandingScene.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LandingScene /> */}
    <App />
    
  </StrictMode>,
)
