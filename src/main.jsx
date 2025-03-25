import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './views/Home/Home'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
