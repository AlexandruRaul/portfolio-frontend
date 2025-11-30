import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import styles from './AiModelViz.module.css';

export default function AiModelViz() {
  const [foodRating, setFoodRating] = useState(3);
  const [serviceRating, setServiceRating] = useState(3);
  const [budget, setBudget] = useState(3);
  const [loyaltyProb, setLoyaltyProb] = useState(0);

  useEffect(() => {
    // Simulation ANN
    const weightedSum = (foodRating * 9) + (serviceRating * 7) + (budget * 4);
    let prob = Math.min(100, Math.max(0, weightedSum)); 
    setLoyaltyProb(Math.round(prob));
  }, [foodRating, serviceRating, budget]);

  const chartData = [
    { name: 'Food', value: foodRating, max: 5 },
    { name: 'Service', value: serviceRating, max: 5 },
    { name: 'Budget', value: budget, max: 5 },
  ];

  return (
    <div className={styles.container}>
      {/* Zone Gauche : Contrôles compacts */}
      <div className={styles.controls}>
        <h4 className={styles.title}>Modèle ANN</h4>
        <p className={styles.subtitle}>Simulateur de fidélité</p>
        
        <div className={styles.inputGroup}>
          <div className={styles.labelRow}>
            <label>Food</label><span>{foodRating}/5</span>
          </div>
          <input type="range" min="1" max="5" step="0.5" value={foodRating} onChange={(e) => setFoodRating(Number(e.target.value))} className={styles.slider} />
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.labelRow}>
            <label>Service</label><span>{serviceRating}/5</span>
          </div>
          <input type="range" min="1" max="5" step="0.5" value={serviceRating} onChange={(e) => setServiceRating(Number(e.target.value))} className={styles.slider} />
        </div>

        <div className={styles.inputGroup}>
          <div className={styles.labelRow}>
            <label>Budget</label><span>{budget}/5</span>
          </div>
          <input type="range" min="1" max="5" step="1" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className={styles.slider} />
        </div>
      </div>

      {/* Zone Droite : Focus sur le Graphique */}
      <div className={styles.visuals}>
        {/* En-tête : Score et Statut sur une seule ligne pour gagner de la place */}
        <div className={styles.predictionBox}>
          <div>
            <span className={styles.label}>Probabilité</span>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: loyaltyProb > 50 ? '#10b981' : '#64748b' }}>
              {loyaltyProb > 50 ? "CLIENT FIDÈLE" : "OCCASIONNEL"}
            </div>
          </div>
          <span className={styles.scoreLarge} style={{ color: loyaltyProb > 50 ? '#10b981' : '#fbbf24' }}>
            {loyaltyProb}%
          </span>
        </div>

        {/* Le graphique prend tout l'espace restant */}
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <XAxis type="number" domain={[0, 5]} hide />
              <YAxis dataKey="name" type="category" width={60} tick={{fontSize: 11, fontWeight: 500}} />
              <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{fontSize: '12px', borderRadius: '4px'}} />
              <Bar dataKey="value" barSize={15} radius={[0, 4, 4, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : index === 1 ? '#8b5cf6' : '#94a3b8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}