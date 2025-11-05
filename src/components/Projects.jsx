// src/components/Projects.jsx

import styles from './Projects.module.css';
import ProjectCard from './ProjectCard'; // <-- On importe notre "brique" !

// On définit nos données de projet ici
const projectData = [
  {
    title: "Système d'Analyse Qualité",
    description: "Mise en place d'un système de collecte de données (tests, tickets) et suivi de KPIs qualité via des dashboards pour piloter l'amélioration produit.",
    tech: ["Python", "SQL", "RobotFramework", "Dashboards"]
  },
  {
    title: "Refonte ERP (Développement)",
    description: "Développement et refonte d'un ERP personnalisé en PHP pour optimiser la performance, avec mise en œuvre de nouvelles fonctionnalités.",
    tech: ["PHP", "SQL", "Javascript", "UX Design"]
  },
  {
    title: "Portfolio Web React (Ce site !)",
    description: "Création d'un site portfolio 'from scratch' pour démontrer mes compétences en développement web moderne et en intégration.",
    tech: ["React", "Javascript", "CSS Modules", "Vite"]
  }
];


export default function Projects() {
  return (
    <section className={styles.projectsContainer} id="projets">
      <h2 className={styles.sectionTitle}>Mes Projets</h2>
      
      {/* * Le "Pourquoi" de .gridContainer :
       * C'est la grille qui va contenir nos cartes.
      */}
      <div className={styles.gridContainer}>
        
        {/* * Le "Pourquoi" de projectData.map() :
         * On boucle sur nos données. Pour chaque 'project', 
         * on crée une 'ProjectCard' et on lui passe les
         * 'props' (title, description, tech).
        */}
        {projectData.map((project) => (
          <ProjectCard 
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}

      </div>
    </section>
  );
}