// src/components/ProjectCard.jsx

import styles from './ProjectCard.module.css'; // On importe son propre style

// On reçoit les 'props' (propriétés) depuis le composant parent
export default function ProjectCard({ title, description, tech }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      {/* On affiche la liste des technologies */}
      <div className={styles.techContainer}>
        {/* * Le "Pourquoi" de tech.map() :
          * C'est la façon "React" de faire une boucle. 
          * On dit : "Pour chaque 'item' dans ma liste 'tech', 
          * crée-moi un 'span'".
        */}
        {tech.map((item) => (
          <span key={item} className={styles.techTag}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}