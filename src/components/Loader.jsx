import React, { useCallback, useState, useEffect } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FaCog, FaSolarPanel, FaWifi, FaRocket } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { useSpring, animated } from '@react-spring/web';

// Constantes en dehors du composant pour éviter les re-renders
const LOADING_ICONS = [
  { Icon: FaCog, color: 'text-primary', label: 'Configuration...' },
  { Icon: FaSolarPanel, color: 'text-yellow-500', label: 'Énergie solaire...' },
  { Icon: FaWifi, color: 'text-blue-500', label: 'Connectivité...' },
  { Icon: FaRocket, color: 'text-green-500', label: 'Lancement...' }
];

export default function Loader({ progress = 0 }) {
  const [currentIcon, setCurrentIcon] = useState(0);
  const [loadingText, setLoadingText] = useState('Chargement...');

  // Animation pour l'icône active
  const iconAnimation = useSpring({
    transform: `scale(${currentIcon >= 0 ? 1.1 : 1}) rotate(${currentIcon * 90}deg)`,
    opacity: 1,
    config: { tension: 300, friction: 20 }
  });

  // Animation pour le container principal
  const containerAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 200, friction: 25 }
  });

  // Animation pour la barre de progression basée sur la valeur réelle
  const progressAnimation = useSpring({
    width: `${progress}%`,
    config: { tension: 170, friction: 26 }
  });

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // Particles loaded callback
  }, []);

  // Cycle des icônes et textes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => {
        const nextIndex = (prev + 1) % LOADING_ICONS.length;
        setLoadingText(LOADING_ICONS[nextIndex].label);
        return nextIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="loader-particles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#f59e0b", "#10b981", "#3b82f6", "#ef4444"],
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 30,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <animated.div style={containerAnimation} className="relative z-10 text-center">
        {/* Logo GKS */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="text-primary">GKS</span> SARL
          </h1>
          <p className="text-gray-300 text-sm">Gamma Kappa Solutions</p>
        </div>

        {/* Loader principal avec icônes rotatives */}
        <div className="relative mb-8">
          {/* Cercle externe rotatif */}
          <div className="w-24 h-24 mx-auto relative">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
            
            {/* Icône centrale animée */}
            <animated.div 
              style={iconAnimation}
              className="absolute inset-0 flex items-center justify-center"
            >
              {React.createElement(LOADING_ICONS[currentIcon].Icon, {
                className: `text-2xl ${LOADING_ICONS[currentIcon].color}`,
              })}
            </animated.div>
          </div>

          {/* Cercles décoratifs */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </div>

        {/* Texte de chargement animé */}
        <div className="mb-6">
          <animated.p className="text-white text-lg font-medium mb-2">
            {loadingText}
          </animated.p>
          <p className="text-gray-400 text-sm">
            Préparation de votre expérience...
          </p>
        </div>

        {/* Barre de progression moderne */}
        <div className="w-64 mx-auto mb-8">
          <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
            <animated.div
              style={progressAnimation}
              className="h-full bg-gradient-to-r from-primary via-yellow-500 to-green-500 rounded-full"
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>{Math.min(99, Math.floor(progress))}%</span>
            <span>{progress >= 100 ? '100%' : '...'}</span>
          </div>
        </div>

        {/* Points de chargement */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index <= currentIcon ? 'bg-primary' : 'bg-gray-600'
              } transition-colors duration-300`}
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: index <= currentIcon ? 'pulse 1s infinite' : 'none'
              }}
            ></div>
          ))}
        </div>

        {/* Messages de chargement additionnels */}
        <div className="mt-8 text-center">
          <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
            <span className="px-2 py-1 bg-gray-800 rounded-full">✓ Configuration système</span>
            <span className="px-2 py-1 bg-gray-800 rounded-full">✓ Chargement des ressources</span>
            <span className="px-2 py-1 bg-gray-800 rounded-full">⏳ Finalisation...</span>
          </div>
        </div>
      </animated.div>

      {/* Effets de brillance */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-30"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-bounce"></div>
    </div>
  );
}
