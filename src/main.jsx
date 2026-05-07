import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Importamos los CSS en orden de menor a mayor especificidad.
// global → layout → buttons/form (componentes).
import './styles/global.css'
import './styles/layout.css'
import './styles/buttons.css'
import './styles/form.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
