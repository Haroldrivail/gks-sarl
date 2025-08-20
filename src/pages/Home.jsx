import { useState } from 'react';
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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useState(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
