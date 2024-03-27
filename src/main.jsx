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
      <div className="bg-webp bg-cover bg-center filter grayscale fixed inset-0 z-0" style={{ backgroundImage: 'url("../images/stipling.jpg")', backgroundSize: 'cover', opacity: '0.04' }} />
      <main className="relative z-10">
          <div>
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
      </main>
      <Footer />
  </React.StrictMode>,
);
