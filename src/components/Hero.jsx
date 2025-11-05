// src/components/Hero.jsx

import styles from './Hero.module.css';
// 1. On importe le composant d'animation
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <h1 className={styles.name}>Alexandru Rak</h1>
      
      {/* 2. On REMPLACE votre 'h2' statique par ce bloc : */}
      <TypeAnimation
        // C'est la séquence des textes
        sequence={[
          'Data Analyst', // Affiche "Data Analyst"
          2000, // Attend 2 secondes
          'Développeur d\'Applications', // Affiche "Développeur..."
          2000, // Attend 2 secondes
          'Passionné de Full Stack', // Affiche un autre texte
          2000,
        ]}
        wrapper="h2" // Il sera rendu comme un <h2>
        className={styles.subtitle} // On garde votre style
        speed={50} // Vitesse d'écriture
        repeat={Infinity} // Répète à l'infini
      />
      
      <p className={styles.description}>
        Je ne me contente pas d'analyser les données. Je conçois et construis les outils 
        pour les collecter, les traiter et leur donner vie.
      </p>
      
      <a href="#projets" className={styles.ctaButton}>
        Voir mes projets
      </a>
    </section>
  );
}