// src/components/ExperienceCard.jsx
import React from 'react';
import styles from './ExperienceCard.module.css';

export default function ExperienceCard({ role, company, date, description, tasks }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.role}>{role}</h3>
          <div className={styles.company}>{company}</div>
        </div>
        <div className={styles.dateBadge}>{date}</div>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <ul className={styles.taskList}>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}