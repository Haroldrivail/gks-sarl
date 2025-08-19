import React, { useState, useEffect } from 'react';
import ServiceIllustration from './ServiceIllustration';

const IllustrationShowcase = () => {
  const [currentIllustration, setCurrentIllustration] = useState(0);

  const showcaseItems = [
    {
      type: "tech",
      title: "Solutions Technologiques",
      description: "Innovation et expertise technique"
    },
    {
      type: "business", 
      title: "Stratégies Business",
      description: "Accompagnement personnalisé"
    },
    {
      type: "solar",
      title: "Énergie Renouvelable", 
      description: "Solutions durables et écologiques"
    },
    {
      type: "digital",
      title: "Transformation Digitale",
      description: "Modernisation et performance"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIllustration((prev) => (prev + 1) % showcaseItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [showcaseItems.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
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
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <ServiceIllustration 
                  type={showcaseItems[currentIllustration].type}
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                  fallbackIcon={
                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-green-100 flex items-center justify-center">
                      <span className="text-6xl text-gray-400">🎨</span>
                    </div>
                  }
                />
              </div>
              
              {/* Overlay avec info */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {showcaseItems[currentIllustration].title}
                </h3>
                <p className="text-gray-600">
                  {showcaseItems[currentIllustration].description}
                </p>
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Navigation et thumbnails */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {showcaseItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIllustration(index)}
                  className={`relative group p-4 rounded-2xl border-2 transition-all duration-300 ${
                    index === currentIllustration
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 bg-white hover:border-amber-300'
                  }`}
                >
                  <div className="w-full h-24 rounded-xl overflow-hidden mb-3">
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
                  onClick={() => setCurrentIllustration(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIllustration
                      ? 'bg-amber-500 scale-125'
                      : 'bg-gray-300 hover:bg-amber-300'
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
