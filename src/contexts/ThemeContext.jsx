import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [isLoading, setIsLoading] = useState(true);

    // Charger le thème depuis localStorage au démarrage
    useEffect(() => {
        const savedTheme = localStorage.getItem('gks-theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;
        
        setTheme(initialTheme);
        setIsLoading(false);
        applyTheme(initialTheme);
    }, []);

    // Écouter les changements de préférence système
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (!localStorage.getItem('gks-theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                applyTheme(newTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Appliquer le thème au DOM
    const applyTheme = (newTheme) => {
        const root = document.documentElement;
        
        if (newTheme === 'dark') {
            root.classList.add('dark');
            root.style.colorScheme = 'dark';
        } else {
            root.classList.remove('dark');
            root.style.colorScheme = 'light';
        }
    };

    // Changer de thème
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('gks-theme', newTheme);
        applyTheme(newTheme);
    };

    // Définir un thème spécifique
    const setSpecificTheme = (newTheme) => {
        if (newTheme === 'system') {
            localStorage.removeItem('gks-theme');
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            setTheme(systemTheme);
            applyTheme(systemTheme);
        } else {
            setTheme(newTheme);
            localStorage.setItem('gks-theme', newTheme);
            applyTheme(newTheme);
        }
    };

    // Obtenir le thème actuel avec les informations système
    const getThemeInfo = () => {
        const savedTheme = localStorage.getItem('gks-theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        
        return {
            current: theme,
            saved: savedTheme,
            system: systemTheme,
            isSystemPreference: !savedTheme
        };
    };

    const value = {
        theme,
        toggleTheme,
        setTheme: setSpecificTheme,
        getThemeInfo,
        isLoading,
        isDark: theme === 'dark',
        isLight: theme === 'light'
    };

    // Afficher un loader pendant l'initialisation pour éviter le flash
    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
