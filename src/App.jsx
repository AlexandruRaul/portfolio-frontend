// src/App.jsx

import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll'; 
import BackToTop from './components/BackToTop'; 
import SqlTerminal from './components/SqlTerminal'; // <--- NOUVEL IMPORT

function App() {
  return (
    <>
      <BackToTop />
      <MyNavbar />
      
      {/* Le Hero */}
      <Hero />

      {/* Section À Propos */}
      <RevealOnScroll delay={200}>
        <AboutMe />
      </RevealOnScroll>

      {/* Section Expérience */}
      <RevealOnScroll>
        <Experience />
      </RevealOnScroll>

      {/* Section Projets */}
      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>

      {/* NOUVELLE SECTION : Terminal SQL Interactif */}
      <RevealOnScroll>
        <SqlTerminal />
      </RevealOnScroll>

      {/* Section Contact */}
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>

      <Footer />
      
      {/* Bouton retour en haut */}
      <BackToTop />
    </>
  )
}

export default App