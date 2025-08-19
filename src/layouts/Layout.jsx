import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import ThemeSelector from '../components/ThemeSelector';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
      
      {/* Sélecteur de thème fixe en bas à droite */}
      <div className="fixed bottom-20 right-6 z-40 hidden lg:block">
        <ThemeSelector showLabel={false} position="bottom-left" />
      </div>
    </div>
  );
}