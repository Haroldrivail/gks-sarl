import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaRocket } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button and calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed right-6 bottom-6 z-50 group">
          {/* Main button container */}

          {/* Secondary rocket button for fun */}
          <div
            className="mt-3 w-12 h-12 bg-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer group/rocket"
            onClick={() => {
              // Fast and optimized scroll to top
              const duration = 400; // 400ms pour un défilement rapide mais fluide
              const start = window.pageYOffset;
              const startTime = performance.now();

              const animateScroll = (currentTime) => {
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                
                // Ease out cubic pour un mouvement naturel
                const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                
                window.scrollTo(0, start * (1 - easeOutCubic));
                
                if (progress < 1) {
                  requestAnimationFrame(animateScroll);
                }
              };
              
              requestAnimationFrame(animateScroll);
            }}
            title="Fusée vers le haut !"
          >
            <FaRocket className="text-white text-sm group-hover/rocket:animate-bounce transition-all duration-300" />

            {/* Mini tooltip for rocket */}
            <div className="absolute right-full mr-2 transform opacity-0 group-hover/rocket:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-secondary text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                Back to Top! 🚀
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}