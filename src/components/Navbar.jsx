// src/components/Navbar.jsx

import styles from './Navbar.module.css'; // On importe notre style

export default function MyNavbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.brand}>
        Alexandru Rak
      </a>
      <ul className={styles.links}>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}