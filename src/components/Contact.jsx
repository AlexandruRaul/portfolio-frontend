// src/components/Contact.jsx

import styles from './Contact.module.css';
import { useState } from 'react'; // <-- NOUVEAU : On importe 'useState'

export default function Contact() {
  
  // <-- NOUVEAU : On crée notre "état" (state) pour mémoriser les données
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  // <-- NOUVEAU : Un état pour afficher un message de succès ou d'erreur
  const [statusMessage, setStatusMessage] = useState('');

  // <-- NOUVEAU : Cette fonction met à jour l'état quand on tape
  const handleChange = (e) => {
    // 'e.target' est l'input (nom, email, ou message)
    // On met à jour la bonne clé (nom, email, message)
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // <-- NOUVEAU : C'est la fonction qui envoie tout au backend
  const handleSubmit = async (e) => {
    // 1. Empêche le formulaire de rafraîchir la page
    e.preventDefault();
    setStatusMessage('Envoi en cours...'); // Feedback pour l'utilisateur

    try {
      // 2. On "fetch" (envoie) les données à notre API
      // Vite utilise 'import.meta.env.' pour accéder aux variables d'environnement
        const apiUrl = import.meta.env.VITE_API_URL + '/contact';

        const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // 3. On convertit notre objet JS en JSON (format de l'API)
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Le serveur a répondu "OK" (code 200)
        setStatusMessage('Message envoyé avec succès !');
        // On vide le formulaire
        setFormData({ nom: '', email: '', message: '' });
      } else {
        // Le serveur a renvoyé une erreur (ex: validation Pydantic)
        setStatusMessage("Erreur : L'email ou un champ est invalide.");
      }
    } catch (error) {
      // Erreur réseau (ex: le serveur backend n'est pas lancé)
      setStatusMessage('Erreur de connexion au serveur.');
      console.error('Erreur de fetch:', error);
    }
  };

  return (
    <section className={styles.contactContainer} id="contact">
      
      <h2 className={styles.title}>Contactez-moi</h2>
      <p className={styles.subtitle}>
        Je suis ouvert aux opportunités. N'hésitez pas à me laisser un message.
      </p>

      {/* On connecte notre fonction 'handleSubmit' au formulaire */}
      <form className={styles.form} onSubmit={handleSubmit}> {/* <-- MODIFIÉ */}
        
        <div className={styles.formGroup}>
          <label htmlFor="nom" className={styles.label}>Nom</label>
          <input 
            type="text" 
            id="nom" 
            name="nom" 
            className={styles.input} 
            required 
            value={formData.nom}       // <-- MODIFIÉ
            onChange={handleChange}    // <-- MODIFIÉ
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className={styles.input} 
            required 
            value={formData.email}     // <-- MODIFIÉ
            onChange={handleChange}    // <-- MODIFIÉ
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            className={styles.textarea} 
            required 
            value={formData.message}   // <-- MODIFIÉ
            onChange={handleChange}    // <-- MODIFIÉ
          />
        </div>

        {/* <-- NOUVEAU : On affiche le message de statut */}
        {statusMessage && (
          <p className={styles.statusMessage}>{statusMessage}</p>
        )}

        <button type="submit" className={styles.submitButton}>
          Envoyer le message
        </button>

      </form>

    </section>
  );
}