import styles from './Navbar.module.css';

export default function MyNavbar() {
  return (
    <nav className={styles.navbar}>
      {/* Le lien vers le haut de page */}
      <a href="#" className={styles.brand}>
        Alexandru Rak
      </a>
      
      <ul className={styles.links}>
        <li><a href="#about">À Propos</a></li>
        <li><a href="#experience">Expérience</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}