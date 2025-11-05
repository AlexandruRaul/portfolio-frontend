// src/components/Footer.jsx

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      
      <div className={styles.socialLinks}>
        {/* 'target="_blank"' ouvre le lien dans un nouvel onglet.
          'rel="noopener noreferrer"' est une mesure de sécurité
          importante pour les liens en nouvel onglet.
        */}
        <a 
          href="https://www.linkedin.com/in/alexandru-rak"
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.link}
        >
          LinkedIn
        </a>
        
        {/* Mettez votre lien GitHub ici */}
        <a 
          href="#"
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.link}
        >
          GitHub
        </a>
      </div>

      <div className={styles.copyright}>
        {/* On utilise JavaScript pour que l'année 
          se mette à jour automatiquement.
        */}
        © {new Date().getFullYear()} Alexandru Rak. Tous droits réservés.
      </div>

    </footer>
  );
}