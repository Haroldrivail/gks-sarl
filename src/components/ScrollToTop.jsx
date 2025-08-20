import { useScrollToTop } from '../hooks/useScrollToTop';

export default function ScrollToTop() {
  // Utilise le hook personnalisé avec un scroll smooth et un délai
  // Le délai permet au contenu de charger avant le scroll
  useScrollToTop(true, 50); // 50ms de délai optimisé

  return null;
}
