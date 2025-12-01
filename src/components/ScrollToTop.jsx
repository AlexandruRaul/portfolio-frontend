import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // 1. Empêche le navigateur de restaurer l'ancienne position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 2. Force le scroll en haut (immédiat)
    window.scrollTo(0, 0);

    // 3. Force le scroll une 2ème fois après un court délai 
    // (Utile si des images chargent et décalent la page)
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return null;
}