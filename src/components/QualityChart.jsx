import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Réussi', value: 850 },
  { name: 'Bloqué', value: 45 },
  { name: 'Échoué', value: 85 },
];

const COLORS = [
  '#10b981', // Vert moderne (Tailwind emerald-500)
  '#f59e0b', // Orange (amber-500)
  '#ef4444', // Rouge (red-500)
];

export default function QualityChart() {
  // Calcul dynamique du taux de succès pour le KPI central
  const stats = useMemo(() => {
    const total = data.reduce((acc, item) => acc + item.value, 0);
    const success = data.find(d => d.name === 'Réussi')?.value || 0;
    const percentage = Math.round((success / total) * 100);
    return { total, percentage };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', fontFamily: 'sans-serif' }}>
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60} // Créé l'effet "Donut" (trou au milieu)
            outerRadius={80}
            paddingAngle={5} // Espace blanc entre les sections
            dataKey="value"
            stroke="none" // Enlève les bordures blanches par défaut
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
          <Tooltip 
            formatter={(value) => [`${value} Tests`, 'Volume']}
            contentStyle={{ 
              borderRadius: '8px', 
              border: 'none', 
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              fontSize: '12px'
            }}
          />
          
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: '12px' }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* KPI CENTRAL : L'élément clé d'un dashboard */}
      <div style={{
        position: 'absolute',
        top: '45%', // Ajusté légèrement vers le haut pour laisser la place à la légende
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        pointerEvents: 'none' // Laisse passer la souris vers le graphique
      }}>
        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1e293b', lineHeight: 1 }}>
          {stats.percentage}%
        </div>
        <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', marginTop: '4px' }}>
          Qualité
        </div>
      </div>

    </div>
  );
}