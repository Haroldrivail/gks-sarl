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
              // Smooth scroll to top with a little bounce effect
              const scrollStep = -window.scrollY / (500 / 15);
              const scrollAnimation = () => {
                if (window.scrollY !== 0) {
                  window.scrollBy(0, scrollStep);
                  requestAnimationFrame(scrollAnimation);
                }
              };
              requestAnimationFrame(scrollAnimation);
            }}
            title="Fusée vers le haut !"
          >
            <FaRocket className="text-white text-sm group-hover/rocket:animate-bounce transition-all duration-300" />

            {/* Mini tooltip for rocket */}
            <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/rocket:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-secondary text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
                Back to Top! 🚀
                <div className="absolute left-full top-1/2 transform -translate-y-1/2">
                  <div className="w-0 h-0 border-l-3 border-l-secondary border-t-3 border-t-transparent border-b-3 border-b-transparent"></div>
                </div>
              </div>
            </div>
            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>
      )}
    </>
  );
}