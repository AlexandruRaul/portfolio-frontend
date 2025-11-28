// src/components/Navbar.jsx
import styles from './Navbar.module.css';

export default function MyNavbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.brand}>
        Alexandru Rak
      </a>
      <ul className={styles.links}>
        {/* Les liens pointent vers les ID des sections */}
        <li><a href="#about">À Propos</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}