import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Skills } from './components/Skills.jsx'
import { Break } from './components/Break.jsx'
import { Projects } from './components/Projects.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import './output.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div className="relative">
      <div className="absolute inset-0 bg-webp bg-cover bg-center" style={{ backgroundImage: 'url("../images/stipling.jpg")', backgroundSize: '100%', opacity: '4%' }} />
      <div className="relative z-10">
        <Hero />
        <Break />
        <About />
        <Break />
        <Skills />
        <Break />
        <Projects />
        <Break />
        <Contact />
      </div>
    </div>
    <Footer />
  </React.StrictMode>,
);
