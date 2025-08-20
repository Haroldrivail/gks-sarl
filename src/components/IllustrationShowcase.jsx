import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import ServiceIllustration from './ServiceIllustration';

// Import des images du dossier assets
import techImg from '../assets/images/hero-tech-img.jpg';
import businessImg from '../assets/images/business-growth.jpg';
import solarImg from '../assets/images/solar-image.jpg';
import digitalImg from '../assets/images/digital-image.jpg';
import automationImg from '../assets/images/automation-1.jpg';
import networkImg from '../assets/images/networking-image.jpg';
import teamImg from '../assets/images/team-collaboration.jpg';
import datacenterImg from '../assets/images/data-center-team.jpg';

const IllustrationShowcase = () => {
  const [currentIllustration, setCurrentIllustration] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const showcaseItems = [
    {
      type: "tech",
      title: "Solutions Technologiques",
      description: "Innovation et expertise technique",
      image: techImg,
      fallbackImage: automationImg,
      stats: "50+ projets tech",
      highlight: "Infrastructure moderne"
    },
    {
      type: "business", 
      title: "Stratégies Business",
      description: "Accompagnement personnalisé",
      image: businessImg,
      fallbackImage: teamImg,
      stats: "100% satisfaction",
      highlight: "Croissance assurée"
    },
    {
      type: "solar",
      title: "Énergie Renouvelable", 
      description: "Solutions durables et écologiques",
      image: solarImg,
      fallbackImage: networkImg,
      stats: "25 ans garantie",
      highlight: "Énergie propre"
    },
    {
      type: "digital",
      title: "Transformation Digitale",
      description: "Modernisation et performance",
      image: digitalImg,
      fallbackImage: datacenterImg,
      stats: "24/7 support",
      highlight: "Performance optimale"
    }
  ];

  useEffect(() => {
    // Fonction pour changer d'illustration avec confettis
    const changeIllustration = (index) => {
      setCurrentIllustration(index);
      setShowConfetti(true);
      // Arrêter les confettis après 2 secondes
      setTimeout(() => setShowConfetti(false), 2000);
    };

    const interval = setInterval(() => {
      changeIllustration((currentIllustration + 1) % showcaseItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIllustration, showcaseItems.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
      {/* Confettis */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={100}
          gravity={0.1}
          colors={['#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6']}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Notre Vision en Images
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos domaines d'expertise à travers des illustrations modernes
            qui reflètent notre approche innovante et créative.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Illustration principale */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
              <div className="w-full h-96 rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src={showcaseItems[currentIllustration].image}
                  alt={showcaseItems[currentIllustration].title}
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out hover:scale-105"
                  onError={(e) => {
                    // Fallback en cas d'erreur de chargement
                    e.target.src = showcaseItems[currentIllustration].fallbackImage;
                  }}
                />
                {/* Overlay avec ServiceIllustration en fallback décoratif */}
                <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300">
                  <ServiceIllustration 
                    type={showcaseItems[currentIllustration].type}
                    className="w-full h-full object-cover"
                    fallbackIcon={
                      <div className="w-full h-full bg-gradient-to-br from-primary-100 to-green-100 flex items-center justify-center">
                        <span className="text-6xl text-gray-400">🎨</span>
                      </div>
                    }
                  />
                </div>
              </div>
              
              {/* Overlay avec info enrichie */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {showcaseItems[currentIllustration].title}
                      </h3>
                      <span className="text-2xl">
                        {currentIllustration === 0 && '💻'}
                        {currentIllustration === 1 && '📈'}
                        {currentIllustration === 2 && '☀️'}
                        {currentIllustration === 3 && '🚀'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      {showcaseItems[currentIllustration].description}
                    </p>
                    <div className="flex gap-4">
                      <div className="px-3 py-1 bg-primary/10 rounded-full">
                        <span className="text-sm font-medium text-primary">
                          {showcaseItems[currentIllustration].stats}
                        </span>
                      </div>
                      <div className="px-3 py-1 bg-green-500/10 rounded-full">
                        <span className="text-sm font-medium text-green-600">
                          {showcaseItems[currentIllustration].highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Navigation et thumbnails */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {showcaseItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIllustration(index);
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 2000);
                  }}
                  className={`relative group p-4 rounded-2xl border-2 transition-all duration-300 ${
                    index === currentIllustration
                      ? 'border-primary bg-primary-50'
                      : 'border-gray-200 bg-white hover:border-primary-300'
                  }`}
                >
                  <div className="w-full h-24 rounded-xl overflow-hidden mb-3 bg-gray-100">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <div style={{ display: 'none' }} className="w-full h-full">
                      <ServiceIllustration 
                        type={item.type}
                        className="w-full h-full object-cover"
                        fallbackIcon={
                          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                            <span className="text-2xl text-gray-400">📷</span>
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Indicateurs de progression */}
            <div className="flex justify-center space-x-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIllustration(index);
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 2000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIllustration
                      ? 'bg-primary scale-125'
                      : 'bg-gray-300 hover:bg-primary-300'
                  }`}
                />
              ))}
            </div>

            {/* Texte descriptif */}
            <div className="text-center">
              <p className="text-gray-600 leading-relaxed">
                Nos illustrations sont soigneusement sélectionnées pour représenter
                fidèlement notre expertise et notre approche professionnelle dans
                chaque domaine d'activité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IllustrationShowcase;
