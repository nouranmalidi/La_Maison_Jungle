import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// J'importe le composant App 
import App from './App.jsx'

// Je récupère l'id root qui se trouve dans le fichier index.html et j'insère le composant App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
