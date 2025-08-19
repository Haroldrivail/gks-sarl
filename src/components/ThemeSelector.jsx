import React, { useState } from 'react';
import { FaSun, FaMoon, FaCog, FaCheck, FaChevronDown } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeSelector({ showLabel = true, position = 'bottom-right' }) {
    const { theme, toggleTheme, setTheme, getThemeInfo, isDark } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const themeInfo = getThemeInfo();

    const themes = [
        {
            id: 'light',
            name: 'Clair',
            icon: FaSun,
            description: 'Thème lumineux et moderne'
        },
        {
            id: 'dark', 
            name: 'Sombre',
            icon: FaMoon,
            description: 'Thème sombre pour les yeux'
        },
        {
            id: 'system',
            name: 'Système',
            icon: FaCog,
            description: 'Suit les préférences système'
        }
    ];

    const currentThemeData = themes.find(t => {
        if (themeInfo.isSystemPreference) return t.id === 'system';
        return t.id === theme;
    });

    const positionClasses = {
        'top-left': 'top-full left-0 mt-2',
        'top-right': 'top-full right-0 mt-2', 
        'bottom-left': 'bottom-full left-0 mb-2',
        'bottom-right': 'bottom-full right-0 mb-2'
    };

    const handleThemeSelect = (themeId) => {
        setTheme(themeId);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Bouton simple pour toggle rapide */}
            <button
                onClick={toggleTheme}
                onContextMenu={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                }}
                className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm hover:shadow-md"
                title="Clic gauche: Basculer | Clic droit: Options"
            >
                <div className="relative">
                    <currentThemeData.icon className={`text-lg transition-all duration-300 ${
                        isDark ? 'text-blue-400' : 'text-yellow-500'
                    } group-hover:scale-110`} />
                    
                    {/* Indicateur d'animation */}
                    <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
                        isDark ? 'bg-blue-400/20' : 'bg-yellow-500/20'
                    } scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100`}></div>
                </div>
                
                {showLabel && (
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {currentThemeData.name}
                    </span>
                )}

                {/* Indicateur dropdown */}
                <FaChevronDown className={`text-xs text-gray-500 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                }`} />
            </button>

            {/* Menu dropdown */}
            {isOpen && (
                <>
                    {/* Overlay pour fermer */}
                    <div 
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    
                    {/* Menu */}
                    <div className={`absolute z-50 ${positionClasses[position]} w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in slide-in-from-top-2 duration-200`}>
                        {/* Header */}
                        <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-600">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                Choisir un thème
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                Personnalisez l'apparence de l'interface
                            </p>
                        </div>

                        {/* Options de thème */}
                        <div className="py-2">
                            {themes.map((themeOption) => {
                                const isSelected = themeInfo.isSystemPreference 
                                    ? themeOption.id === 'system'
                                    : themeOption.id === theme;
                                
                                return (
                                    <button
                                        key={themeOption.id}
                                        onClick={() => handleThemeSelect(themeOption.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                                            isSelected 
                                                ? 'bg-primary/10 text-primary dark:bg-primary/20' 
                                                : 'hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-300'
                                        }`}
                                    >
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                                            isSelected 
                                                ? 'bg-primary text-white' 
                                                : 'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                                        }`}>
                                            <themeOption.icon className="text-sm" />
                                        </div>
                                        
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium">{themeOption.name}</span>
                                                {isSelected && (
                                                    <FaCheck className="text-xs text-primary" />
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                {themeOption.description}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Footer avec info */}
                        <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-600">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                💡 Clic droit sur l'icône pour ces options
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

// Composant simple juste pour l'icône
export function ThemeToggleIcon({ size = 'md' }) {
    const { isDark, toggleTheme } = useTheme();
    
    const sizes = {
        sm: 'text-sm',
        md: 'text-lg', 
        lg: 'text-xl',
        xl: 'text-2xl'
    };

    return (
        <button
            onClick={toggleTheme}
            className="group p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            title={`Passer au thème ${isDark ? 'clair' : 'sombre'}`}
        >
            {isDark ? (
                <FaSun className={`${sizes[size]} text-yellow-500 group-hover:scale-110 transition-transform duration-300`} />
            ) : (
                <FaMoon className={`${sizes[size]} text-blue-600 group-hover:scale-110 transition-transform duration-300`} />
            )}
        </button>
    );
}
