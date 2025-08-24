import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import ServicesShowcase from '../components/ServicesShowcase';
import IllustrationShowcase from '../components/IllustrationShowcase';
import StatsSection from '../components/StatsSection';
import ProjectGallery from '../components/ProjectGallery';
import SectorsShowcase from '../components/SectorsShowcase';
import PartnersSection from '../components/PartnersSection';
import CTASection from '../components/CTASection';
import NewsletterSection from '../components/NewsletterSection';
import usePreloadResources from '../hooks/usePreloadResources';

export default function Home() {
  const { progress, isComplete } = usePreloadResources();
  const [fadeOut, setFadeOut] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  // Gestion d'une transition fluide lorsqu'on atteint 100%
  useEffect(() => {
    if (isComplete || progress >= 100) {
      const t1 = setTimeout(() => setFadeOut(true), 250); // voit 100%
      const t2 = setTimeout(() => setHideLoader(true), 900); // après animation fade
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [isComplete, progress]);


  return (
    <>
      {!hideLoader && (
        <div className={(fadeOut ? 'opacity-0' : 'opacity-100') + ' transition-opacity duration-500'}>
          <Loader progress={progress} />
        </div>
      )}
      {hideLoader && (
        <>
          <Hero />
          <ServicesShowcase />
          <IllustrationShowcase />
          <StatsSection />
          <ProjectGallery />
          <SectorsShowcase />
          <PartnersSection />
          <NewsletterSection />
          <CTASection />
        </>
  )}
    </>
  );
}
