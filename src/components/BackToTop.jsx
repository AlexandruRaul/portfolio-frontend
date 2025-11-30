import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // On écoute le scroll pour afficher/masquer le bouton
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Nettoyage de l'écouteur d'événement
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Fonction pour remonter en haut
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
          // Styles en ligne pour la simplicité (pas de fichier CSS externe nécessaire ici)
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#0A4ABF', // Bleu signature
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          title="Retour en haut"
          aria-label="Retour en haut de page"
        >
          ↑
        </button>
      )}
    </>
  );
}