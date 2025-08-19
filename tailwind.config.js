/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(45, 95%, 95%)',
          100: 'hsl(45, 95%, 85%)',
          200: 'hsl(45, 90%, 75%)',
          300: 'hsl(45, 85%, 65%)',
          400: 'hsl(45, 85%, 60%)',
          500: 'hsl(45, 80%, 50%)',
          600: 'hsl(35, 85%, 45%)',
          700: 'hsl(35, 90%, 40%)',
          800: 'hsl(30, 90%, 35%)',
          900: 'hsl(25, 85%, 25%)',
          DEFAULT: 'hsl(45, 85%, 60%)',
        },
        secondary: {
          50: 'hsl(120, 50%, 95%)',
          100: 'hsl(120, 50%, 87%)',
          200: 'hsl(120, 45%, 77%)',
          300: 'hsl(120, 40%, 65%)',
          400: 'hsl(120, 40%, 55%)',
          500: 'hsl(120, 45%, 45%)',
          600: 'hsl(120, 50%, 35%)',
          700: 'hsl(120, 55%, 25%)',
          800: 'hsl(120, 60%, 20%)',
          900: 'hsl(120, 65%, 15%)',
          DEFAULT: 'hsl(120, 40%, 55%)',
        },
        accent: {
          50: 'hsl(30, 40%, 95%)',
          100: 'hsl(30, 40%, 85%)',
          200: 'hsl(28, 40%, 75%)',
          300: 'hsl(25, 40%, 65%)',
          400: 'hsl(25, 40%, 55%)',
          500: 'hsl(20, 45%, 45%)',
          600: 'hsl(18, 50%, 35%)',
          700: 'hsl(15, 55%, 25%)',
          800: 'hsl(12, 60%, 20%)',
          900: 'hsl(10, 65%, 15%)',
          DEFAULT: 'hsl(25, 40%, 55%)',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'light': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'large': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'primary': '0 10px 25px rgba(255, 193, 7, 0.3)',
        'secondary': '0 10px 25px rgba(76, 175, 80, 0.3)',
        'accent': '0 4px 14px 0 rgba(120, 53, 15, 0.39)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-light': 'bounceLights 2s ease-in-out infinite',
        'pulse-gk': 'pulseGk 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceLights: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseGk: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'gradient': 'linear-gradient(135deg, hsl(45, 85%, 60%) 0%, hsl(120, 40%, 55%) 50%, hsl(25, 40%, 55%) 100%)',
        'gradient-hero': 'linear-gradient(135deg, hsl(45, 95%, 95%) 0%, hsl(120, 50%, 95%) 50%, hsl(30, 40%, 95%) 100%)',
        'gradient-vertical': 'linear-gradient(180deg, hsl(45, 85%, 60%) 0%, hsl(120, 40%, 55%) 100%)',
        'gradient-reverse': 'linear-gradient(135deg, hsl(120, 40%, 55%) 0%, hsl(45, 85%, 60%) 100%)',
        'radial': 'radial-gradient(ellipse at center, hsl(45, 85%, 60%) 0%, hsl(120, 40%, 55%) 100%)',
        'hero-pattern': 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(45, 100%, 90%), transparent)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    // Plugin personnalisé pour les utilitaires GK Solutions
    function({ addUtilities, addComponents }) {
      const newUtilities = {
        '.text-primary': {
          color: 'hsl(45, 85%, 60%)',
        },
        '.text-secondary': {
          color: 'hsl(120, 40%, 55%)',
        },
        '.text-accent': {
          color: 'hsl(25, 40%, 55%)',
        },
        '.bg-primary': {
          backgroundColor: 'hsl(45, 85%, 60%)',
        },
        '.bg-secondary': {
          backgroundColor: 'hsl(120, 40%, 55%)',
        },
        '.bg-accent': {
          backgroundColor: 'hsl(25, 40%, 55%)',
        },
        '.border-primary': {
          borderColor: 'hsl(45, 85%, 60%)',
        },
        '.border-secondary': {
          borderColor: 'hsl(120, 40%, 55%)',
        },
        '.border-accent': {
          borderColor: 'hsl(25, 40%, 55%)',
        },
        '.gradient-gk': {
          background: 'linear-gradient(135deg, hsl(45, 85%, 60%) 0%, hsl(120, 40%, 55%) 50%, hsl(25, 40%, 55%) 100%)',
        },
        '.gradient-reverse': {
          background: 'linear-gradient(135deg, hsl(120, 40%, 55%) 0%, hsl(45, 85%, 60%) 100%)',
        },
        '.shadow-gk': {
          boxShadow: '0 4px 14px 0 rgba(245, 158, 11, 0.25), 0 2px 8px 0 rgba(34, 197, 94, 0.15)',
        },
        '.transition-gk': {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.hover-lift': {
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
          },
        },
        '.hover-scale': {
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
        '.focus-gk': {
          '&:focus': {
            outline: '2px solid hsl(45, 85%, 60%)',
            outlineOffset: '2px',
          },
        },
      }
      
      const newComponents = {
        '.btn-gk': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          fontWeight: '500',
          borderRadius: '0.5rem',
          transition: 'all 0.3s ease',
          textDecoration: 'none',
          border: 'none',
          cursor: 'pointer',
        },
        '.btn-primary': {
          backgroundColor: 'hsl(45, 85%, 60%)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'hsl(35, 85%, 45%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(255, 193, 7, 0.3)',
          },
        },
        '.btn-secondary': {
          backgroundColor: 'hsl(120, 40%, 55%)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'hsl(120, 50%, 35%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px rgba(76, 175, 80, 0.3)',
          },
        },
        '.btn-outline': {
          backgroundColor: 'transparent',
          color: 'hsl(45, 85%, 60%)',
          border: '2px solid hsl(45, 85%, 60%)',
          '&:hover': {
            backgroundColor: 'hsl(45, 85%, 60%)',
            color: 'white',
            transform: 'translateY(-2px)',
          },
        },
        '.card-gk': {
          backgroundColor: 'white',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          border: '1px solid #e5e7eb',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
        },
        '.container': {
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem',
          '@screen sm': {
            padding: '0 1.5rem',
          },
          '@screen lg': {
            padding: '0 2rem',
          },
        },
      }

      addUtilities(newUtilities)
      addComponents(newComponents)
    }
  ],
  darkMode: 'class',
}
