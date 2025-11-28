// src/components/Contact.jsx
import styles from './Contact.module.css';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Envoi en cours...');
    // Utilisation de la variable d'environnement pour l'URL de l'API
    const apiUrl = import.meta.env.VITE_API_URL + '/contact';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message envoyé avec succès !');
        setFormData({ nom: '', email: '', message: '' });
      } else {
        setStatusMessage("Erreur : L'email ou un champ est invalide.");
      }
    } catch (error) {
      setStatusMessage('Erreur de connexion au serveur.');
      console.error('Erreur de fetch:', error);
    }
  };

  return (
    // AJOUT DE L'ID ICI : id="contact"
    <section className={styles.contactContainer} id="contact">
      <h2 className={styles.title}>Contactez-moi</h2>
      <p className={styles.subtitle}>
        Je suis ouvert aux opportunités. N'hésitez pas à me laisser un message.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nom" className={styles.label}>Nom</label>
          <input type="text" id="nom" name="nom" className={styles.input} required value={formData.nom} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input} required value={formData.email} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" name="message" rows="5" className={styles.textarea} required value={formData.message} onChange={handleChange} />
        </div>
        {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
        <button type="submit" className={styles.submitButton}>Envoyer le message</button>
      </form>
    </section>
  );
}