import React, { useCallback } from 'react';
import { FaArrowRight, FaPlay, FaCheck, FaStar, FaSolarPanel, FaWifi } from 'react-icons/fa';
import { NavLink } from 'react-router';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
// eslint-disable-next-line no-unused-vars
import { useSpring, useInView, animated } from '@react-spring/web';
import ServiceIllustration from './ServiceIllustration';

// Import des images du dossier assets
import heroTechImg from '../assets/images/hero-tech-img.jpg';
import teamWorkImg from '../assets/images/team-collaboration.jpg';

export default function Hero() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {
        // Particles loaded callback
    }, []);

    // Composant pour animer les compteurs du Hero
    const HeroCounter = ({ number, color }) => {
        const [ref, inView] = useInView({
            threshold: 0.3,
            triggerOnce: true
        });

        // Animation pour les pourcentages
        const percentValue = useSpring({
            from: { value: 0 },
            to: { value: inView && number === '100%' ? 100 : 0 },
            config: { tension: 100, friction: 40, duration: 1500 },
        });

        // Animation pour les nombres avec +
        const numberValue = useSpring({
            from: { value: 0 },
            to: { value: inView && number === '50+' ? 50 : 0 },
            config: { tension: 100, friction: 40, duration: 1500 },
        });

        const renderValue = () => {
            if (number === '100%') {
                return percentValue.value.to(val => `${Math.floor(val)}%`);
            } else if (number === '50+') {
                return numberValue.value.to(val => `${Math.floor(val)}+`);
            } else {
                return number; // Pour 24/7, pas d'animation
            }
        };

        return (
            <animated.div ref={ref} className={`text-3xl font-bold ${color}`}>
                {renderValue()}
            </animated.div>
        );
    };

    // Animations pour les différentes sections
    const contentAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(-50px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { tension: 200, friction: 25 },
        delay: 300,
    });

    const visualAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(50px) rotateY(15deg)' },
        to: { opacity: 1, transform: 'translateX(0px) rotateY(0deg)' },
        config: { tension: 180, friction: 20 },
        delay: 600,
    });

    const buttonAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(30px)' },
        to: { opacity: 1, transform: 'translateY(0px)' },
        config: { tension: 200, friction: 20 },
        delay: 900,
    });

    return (
        <section className="relative min-h-screen bg-white overflow-hidden transition-colors duration-300">
            {/* Particles Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#3B82F6", "#10B981", "#F59E0B"],
                        },
                        links: {
                            color: "#3B82F6",
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 50,
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

            {/* Background Elements */}
            <div className="absolute inset-0 bg-green-100 z-0"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl z-0"></div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Contenu Principal */}
                    <animated.div style={contentAnimation} className="space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                            <FaStar className="text-primary mr-2 text-sm" />
                            <span className="text-sm font-medium text-primary">Solutions d'Excellence depuis 2025</span>
                        </div>

                        {/* Titre Principal */}
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-gray-900">Transformez</span>
                                <br />
                                <span className="text-primary">Votre Business</span>
                                <br />
                                <span className="text-green-500">Avec GKS SARL</span>
                            </h1>
                            <div className="w-20 h-1 bg-primary rounded-full"></div>
                        </div>

                        {/* Description */}
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            Votre partenaire de confiance pour les <strong className="text-primary">solutions technologiques</strong>,
                            <strong className="text-green-500"> télécommunications</strong> et
                            <strong className="text-blue-500"> services diversifiés</strong> au Cameroun.
                        </p>

                        {/* Statistiques */}
                        <div className="grid grid-cols-3 gap-6 py-6">
                            <div className="text-center">
                                <HeroCounter number="50+" color="text-primary" />
                                <div className="text-sm text-gray-600">Projets Réalisés</div>
                            </div>
                            <div className="text-center">
                                <HeroCounter number="100%" color="text-green-500" />
                                <div className="text-sm text-gray-600">Satisfaction Client</div>
                            </div>
                            <div className="text-center">
                                <HeroCounter number="24/7" color="text-blue-500" />
                                <div className="text-sm text-gray-600">Support Disponible</div>
                            </div>
                        </div>

                        {/* Boutons d'Action */}
                        <animated.div style={buttonAnimation} className="flex flex-col sm:flex-row gap-4">
                            <NavLink
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-amber-600 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
                            >
                                Démarrer un Projet
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </NavLink>
                            <a
                                href="#projets"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300 group no-underline"
                            >
                                <FaPlay className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                                Voir nos Réalisations
                            </a>
                        </animated.div>

                        {/* Logos Partenaires */}
                        <div className="pt-8">
                            <p className="text-sm text-gray-500 mb-4">Ils nous font confiance</p>
                            <div className="flex items-center gap-8 opacity-60">
                                <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center">
                                    <span className="text-xs font-semibold text-gray-600">ORANGE</span>
                                </div>
                                <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center">
                                    <span className="text-xs font-semibold text-gray-600">MTN</span>
                                </div>
                                <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center">
                                    <span className="text-xs font-semibold text-gray-600">CAMTEL</span>
                                </div>
                            </div>
                        </div>
                    </animated.div>

                    {/* Section Visuelle avec Illustrations Modernes */}
                    <animated.div style={visualAnimation} className="relative">
                        {/* Illustration principale depuis Doodle Ipsum */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-6"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden">
                                {/* Image technologie réelle */}
                                <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden bg-secondary-300">
                                    <img
                                        src={heroTechImg}
                                        alt="Infrastructure technologique GKS SARL"
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>

                                {/* Simulation d'interface améliorée */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="w-32 h-4 bg-primary rounded"></div>
                                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
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
                                        <div className="w-16 h-8 bg-green-500 rounded text-white text-xs flex items-center justify-center">
                                            Telecom
                                        </div>
                                        <div className="w-16 h-8 bg-blue-500 rounded text-white text-xs flex items-center justify-center">
                                            Web
                                        </div>
                                    </div>
                                </div>

                                {/* Cards flottantes avec mini illustrations */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100">
                                    <div className="text-center">
                                        <img
                                            src={teamWorkImg}
                                            alt="Équipe certifiée"
                                            className="w-8 h-8 rounded-lg mx-auto mb-1 object-cover"
                                        />
                                        <div className="text-xs font-semibold text-gray-700">Certifié</div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-4 -left-4 w-32 h-16 bg-white rounded-2xl shadow-xl flex items-center px-4 border border-gray-100">
                                    <ServiceIllustration
                                        type="avatar2"
                                        className="w-8 h-8 rounded-lg mr-3"
                                        fallbackIcon={<div className="w-8 h-8 bg-green-500/20 rounded-lg mr-3 flex items-center justify-center">
                                            <FaStar className="text-green-500 text-sm" />
                                        </div>}
                                    />
                                    <div>
                                        <div className="text-sm font-bold text-gray-900">4.9/5</div>
                                        <div className="text-xs text-gray-500">Avis clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Éléments décoratifs avec mini illustrations */}
                        <div className="absolute top-1/4 -right-8 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce-light flex items-center justify-center">
                            <ServiceIllustration
                                type="decorative1"
                                className="w-8 h-8"
                                fallbackIcon={<span className="text-blue-500 text-lg">💡</span>}
                            />
                        </div>
                        <div className="absolute bottom-1/4 -left-8 w-12 h-12 bg-primary/20 rounded-full animate-pulse-gk flex items-center justify-center">
                            <ServiceIllustration
                                type="decorative2"
                                className="w-6 h-6"
                                fallbackIcon={<span className="text-primary text-sm">⚡</span>}
                            />
                        </div>
                    </animated.div>
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
