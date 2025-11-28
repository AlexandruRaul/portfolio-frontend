// src/main.jsx
import { StrictMode } from 'react' // <-- On commente l'import
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>  <-- On enlève ou commente cette balise
    <App />
  // </StrictMode>, <-- On enlève ou commente cette balise fermante
)