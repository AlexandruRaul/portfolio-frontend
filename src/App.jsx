// src/App.jsx

import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// 1. On importe notre Wrapper magique
import RevealOnScroll from './components/RevealOnScroll'; 

function App() {
  return (
    <>
      <MyNavbar />
      
      {/* Le Hero est tout en haut, pas besoin d'attendre le scroll, on le laisse tel quel */}
      <Hero /> 

      {/* 2. On emballe les autres sections */}
      
      <RevealOnScroll delay={200}> {/* Petit délai de 200ms pour le style */}
        <AboutMe />
      </RevealOnScroll>

      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>

      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>

      <Footer />
    </>
  )
}

export default App