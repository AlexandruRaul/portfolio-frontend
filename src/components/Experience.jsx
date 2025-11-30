// src/components/Experience.jsx
import React from 'react';
import styles from './Experience.module.css'; // On va créer ce petit fichier style après
import ExperienceCard from './ExperienceCard';
import RevealOnScroll from './RevealOnScroll';

const experiences = [
  {
    role: "Test Analyst",
    company: "CASDEN, Champs sur Marne",
    date: "Sept 2023 - Août 2025",
    description: "Alternance au sein d'une banque coopérative.",
    tasks: [
      "Mise en place d'un système de collecte de données via l'automatisation des tests et l'analyse des tickets.",
      "Définition et suivi de KPIs qualité (taux d'échec, temps de résolution) via le développement de tableaux de bord dynamiques.",
      "Développement de mots-clés en Python pour les librairies Robot Framework afin d'étendre la couverture de tests.",
      "Traduction des analyses en recommandations stratégiques pour prioriser les développements produit."
    ]
  },
  {
    role: "WebMaster",
    company: "AFFP, Créteil",
    date: "Avril 2023 - Juillet 2023",
    description: "Stage pour une association.",
    tasks: [
      "Refonte de l'architecture et du design du site web pour optimiser l'expérience utilisateur (UX).",
      "Mise en place d'une solution technique permettant aux équipes non-techniques d'assurer la maintenance en autonomie."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Digi&iTech, Villetaneuse",
    date: "Juin 2022 - Août 2022",
    description: "Stage de développement web.",
    tasks: [
      "Développement et refonte d'un ERP personnalisé en PHP pour optimiser la performance.",
      "Mise en œuvre de nouvelles fonctionnalités pour améliorer les capacités du système."
    ]
  }
];

export default function Experience() {
  return (
    <section className={styles.experienceContainer} id="experience">
      <h2 className={styles.title}>Expérience Professionnelle</h2>
      
      <div className={styles.listContainer}>
        {experiences.map((exp, index) => (
          <RevealOnScroll key={index} delay={index * 200}>
            <ExperienceCard 
              role={exp.role}
              company={exp.company}
              date={exp.date}
              description={exp.description}
              tasks={exp.tasks}
            />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}