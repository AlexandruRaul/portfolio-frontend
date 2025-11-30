// src/components/Hero.jsx
import styles from './Hero.module.css';
import { TypeAnimation } from 'react-type-animation';
import HeroChart from './HeroChart';
import DataParticles from './DataParticles'; // Assurez-vous que ce fichier existe

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      
      {/* L'arrière-plan animé (Particules) */}
      <DataParticles />

      {/* Le contenu principal (z-index pour passer au-dessus du fond) */}
      <div className={styles.contentWrapper} style={{ position: 'relative', zIndex: 1 }}>
        
        {/* COLONNE GAUCHE : Texte + Boutons */}
        <div className={styles.leftColumn}>
          <h1 className={styles.name}>Alexandru Rak</h1>
          
          {/* Animation de texte (Machine à écrire) */}
          <TypeAnimation
            sequence={[
              'Data Analyst',
              2000,
              'Développeur Full Stack', // Légère simplification pour l'impact
              2000,
              'Intégrateur IA & LLM', // <--- NOUVELLE LIGNE CLÉ
              2000,
              'Passionné de Machine Learning', // <--- NOUVELLE LIGNE CLÉ
              2000,
            ]}
            wrapper="h2"
            className={styles.subtitle}
            speed={50}
            repeat={Infinity}
          />
          
          <p className={styles.description}>
            Je ne me contente pas d'analyser les données. Je conçois et construis les outils 
            pour les collecter, les traiter et leur donner vie.
          </p>
          
          <div className={styles.buttonGroup}>
            <a href="#projets" className={styles.ctaButton}>
              Voir mes projets
            </a>
            
            {/* BOUTON CV : Pointe vers le fichier dans le dossier 'public' */}
            <a 
              href="/CV/CV_Alexandru_Rak-data_analyst.pdf" 
              download="CV_Alexandru_Rak-data_analyst.pdf" 
              className={styles.secondaryButton}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              CV
            </a>

            <a href="#contact" className={styles.secondaryButton}>
              Contact
            </a>
          </div>
        </div>

        {/* COLONNE DROITE : Graphique Interactif */}
        <div className={styles.rightColumn}>
          <HeroChart />
        </div>

      </div>
    </section>
  );
}