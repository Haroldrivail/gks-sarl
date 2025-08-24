import React from 'react';
// eslint-disable-next-line no-unused-vars
import { useSpring, animated, useInView } from '@react-spring/web';
import { FaPhone, FaEnvelope, FaWhatsapp, FaCalendarAlt, FaArrowRight, FaRocket, FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router';
import ServiceIllustration from './ServiceIllustration';

// Images pour le CTA
import techTeamImg from '../assets/images/tech-team.jpg';
import businessImg from '../assets/images/business-growth.jpg';

export default function CTASection() {
    // Animation pour la section d'en-tête
    const [headerRef, headerInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const headerAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-30px)' },
        to: {
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0px)' : 'translateY(-30px)'
        },
        config: { tension: 200, friction: 20 },
        delay: 200,
    });

    // Animation pour les options de contact
    const contactAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(-50px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { tension: 180, friction: 20 },
        delay: 400,
    });

    // Animation pour les actions CTA
    const ctaAnimation = useSpring({
        from: { opacity: 0, transform: 'translateX(50px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { tension: 180, friction: 20 },
        delay: 600,
    });

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('newsletter-email');

        if (email && email.trim()) {
            const subject = "Nouvel Abonnement Actualités - GKS SARL";
            const body = `Nouvel abonnement à la newsletter:

Email: ${email}
Date: ${new Date().toLocaleDateString('fr-FR')}
Heure: ${new Date().toLocaleTimeString('fr-FR')}
Source: Section CTA - Site web GKS SARL

Actions à effectuer:
- Ajouter l'email à la liste de diffusion actualités
- Envoyer email de bienvenue
- Configurer l'envoi des actualités

Cet email a été généré automatiquement depuis le site web.`;

            // Ouvrir le client email avec les informations pré-remplies
            window.location.href = `mailto:guykouo@yahoo.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Réinitialiser le formulaire après soumission
            e.target.reset();
            
            // Afficher un message de confirmation (optionnel)
            alert('Merci ! Votre demande d\'abonnement a été envoyée.');
        }
    };

    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={techTeamImg}
                    alt="Tech Team"
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gray-900/70"></div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-green-500/10"></div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <animated.div ref={headerRef} style={headerAnimation} className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Prêt à Faire Décoller
                        <span className="text-primary"> Votre Projet</span> ?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ne laissez pas passer cette opportunité. Contactez-nous dès maintenant
                        pour une consultation gratuite et découvrez comment nous pouvons vous aider.
                    </p>
                </animated.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Contact Options */}
                    <animated.div style={contactAnimation} className="space-y-6 lg:space-y-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 flex items-center">
                                <ServiceIllustration 
                                    type="communication" 
                                    className="w-6 h-6 lg:w-8 lg:h-8 mr-2 lg:mr-3"
                                    fallbackIcon={<FaPhone className="text-white" />}
                                />
                                Parlons de Votre Projet
                            </h3>

                            <div className="space-y-4 lg:space-y-6">
                                {/* Phone */}
                                <a
                                    href="tel:+237677117831"
                                    className="flex items-center group hover:scale-105 transition-transform duration-300 no-underline"
                                >
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-primary/20 rounded-xl flex items-center justify-center mr-3 lg:mr-4">
                                        <FaPhone className="text-primary text-base lg:text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm lg:text-base">Appelez-nous</h4>
                                        <p className="text-gray-300 text-sm">(+237) 677 11 78 31</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:guykouo@yahoo.fr"
                                    className="flex items-center group hover:scale-105 transition-transform duration-300 no-underline"
                                >
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-secondary/20 rounded-xl flex items-center justify-center mr-3 lg:mr-4">
                                        <FaEnvelope className="text-secondary text-base lg:text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm lg:text-base">Écrivez-nous</h4>
                                        <p className="text-gray-300 text-sm">guykouo@yahoo.fr</p>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/237677117831"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center group hover:scale-105 transition-transform duration-300 no-underline"
                                >
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-accent/20 rounded-xl flex items-center justify-center mr-3 lg:mr-4">
                                        <FaWhatsapp className="text-accent text-base lg:text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm lg:text-base">WhatsApp</h4>
                                        <p className="text-gray-300 text-sm">Chat instantané</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-primary/10 rounded-2xl p-4 lg:p-6 border border-primary/20">
                            <div className="flex items-center">
                                <FaCalendarAlt className="text-primary text-xl lg:text-2xl mr-3 lg:mr-4" />
                                <div>
                                    <h4 className="text-white font-semibold text-sm lg:text-base">Disponibilité</h4>
                                    <p className="text-gray-300 text-xs lg:text-sm">Lun - Ven: 8h00 - 18h00 | Sam: 9h00 - 13h00</p>
                                </div>
                            </div>
                        </div>
                    </animated.div>

                    {/* CTA Actions */}
                    <animated.div style={ctaAnimation} className="space-y-6 lg:space-y-8">
                        {/* Image principale */}
                        <div className="text-center mb-6 lg:mb-8">
                            <div className="w-full max-w-sm mx-auto h-48 lg:w-80 lg:h-64 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={businessImg}
                                    alt="Croissance business"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Primary CTA */}
                        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
                            {/* Decorative illustration */}
                            <div className="absolute top-3 right-3 lg:top-4 lg:right-4 w-12 h-12 lg:w-16 lg:h-16 opacity-10">
                                <ServiceIllustration 
                                    type="success" 
                                    className="w-full h-full object-contain"
                                    fallbackIcon={<FaStar className="text-primary" />}
                                />
                            </div>

                            <div className="text-center mb-4 lg:mb-6 relative z-10">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-3">
                                    Consultation Gratuite
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base">
                                    Obtenez une analyse personnalisée de vos besoins en 24h
                                </p>
                            </div>

                            <div className="space-y-4">
                                <NavLink
                                    to="/contact"
                                    className="w-full flex items-center justify-center px-6 lg:px-8 py-3 lg:py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 cursor-pointer transition-all duration-300 group text-sm lg:text-base"
                                >
                                    Démarrer Maintenant
                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </NavLink>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-4 lg:mt-6 pt-4 lg:pt-6 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs lg:text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Réponse garantie sous 2h
                                    </div>
                                    <div className="flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                        Sans engagement
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secondary CTA */}
                        <div className="bg-secondary/10 rounded-2xl p-4 lg:p-6 border border-secondary/20 relative overflow-hidden">
                            {/* Background illustration */}
                            <div className="absolute top-0 right-0 w-16 h-16 lg:w-24 lg:h-24 opacity-20">
                                <ServiceIllustration 
                                    type="digital" 
                                    className="w-full h-full object-contain"
                                    fallbackIcon={<FaEnvelope className="text-white" />}
                                />
                            </div>

                            <div className="text-center relative z-10">
                                <h4 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">
                                    Suivez nos Actualités
                                </h4>
                                <p className="text-gray-300 mb-3 lg:mb-4 text-sm lg:text-base">
                                    Restez informé de nos dernières innovations et conseils
                                </p>
                                <div className="flex gap-3">
                                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                                        <input
                                            type="email"
                                            name="newsletter-email"
                                            placeholder="Votre email"
                                            className="flex-1 px-3 lg:px-4 py-2 lg:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-secondary text-sm"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="px-4 lg:px-6 py-2 lg:py-3 bg-secondary text-white rounded-xl hover:bg-secondary-600 transition-colors duration-300 text-sm font-medium whitespace-nowrap cursor-pointer"
                                        >
                                            S'abonner
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>

                {/* Bottom Banner */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-accent/20 rounded-full border border-accent/30">
                        <span className="text-accent font-medium">
                            🎯 Plus de 50 entreprises nous font déjà confiance
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}