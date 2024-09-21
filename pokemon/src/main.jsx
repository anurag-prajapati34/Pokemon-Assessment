import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PokemonContextProviderr } from './contexts/PokemonContext.jsx'

createRoot(document.getElementById('root')).render(
<PokemonContextProviderr>
<App />
</PokemonContextProviderr>
   

)
