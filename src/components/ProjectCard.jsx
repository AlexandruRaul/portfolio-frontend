// src/components/ProjectCard.jsx

import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, imageUrl, DynamicComponent, description, tech }) {
  
  // LOGIQUE : Si on a un composant dynamique, on ajoute la classe 'noHoverEffect'
  // Sinon, on laisse la classe vide (l'animation par défaut s'appliquera)
  const cardClass = DynamicComponent 
    ? `${styles.card} ${styles.noHoverEffect}` 
    : styles.card;

  return (
    // On utilise notre variable 'cardClass' ici
    <div className={cardClass}>
      
      <div className={styles.imageContainer}>
        {DynamicComponent ? (
          <div className={styles.dynamicWrapper}>
            <DynamicComponent />
          </div>
        ) : (
          <img src={imageUrl} alt={title} className={styles.image} />
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.techContainer}>
          {tech.map((item) => (
            <span key={item} className={styles.techTag}>
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}