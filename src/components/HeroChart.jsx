// src/components/HeroChart.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  BarChart, Bar, LineChart, Line, 
  XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Legend 
} from 'recharts';
import styles from './HeroChart.module.css';

export default function HeroChart() {
  const [chartType, setChartType] = useState('bar');

  // Données pour le Bar Chart
  const [clickData, setClickData] = useState([
    { name: 'Projets', clicks: 0, color: '#0A4ABF' }, // Bleu
    { name: 'Contact', clicks: 0, color: '#00833D' }, // Vert
    { name: 'Autre', clicks: 0, color: '#ADB5BD' },   // Gris
  ]);

  // Données pour le Line Chart
  const [timeData, setTimeData] = useState([{ time: '0s', Projets: 0, Contact: 0, Autre: 0 }]);
  
  const countsRef = useRef({ Projets: 0, Contact: 0, Autre: 0 });
  const secondsRef = useRef(0);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target;
      
      const link = target.closest('a');
      const href = link ? link.getAttribute('href') : null;

      const insideProjects = target.closest('#projets');
      const insideContact = target.closest('#contact');

      // On ignore le switch du graphique
      if (target.closest(`.${styles.switchButton}`)) return;

      let category = 'Autre';

      if (href === '#projets' || insideProjects) {
        category = 'Projets';
      } else if (href === '#contact' || insideContact) {
        category = 'Contact';
      }

      countsRef.current[category] += 1;

      setClickData(prevData => {
        const newData = prevData.map(item => ({ ...item }));
        if (category === 'Projets') newData[0].clicks += 1;
        else if (category === 'Contact') newData[1].clicks += 1;
        else newData[2].clicks += 1;
        return newData;
      });
    };

    const timeoutId = setTimeout(() => {
      window.addEventListener('click', handleGlobalClick);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      secondsRef.current += 1;
      const snapshot = {
        time: `${secondsRef.current}s`,
        Projets: countsRef.current.Projets,
        Contact: countsRef.current.Contact,
        Autre: countsRef.current.Autre,
      };
      setTimeData(prev => {
        const newData = [...prev, snapshot];
        return newData.slice(-20); 
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const totalClicks = clickData.reduce((acc, item) => acc + item.clicks, 0);

  return (
    <div className={styles.wrapper}>
        <div className={styles.chartCard}>
            
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <div className={styles.liveDot}></div>
                    <div className={styles.title}>Session Tracker</div>
                </div>
                
                <button 
                    className={styles.switchButton}
                    onClick={() => setChartType(prev => prev === 'bar' ? 'line' : 'bar')}
                    title="Changer de vue"
                >
                    {chartType === 'bar' ? 'Voir Temps' : 'Voir Cat.'}
                </button>
            </div>

            <div className={styles.chartContainer}>
                <ResponsiveContainer width="100%" height="100%">
                    {chartType === 'bar' ? (
                        <BarChart data={clickData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                            <XAxis dataKey="name" tick={{fontSize: 11, fill: '#666'}} axisLine={false} tickLine={false} />
                            <YAxis tick={{fontSize: 11, fill: '#666'}} axisLine={false} tickLine={false} allowDecimals={false} />
                            <Tooltip cursor={{fill: '#F8F9FA'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="clicks" radius={[4, 4, 0, 0]} animationDuration={500}>
                                {clickData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    ) : (
                        <LineChart data={timeData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                            <XAxis dataKey="time" tick={{fontSize: 10, fill: '#666'}} axisLine={false} tickLine={false} interval={4} />
                            <YAxis tick={{fontSize: 11, fill: '#666'}} axisLine={false} tickLine={false} allowDecimals={false} />
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{fontSize: '10px'}}/>
                            <Line type="monotone" dataKey="Projets" stroke="#0A4ABF" strokeWidth={2} dot={false} isAnimationActive={false} />
                            <Line type="monotone" dataKey="Contact" stroke="#00833D" strokeWidth={2} dot={false} isAnimationActive={false} />
                            <Line type="monotone" dataKey="Autre" stroke="#ADB5BD" strokeWidth={2} dot={false} isAnimationActive={false} />
                        </LineChart>
                    )}
                </ResponsiveContainer>
            </div>

            <div className={styles.footer}>
                <div className={styles.totalBadge}>Total Clics: {totalClicks}</div>
                <p className={styles.hint}>
                    {chartType === 'bar' ? "Répartition actuelle." : "Historique par action."}
                </p>
            </div>

        </div>
    </div>
  );
}