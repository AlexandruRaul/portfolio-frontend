// src/components/SqlTerminal.jsx
import React, { useState, useRef, useEffect } from 'react';
import styles from './SqlTerminal.module.css';

// Nos "Tables" de données (Base de données virtuelle)
const DATABASE = {
  competences: [
    { id: 1, domaine: 'Data Science', outil: 'Python/Pandas', niveau: 'Avancé' },
    { id: 2, domaine: 'Data Science', outil: 'Scikit-Learn', niveau: 'Intermédiaire' },
    { id: 3, domaine: 'Backend', outil: 'FastAPI', niveau: 'Avancé' },
    { id: 4, domaine: 'Database', outil: 'SQL / PostgreSQL', niveau: 'Expert' },
    { id: 5, domaine: 'Frontend', outil: 'React', niveau: 'Intermédiaire' },
  ],
  experiences: [
    { id: 1, role: 'Test Analyst', entreprise: 'CASDEN', annee: '2023-2025' },
    { id: 2, role: 'WebMaster', entreprise: 'AFFP', annee: '2023' },
    { id: 3, role: 'Full Stack Dev', entreprise: 'Digi&iTech', annee: '2022' },
  ],
  contact: [
    { email: 'alexandrurak74@gmail.com', linkedin: '/in/alexandru-rak', github: 'github.com/alexandru' }
  ]
};

export default function SqlTerminal() {
  const [history, setHistory] = useState([
    { type: 'info', content: 'Bienvenue dans le Terminal Data v1.0.0' },
    { type: 'info', content: 'Tapez "HELP" pour voir les commandes disponibles.' },
    { type: 'info', content: 'Les tables disponibles sont : competences, experiences, contact' },
    { type: 'info', content: 'Essayez: SELECT * FROM competences WHERE python' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Auto-scroll vers le bas à chaque nouveau message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus automatique sur l'input quand on clique n'importe où sur le terminal
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

 const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    
    // 1. Commande HELP
    if (cleanCmd === 'help') {
      return { 
        type: 'success', 
        content: `Commandes disponibles :
- SELECT * FROM competences
- SELECT * FROM experiences
- SELECT * FROM contact
- Filtrage standard : ... WHERE colonne = 'valeur'
- Recherche rapide : ... WHERE valeur
- CLEAR (pour effacer l'écran)` 
      };
    }

    // 2. Commande CLEAR
    if (cleanCmd === 'clear') {
      setHistory([]);
      return null;
    }

    // 3. Commandes SQL simulées
    if (cleanCmd.startsWith('select')) {
      let targetData = null;
      let tableName = '';

      // A. Identifier la table
      if (cleanCmd.includes('competences')) {
        targetData = [...DATABASE.competences];
        tableName = 'competences';
      } else if (cleanCmd.includes('experiences')) {
        targetData = [...DATABASE.experiences];
        tableName = 'experiences';
      } else if (cleanCmd.includes('contact')) {
        targetData = [...DATABASE.contact];
        tableName = 'contact';
      } else {
        return { type: 'error', content: 'Erreur : Table introuvable. Tables disponibles: competences, experiences, contact' };
      }

      // B. Gestion du WHERE (CORRIGÉE)
      if (cleanCmd.includes('where')) {
        const parts = cleanCmd.split('where');
        let conditionPart = parts[1].trim(); // ex: "entreprise = 'casden'"
        let searchTerm = '';

        // Si l'utilisateur utilise "=" (syntaxe SQL standard)
        if (conditionPart.includes('=')) {
           const splitByEquals = conditionPart.split('=');
           // On prend la partie droite (la valeur) et on nettoie les guillemets
           searchTerm = splitByEquals[1].trim().replace(/['"]/g, '');
        } else {
           // Si l'utilisateur tape juste "WHERE casden" (syntaxe raccourcie)
           searchTerm = conditionPart.replace(/['"]/g, '');
        }

        // Filtrage effectif
        if (searchTerm) {
          targetData = targetData.filter(row => {
            return Object.values(row).some(val => 
              String(val).toLowerCase().includes(searchTerm)
            );
          });
        }
      }

      // C. Résultat
      if (targetData.length === 0) {
        return { type: 'info', content: `0 résultat trouvé dans '${tableName}'.` };
      }

      return { type: 'table', data: targetData };
    }

    // 4. Commande Inconnue
    if (cleanCmd !== '') {
        return { type: 'error', content: `Erreur de syntaxe : Commande '${cmd}' non reconnue. Tapez HELP.` };
    }
    
    return null;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const newEntry = { type: 'command', content: inputValue };
      const result = executeCommand(inputValue);
      
      let newHistory = [...history, newEntry];
      if (result) {
        newHistory.push(result);
      }
      
      // Si c'était un 'clear', on vide l'historique visuel
      if (inputValue.trim().toLowerCase() === 'clear') {
          setHistory([]);
      } else {
          setHistory(newHistory);
      }
      
      setInputValue('');
    }
  };

  // Rendu d'une table SQL en HTML
  const renderTable = (data) => {
    if (!data || data.length === 0) return null;
    const headers = Object.keys(data[0]);
    
    return (
      <div className={styles.tableWrapper}>
        <table className={styles.sqlTable}>
          <thead>
            <tr>
              {headers.map(h => <th key={h}>{h.toUpperCase()}</th>)}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {headers.map(h => <td key={h}>{row[h]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.rowsCount}>({data.length} lignes affectées)</div>
      </div>
    );
  };

  return (
    <section className={styles.terminalSection} onClick={handleContainerClick}>
      <h2 className={styles.sectionTitle}>&lt; SQL Playground /&gt;</h2>
      <p className={styles.subtitle}>Interrogez mon profil directement en SQL.</p>
      
      <div className={styles.terminalWindow}>
        <div className={styles.terminalHeader}>
          <div className={styles.redDot}></div>
          <div className={styles.yellowDot}></div>
          <div className={styles.greenDot}></div>
          <span className={styles.terminalTitle}>bash -- alex@portfolio:~/data</span>
        </div>
        
        <div className={styles.terminalBody}>
          {history.map((line, index) => (
            <div key={index} className={styles.line}>
              {line.type === 'command' && (
                <div className={styles.commandLine}>
                  <span className={styles.prompt}>➜  ~</span> 
                  <span className={styles.commandText}>{line.content}</span>
                </div>
              )}
              
              {line.type === 'info' && <div className={styles.infoText}>{line.content}</div>}
              
              {line.type === 'success' && <div className={styles.successText} style={{whiteSpace: 'pre-wrap'}}>{line.content}</div>}
              
              {line.type === 'error' && <div className={styles.errorText}>{line.content}</div>}
              
              {line.type === 'table' && renderTable(line.data)}
            </div>
          ))}
          
          {/* Ligne de saisie actuelle */}
          <div className={styles.inputLine}>
            <span className={styles.prompt}>➜  ~</span>
            <input
              ref={inputRef}
              type="text"
              className={styles.input}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
            {/* Curseur clignotant artificiel */}
            <span className={styles.cursor}>█</span>
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </section>
  );
}