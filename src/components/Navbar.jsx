import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icônes Burger et Croix

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.brand} onClick={closeMenu}>
          Alexandru Rak
        </a>

        {/* Bouton Burger (Visible uniquement sur mobile via CSS) */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Les Liens */}
        {/* Si le menu est ouvert, on ajoute la classe 'active' */}
        <ul className={`${styles.links} ${isMenuOpen ? styles.active : ''}`}>
          <li><a href="#about" onClick={closeMenu}>À Propos</a></li>
          <li><a href="#experience" onClick={closeMenu}>Expérience</a></li>
          <li><a href="#projets" onClick={closeMenu}>Projets</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}