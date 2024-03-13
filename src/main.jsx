import React from 'react'
import ReactDOM from 'react-dom/client'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import './output.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <About />
  </React.StrictMode>,
)
