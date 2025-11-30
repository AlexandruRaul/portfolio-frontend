// src/components/Projects.jsx
import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';
import RevealOnScroll from './RevealOnScroll';

// --- IMPORT DES COMPOSANTS VISUELS DYNAMIQUES ---
// Assure-toi que ces fichiers existent bien dans ton dossier components/
import AiModelViz from './AiModelViz';           // Le simulateur IA
import QualityChart from './QualityChart';       // Le graphique Recharts
import SqlCode from './SqlCode';                 // Le snippet de code ou terminal
import ArchitectureDiagram from './ArchitectureDiagram'; // Le schéma d'architecture

const projectData = [
  {
    title: "Prédiction de Fidélité (ANN)",
    DynamicComponent: AiModelViz, 
    description: "Modèle de Réseau de Neurones (TensorFlow/Keras) entraîné sur un dataset Kaggle pour prédire la fidélité client selon la satisfaction (Food/Service) et le budget.",
    tech: ["Python", "TensorFlow", "Keras", "Pandas"]
  },
  {
    title: "Dashboard de Métriques QA", 
    DynamicComponent: QualityChart, 
    description: "Conception d'un outil de monitoring pour visualiser les résultats des tests automatisés Robot Framework. Transformation des logs bruts en KPIs décisionnels.",
    tech: ["Python", "Data Viz", "Robot Framework", "KPIs"] 
  },
  {
    title: "Refonte ERP & Optimisation SQL",
    DynamicComponent: SqlCode, 
    description: "Développement d'un ERP sur-mesure en PHP. Optimisation drastique des requêtes SQL pour la gestion de stocks volumineux.",
    tech: ["PHP", "SQL Avancé", "Optimisation", "Architecture"]
  },
  {
    title: "Portfolio Full Stack",
    DynamicComponent: ArchitectureDiagram, 
    description: "Architecture moderne découplée : Front-End React (Vite) hébergé sur Vercel communiquant avec une API Python (FastAPI) sur Render.",
    tech: ["React", "FastAPI", "Vercel / Render", "CI/CD"]
  }
];

export default function Projects() {
  return (
    <section className={styles.projectsContainer} id="projets">
      <h2 className={styles.sectionTitle}>Mes Projets</h2>
      
      <div className={styles.gridContainer}>
        {projectData.map((project, index) => (
          <RevealOnScroll key={project.title} delay={index * 200}>
            <ProjectCard 
              title={project.title}
              DynamicComponent={project.DynamicComponent}
              description={project.description}
              tech={project.tech}
              // Tu pourras ajouter 'repo' et 'link' ici plus tard si tu as des liens GitHub
            />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}