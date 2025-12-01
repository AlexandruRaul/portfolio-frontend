import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Assure-toi d'avoir installé react-icons

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 1. GESTION DU SCROLL AU CHARGEMENT (Règle le bug du site qui démarre en bas)
  useEffect(() => {
    // Force le navigateur à remonter tout en haut immédiatement
    window.scrollTo(0, 0);
    
    // Nettoie l'URL si elle contient un #contact (pour éviter que le navigateur ne redescende)
    if (window.location.hash) {
      window.history.replaceState(null, null, ' ');
    }
  }, []);

  // 2. GESTION DE L'AFFICHAGE DU BOUTON
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fonction pour remonter
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#2563eb', // Le même bleu que ta Navbar et tes liens
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            transition: 'all 0.3s ease',
            opacity: isVisible ? 1 : 0, // Petite animation d'apparition
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = '#1d4ed8'; // Bleu plus foncé au survol
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#2563eb';
          }}
          title="Retour en haut"
          aria-label="Retour en haut de page"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}