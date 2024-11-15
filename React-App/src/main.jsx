import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Liria} from './Greeting.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Liria />
  </StrictMode>,
)
