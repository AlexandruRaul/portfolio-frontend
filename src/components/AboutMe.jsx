// src/components/AboutMe.jsx
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    // AJOUT DE L'ID ICI : id="about"
    <section className={styles.aboutContainer} id="about">
      
      <div className={styles.textColumn}>
        <h2>À Propos de Moi</h2>
        <p>
          Diplômé d'un MBA Expert Systèmes d'Information et d'un DUT Informatique, 
          je mets ma double compétence au service de la performance de l'entreprise.
        </p>
        <p>
          Ma passion pour le développement web (Full Stack et WebMaster) 
          me permet de comprendre comment les données sont générées. Mon expertise en 
          Data Analyse me permet de leur donner un sens.
        </p>
        <p>
          Je traduis les données brutes en insights actionnables pour piloter 
          l'amélioration continue et guider la prise de décision.
        </p>
      </div>

      <div className={styles.skillsColumn}>
        <h3>Compétences Techniques Clés</h3>
        <ul className={styles.skillsList}>
          <li><span>Back-End :</span> Python, Java, PHP, R</li>
          <li><span>Front-End :</span> CSS, Javascript, Angular</li>
          <li><span>Base de données :</span> SQL, PostgreSQL</li>
          <li><span>IA / Data :</span> TensorFlow, Scikit-learn</li>
          <li><span>Testing :</span> RobotFramework, Postman</li>
        </ul>
      </div>

    </section>
  );
}