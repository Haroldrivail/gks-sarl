import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon, FaCog, FaCheck, FaPalette, FaAdjust } from 'react-icons/fa';

export default function ThemeDemo() {
    const { isDark, getThemeInfo } = useTheme();
    const themeInfo = getThemeInfo();

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
                        <FaPalette className="text-primary mr-2" />
                        <span className="text-sm font-medium text-primary">Thèmes Personnalisables</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Expérience Optimisée
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Notre plateforme s'adapte à vos préférences avec des thèmes clair et sombre, 
                        offrant une expérience visuelle confortable en toutes circonstances.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Thème Actuel */}
                    <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-600">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                {isDark ? (
                                    <FaMoon className="text-2xl text-primary" />
                                ) : (
                                    <FaSun className="text-2xl text-primary" />
                                )}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Thème Actuel
                            </h3>
                            <div className="inline-flex items-center px-3 py-1 bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
                                <span className="text-sm font-medium text-primary">
                                    {themeInfo.isSystemPreference ? 'Système' : (isDark ? 'Sombre' : 'Clair')}
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {themeInfo.isSystemPreference 
                                    ? 'Suit automatiquement les préférences de votre système'
                                    : isDark 
                                        ? 'Mode sombre pour réduire la fatigue oculaire'
                                        : 'Mode clair pour une visibilité optimale'
                                }
                            </p>
                        </div>
                    </div>

                    {/* Fonctionnalités */}
                    <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-600">
                        <div className="w-16 h-16 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaAdjust className="text-2xl text-secondary" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                            Fonctionnalités
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-600 dark:text-gray-300">
                                <FaCheck className="text-secondary mr-3 flex-shrink-0" />
                                <span className="text-sm">Sauvegarde automatique des préférences</span>
                            </li>
                            <li className="flex items-center text-gray-600 dark:text-gray-300">
                                <FaCheck className="text-secondary mr-3 flex-shrink-0" />
                                <span className="text-sm">Synchronisation avec le système</span>
                            </li>
                            <li className="flex items-center text-gray-600 dark:text-gray-300">
                                <FaCheck className="text-secondary mr-3 flex-shrink-0" />
                                <span className="text-sm">Transitions fluides et animées</span>
                            </li>
                            <li className="flex items-center text-gray-600 dark:text-gray-300">
                                <FaCheck className="text-secondary mr-3 flex-shrink-0" />
                                <span className="text-sm">Optimisation pour tous les écrans</span>
                            </li>
                        </ul>
                    </div>

                    {/* Statistiques */}
                    <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-600">
                        <div className="w-16 h-16 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaCog className="text-2xl text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                            Statistiques
                        </h3>
                        <div className="space-y-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary mb-1">2</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Thèmes Disponibles</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Components Compatibles</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent mb-1">⚡</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Performance Optimisée</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Couleurs du thème */}
                <div className="mt-16 bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-600">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                        Palette de Couleurs GKS
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Couleur Primaire */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-primary rounded-2xl mx-auto mb-4 shadow-lg"></div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Primaire</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Innovation et Excellence</p>
                        </div>
                        
                        {/* Couleur Secondaire */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-secondary rounded-2xl mx-auto mb-4 shadow-lg"></div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Secondaire</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Croissance et Durabilité</p>
                        </div>
                        
                        {/* Couleur Accent */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-accent rounded-2xl mx-auto mb-4 shadow-lg"></div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Accent</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300">Chaleur et Confiance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
