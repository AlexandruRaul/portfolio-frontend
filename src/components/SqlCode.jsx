// src/components/SqlCode.jsx
import React from 'react';

export default function SqlCode() {
  return (
    // Conteneur style "Éditeur de code"
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#1E1E1E', // Fond sombre VS Code
      color: '#D4D4D4', // Texte gris clair
      fontFamily: 'Consolas, Monaco, "Courier New", monospace',
      fontSize: '12px',
      padding: '20px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Petite barre de titre style Mac/Fenêtre */}
      <div style={{
        position: 'absolute',
        top: '0', left: '0', right: '0',
        height: '24px',
        backgroundColor: '#252526',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px'
      }}>
        {/* Les 3 petits points */}
        <div style={{width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56', marginRight: '6px'}}></div>
        <div style={{width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E', marginRight: '6px'}}></div>
        <div style={{width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F'}}></div>
        <span style={{marginLeft: '10px', color: '#aaa', fontSize: '10px'}}>analyse_stocks.sql</span>
      </div>

      {/* Le Code SQL (avec un padding pour ne pas toucher la barre de titre) */}
      <div style={{ marginTop: '15px', lineHeight: '1.5' }}>
        
        {/* Commentaires */}
        <span style={{ color: '#6A9955' }}>-- Analyse des stocks critiques</span><br/>
        
        <span style={{ color: '#569CD6', fontWeight: 'bold' }}>SELECT</span><br/>
        &nbsp;&nbsp;p.nom_produit,<br/>
        &nbsp;&nbsp;<span style={{ color: '#DCDCAA' }}>SUM</span>(v.quantite) <span style={{ color: '#569CD6' }}>AS</span> total_ventes,<br/>
        &nbsp;&nbsp;s.stock_actuel<br/>
        
        <span style={{ color: '#569CD6', fontWeight: 'bold' }}>FROM</span> produits p<br/>
        
        {/* Jointures */}
        <span style={{ color: '#C586C0' }}>JOIN</span> ventes v <span style={{ color: '#569CD6' }}>ON</span> p.id = v.produit_id<br/>
        <span style={{ color: '#C586C0' }}>JOIN</span> stocks s <span style={{ color: '#569CD6' }}>ON</span> p.id = s.produit_id<br/>
        
        <span style={{ color: '#569CD6', fontWeight: 'bold' }}>GROUP BY</span> p.nom_produit<br/>
        
        {/* Condition logique */}
        <span style={{ color: '#569CD6', fontWeight: 'bold' }}>HAVING</span> s.stock_actuel &lt; <span style={{ color: '#B5CEA8' }}>10</span><br/>
        
        <span style={{ color: '#569CD6', fontWeight: 'bold' }}>ORDER BY</span> total_ventes <span style={{ color: '#569CD6' }}>DESC</span>;
      </div>
    </div>
  );
}