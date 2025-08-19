import React from 'react';
import Hero from '../components/Hero';
import ServicesShowcase from '../components/ServicesShowcase';
import StatsSection from '../components/StatsSection';
import ProjectGallery from '../components/ProjectGallery';
import SectorsShowcase from '../components/SectorsShowcase';
import ThemeDemo from '../components/ThemeDemo';
import PartnersSection from '../components/PartnersSection';
import NewsletterSection from '../components/NewsletterSection';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesShowcase />
      <StatsSection />
      <ProjectGallery />
      <SectorsShowcase />
      <ThemeDemo />
      <PartnersSection />
      <NewsletterSection />
      <CTASection />
    </div>
  );
}
