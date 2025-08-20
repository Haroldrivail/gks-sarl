import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Hook personnalisé pour gérer le scroll to top
 * @param {boolean} smooth - Si true, utilise un scroll smooth (défaut: true)
 * @param {number} delay - Délai en ms avant le scroll (défaut: 0)
 * @param {number} offset - Offset en pixels pour compenser le header fixe (défaut: 0)
 */
export const useScrollToTop = (smooth = true, delay = 0, offset = 0) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: offset,
        left: 0,
        behavior: smooth ? 'smooth' : 'instant'
      });
    };

    if (delay > 0) {
      const timer = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timer);
    } else {
      scrollToTop();
    }
  }, [pathname, smooth, delay, offset]);
};

/**
 * Fonction utilitaire pour scroll to top manuel
 * @param {boolean} smooth - Si true, utilise un scroll smooth
 * @param {number} offset - Offset en pixels (défaut: 0)
 */
export const scrollToTop = (smooth = true, offset = 0) => {
  window.scrollTo({
    top: offset,
    left: 0,
    behavior: smooth ? 'smooth' : 'instant'
  });
};

/**
 * Fonction utilitaire pour scroll vers un élément
 * @param {string} elementId - ID de l'élément cible
 * @param {number} offset - Offset en pixels (défaut: 120 pour compenser le header)
 * @param {boolean} smooth - Si true, utilise un scroll smooth
 */
export const scrollToElement = (elementId, offset = 120, smooth = true) => {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.offsetTop - offset;
    window.scrollTo({
      top: Math.max(0, top),
      left: 0,
      behavior: smooth ? 'smooth' : 'instant'
    });
  }
};
