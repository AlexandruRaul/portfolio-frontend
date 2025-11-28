// src/components/Projects.jsx

import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import RevealOnScroll from './RevealOnScroll'; // Assurez-vous d'importer le wrapper

// Vos composants visuels
import QualityChart from './QualityChart';
import SqlCode from './SqlCode';
import ArchitectureDiagram from './ArchitectureDiagram';

const projectData = [
  {
    title: "Système d'Analyse Qualité",
    DynamicComponent: QualityChart, 
    description: "Mise en place d'un système de collecte de données (tests, tickets) et suivi de KPIs qualité via des dashboards dynamiques.",
    tech: ["Python", "SQL", "Recharts", "Data Viz"]
  },
  {
    title: "Refonte ERP (Développement)",
    DynamicComponent: SqlCode, 
    description: "Développement et refonte d'un ERP personnalisé en PHP. Optimisation des requêtes SQL complexes pour la gestion des stocks.",
    tech: ["PHP", "SQL", "Javascript", "Architecture"]
  },
  {
    title: "Portfolio Full Stack (Ce site !)",
    DynamicComponent: ArchitectureDiagram, 
    description: "Architecture moderne découplée : Front-End React hébergé sur Vercel communiquant avec une API Python (FastAPI) sur Render.",
    tech: ["React", "FastAPI", "Vercel / Render", "CI/CD"]
  }
];

export default function Projects() {
  return (
    <section className={styles.projectsContainer} id="projets">
      <h2 className={styles.sectionTitle}>Mes Projets</h2>
      
      <div className={styles.gridContainer}>
        
        {/* CORRECTION ICI : on ajoute 'index' dans les parenthèses */}
        {projectData.map((project, index) => (
          <RevealOnScroll key={project.title} delay={index * 200}>
            <ProjectCard 
              title={project.title}
              imageUrl={project.imageUrl}
              DynamicComponent={project.DynamicComponent}
              description={project.description}
              tech={project.tech}
            />
          </RevealOnScroll>
        ))}

      </div>
    </section>
  );
}