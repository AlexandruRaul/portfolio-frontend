// src/components/QualityChart.jsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 1. Les Données
const data = [
  { name: 'Réussi', value: 850 },
  { name: 'Bloqué', value: 45 },
  { name: 'Échoué', value: 85 },
];

// 2. Les Couleurs
const COLORS = [
  '#00833D', // Vert
  '#FF9800', // Orange
  '#D32F2F', // Rouge
];

export default function QualityChart() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '200px', backgroundColor: '#fff' }}>
      
      <ResponsiveContainer width="100%" height="100%" debounce={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
            isAnimationActive={false}
            // AJOUT ICI : On active les étiquettes (labels)
            // Cette fonction retourne simplement la valeur (ex: 850)
            label={({ value }) => `${value}`} 
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
          <Tooltip 
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}
            itemStyle={{ color: '#333' }}
            cursor={false}
          />
          
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}