// src/components/RevealOnScroll.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './RevealOnScroll.module.css';

export default function RevealOnScroll({ children, threshold = 0.1, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si l'élément entre dans l'écran
        if (entry.isIntersecting) {
          // On ajoute un petit délai optionnel avant de déclencher
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Une fois visible, on arrête d'observer (l'animation ne se joue qu'une fois)
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        // threshold: 0.1 signifie "déclenche quand 10% de l'élément est visible"
        threshold: threshold, 
        rootMargin: "0px 0px -50px 0px" // Petite marge pour ne pas déclencher trop tôt en bas
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay, threshold]);

  return (
    <div 
      ref={ref} 
      // On ajoute la classe 'visible' seulement quand isVisible est true
      className={`${styles.reveal} ${isVisible ? styles.visible : ''}`}
    >
      {children}
    </div>
  );
}