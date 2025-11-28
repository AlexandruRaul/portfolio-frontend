// src/components/Hero.jsx
import styles from './Hero.module.css';
import { TypeAnimation } from 'react-type-animation';
import HeroChart from './HeroChart';

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.leftColumn}>
          <h1 className={styles.name}>Alexandru Rak</h1>
          
          <TypeAnimation
            sequence={[
              'Data Analyst',
              2000,
              'Développeur d\'Applications',
              2000,
              'Passionné de Full Stack',
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
            {/* CORRECTION ICI : href="#projets" */}
            <a href="#projets" className={styles.ctaButton}>
              Voir mes projets
            </a>
            {/* CORRECTION ICI : href="#contact" */}
            <a href="#contact" className={styles.secondaryButton}>
              Me contacter
            </a>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <HeroChart />
        </div>

      </div>
    </section>
  );
}