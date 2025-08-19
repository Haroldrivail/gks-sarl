import React from 'react';
import { FaArrowRight, FaPlay, FaCheck, FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white dark:via-gray-900 to-secondary/5"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Contenu Principal */}
                    <div className="space-y-8 animate-fade-in">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/20 dark:border-primary/30">
                            <FaStar className="text-primary mr-2 text-sm" />
                            <span className="text-sm font-medium text-primary">Solutions d'Excellence depuis 2025</span>
                        </div>
                        
                        {/* Titre Principal */}
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-gray-900 dark:text-white">Transformez</span>
                                <br />
                                <span className="text-primary">Votre Business</span>
                                <br />
                                <span className="text-secondary">Avec GKS SARL</span>
                            </h1>
                            <div className="w-20 h-1 bg-primary rounded-full"></div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                            Votre partenaire de confiance pour les <strong className="text-primary">solutions technologiques</strong>, 
                            <strong className="text-secondary"> télécommunications</strong> et 
                            <strong className="text-accent"> services diversifiés</strong> au Cameroun.
                        </p>
                        
                        {/* Statistiques */}
                        <div className="grid grid-cols-3 gap-6 py-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary">50+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Projets Réalisés</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary">100%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Client</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-accent">24/7</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Support Disponible</div>
                            </div>
                        </div>
                        
                        {/* Boutons d'Action */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <NavLink 
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                            >
                                Démarrer un Projet
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </NavLink>
                            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary dark:text-primary font-semibold rounded-xl hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 group">
                                <FaPlay className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                                Voir nos Réalisations
                            </button>
                        </div>
                        
                        {/* Logos Partenaires */}
                        <div className="pt-8">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Ils nous font confiance</p>
                            <div className="flex items-center gap-8 opacity-60">
                                <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">ORANGE</span>
                                </div>
                                <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                                    <span className="text-xs font-semibold text-gray-600">MTN</span>
                                </div>
                                <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center">
                                    <span className="text-xs font-semibold text-gray-600">CAMTEL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Section Visuelle */}
                    <div className="relative animate-slide-up">
                        {/* Image Principale */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-6"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                                {/* Simulation d'interface */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-32 h-4 bg-primary rounded"></div>
                                        <div className="w-4 h-4 bg-secondary rounded-full"></div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-16 h-8 bg-primary rounded text-white text-xs flex items-center justify-center">
                                            Solar
                                        </div>
                                        <div className="w-16 h-8 bg-secondary rounded text-white text-xs flex items-center justify-center">
                                            Telecom
                                        </div>
                                        <div className="w-16 h-8 bg-accent rounded text-white text-xs flex items-center justify-center">
                                            Web
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Cards flottantes */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100">
                                    <div className="text-center">
                                        <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto mb-1 flex items-center justify-center">
                                            <FaCheck className="text-primary text-sm" />
                                        </div>
                                        <div className="text-xs font-semibold text-gray-700">Certifié</div>
                                    </div>
                                </div>
                                
                                <div className="absolute -bottom-4 -left-4 w-32 h-16 bg-white rounded-2xl shadow-xl flex items-center px-4 border border-gray-100">
                                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mr-3">
                                        <FaStar className="text-secondary text-sm" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">4.9/5</div>
                                        <div className="text-xs text-gray-500">Avis clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Éléments décoratifs */}
                        <div className="absolute top-1/4 -right-8 w-16 h-16 bg-accent/20 rounded-full animate-bounce-light"></div>
                        <div className="absolute bottom-1/4 -left-8 w-12 h-12 bg-primary/20 rounded-full animate-pulse-gk"></div>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}
