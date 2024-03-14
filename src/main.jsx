import React from 'react'
import ReactDOM from 'react-dom/client'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Skills } from './components/Skills.jsx'
// import { Separator } from './components/Separator.jsx'
import { Break } from './components/Break.jsx'
import './output.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <Break mt={0} mb={24} />
    <About />
    <Break />
    <Skills />
  </React.StrictMode>,
)
