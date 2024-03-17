import React from 'react'
import ReactDOM from 'react-dom/client'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Skills } from './components/Skills.jsx'
import { Break } from './components/Break.jsx'
import { Projects } from './components/Projects.jsx'
import './output.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero />
    <Break />
    <About />
    <Break />
    <Skills />
    <Break />
    <Projects />
  </React.StrictMode>,
)
