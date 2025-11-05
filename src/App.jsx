// src/App.jsx

import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // <--- 1. IMPORTEZ LE FOOTER

function App() {
  return (
    <>
      <MyNavbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer /> {/* <--- 2. AJOUTEZ-LE À LA TOUTE FIN */}
    </>
  )
}

export default App