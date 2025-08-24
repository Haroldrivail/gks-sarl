import { useState, useEffect } from 'react';

const usePreloadResources = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simuler un chargement progressif
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);

    // Nettoyer l'interval si le composant est démonté
    return () => clearInterval(interval);
  }, []);

  return { progress, isComplete };
};

export default usePreloadResources;
