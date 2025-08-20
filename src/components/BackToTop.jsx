import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { useSpring, animated} from '@react-spring/web';
import { FaArrowUp, FaRocket } from 'react-icons/fa';
import { scrollToTop } from '../hooks/useScrollToTop';

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

  // Animation spring pour l'apparition/disparition
  const buttonAnimation = useSpring({
    transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(20px) scale(0.8)',
    opacity: isVisible ? 1 : 0,
    config: { tension: 300, friction: 20 }
  });

  return (
    <>
      {isVisible && (
        <animated.div 
          style={buttonAnimation}
          className="fixed right-6 bottom-6 z-50 group"
        >
          {/* Main button container */}

          {/* Secondary rocket button for fun */}
          <div
            className="mt-3 w-12 h-12 bg-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer group/rocket"
            onClick={() => scrollToTop(true)}
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
        </animated.div>
      )}
    </>
  );
}