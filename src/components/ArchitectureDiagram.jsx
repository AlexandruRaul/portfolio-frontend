// src/components/ArchitectureDiagram.jsx
import React from 'react';

export default function ArchitectureDiagram() {
  return (
    // 1. LE CONTENEUR PRINCIPAL (Gère le fond et prend toute la place)
    <div style={styles.container}>
      
      {/* Animation CSS */}
      <style>
        {`
          @keyframes flow {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          .flow-dot {
            animation: flow 2s infinite linear;
          }
        `}
      </style>

      {/* 2. LE WRAPPER DU DIAGRAMME (C'est lui qu'on zoome arrière) */}
      <div style={styles.diagramWrapper}>

          {/* --- BLOC 1 : FRONTEND --- */}
          <div style={styles.card}>
            <div style={styles.iconCircle}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0A4ABF" strokeWidth="2">
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"></ellipse>
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"></ellipse>
                <circle cx="12" cy="12" r="2" fill="#0A4ABF"></circle>
              </svg>
            </div>
            <div style={styles.title}>Client</div>
            <div style={styles.tech}>React + Vite</div>
            <div style={styles.sub}>Vercel</div>
          </div>

          {/* --- CONNECTEUR 1 --- */}
          <div style={styles.connector}>
            <div style={styles.line}></div>
            <div className="flow-dot" style={styles.dot}></div>
          </div>

          {/* --- BLOC 2 : BACKEND --- */}
          <div style={styles.card}>
            <div style={styles.iconCircle}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#0A4ABF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div style={styles.title}>API</div>
            <div style={styles.tech}>FastAPI</div>
            <div style={styles.sub}>Render</div>
          </div>

          {/* --- CONNECTEUR 2 --- */}
          <div style={styles.connector}>
            <div style={styles.line}></div>
            <div className="flow-dot" style={{...styles.dot, animationDelay: '1s'}}></div>
          </div>

          {/* --- BLOC 3 : EMAIL --- */}
          <div style={styles.card}>
            <div style={{...styles.iconCircle, borderColor: '#28a745'}}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div style={styles.title}>Service</div>
            <div style={styles.tech}>Email</div>
            <div style={styles.sub}>SendGrid</div>
          </div>

      </div> {/* Fin du diagramWrapper */}

    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    minHeight: '200px',
    backgroundColor: '#F8F9FA',
    // Le conteneur parent ne zoome PAS, il centre juste le contenu
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0', 
    boxSizing: 'border-box',
    overflow: 'hidden', 
  },
  diagramWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // C'est ICI qu'on applique le zoom out
    transform: 'scale(0.85)',
    transformOrigin: 'center',
    width: '100%', 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '15px',
    minWidth: '90px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
    border: '1px solid #fff',
    zIndex: 2,
    position: 'relative',
  },
  iconCircle: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#F0F4FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
    border: '1px solid #E0E7FF',
  },
  title: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '2px',
  },
  tech: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#1F2937',
  },
  sub: {
    fontSize: '11px',
    color: '#6B7280',
    marginTop: '2px',
  },
  connector: {
    flex: 1,
    height: '2px',
    backgroundColor: '#E5E7EB',
    position: 'relative',
    margin: '0 10px',
    maxWidth: '60px',
    display: 'flex',
    alignItems: 'center',
  },
  line: {
    width: '100%',
    height: '100%',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#0A4ABF',
    position: 'absolute',
    left: 0,
    top: '-2px',
  }
};