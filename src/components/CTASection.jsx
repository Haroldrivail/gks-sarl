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
            const subject = "📧 Nouvel Abonnement Actualités - GKS SARL";
            const body = `
📰 NOUVEL ABONNEMENT ACTUALITÉS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 INFORMATIONS ABONNÉ:
• Email: ${email}

📅 DÉTAILS:
• Date d'abonnement: ${new Date().toLocaleDateString('fr-FR')}
• Heure: ${new Date().toLocaleTimeString('fr-FR')}
• Source: Section CTA - Site web GKS SARL

📋 ACTIONS À EFFECTUER:
□ Ajouter l'email à la liste de diffusion actualités
□ Envoyer email de bienvenue
□ Configurer l'envoi des actualités

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cet email a été généré automatiquement depuis le site web.
            `;

            window.location.href = `mailto:guykouo@yahoo.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Options */}
                    <animated.div style={contactAnimation} className="space-y-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <ServiceIllustration 
                                    type="communication" 
                                    className="w-8 h-8 mr-3"
                                    fallbackIcon={<FaPhone className="text-white" />}
                                />
                                Parlons de Votre Projet
                            </h3>

                            <div className="space-y-6">
                                {/* Phone */}
                                <a
                                    href="tel:+237677117831"
                                    className="flex items-center group hover:scale-105 transition-transform duration-300 no-underline"
                                >
                                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mr-4">
                                        <FaPhone className="text-primary text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Appelez-nous</h4>
                                        <p className="text-gray-300">(+237) 677 11 78 31</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:guykouo@yahoo.fr"
                                    className="flex items-center group hover:scale-105 transition-transform duration-300 no-underline"
                                >
                                    <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mr-4">
                                        <FaEnvelope className="text-secondary text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Écrivez-nous</h4>
                                        <p className="text-gray-300">guykouo@yahoo.fr</p>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/237677117831"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center group hover:scale-105 transition-transform duration-300 no-underline"
                                >
                                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mr-4">
                                        <FaWhatsapp className="text-accent text-lg" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">WhatsApp</h4>
                                        <p className="text-gray-300">Chat instantané</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                            <div className="flex items-center">
                                <FaCalendarAlt className="text-primary text-2xl mr-4" />
                                <div>
                                    <h4 className="text-white font-semibold">Disponibilité</h4>
                                    <p className="text-gray-300">Lun - Ven: 8h00 - 18h00 | Sam: 9h00 - 13h00</p>
                                </div>
                            </div>
                        </div>
                    </animated.div>

                    {/* CTA Actions */}
                    <animated.div style={ctaAnimation} className="space-y-8">
                        {/* Image principale */}
                        <div className="text-center mb-8">
                            <div className="w-80 h-64 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={businessImg}
                                    alt="Croissance business"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Primary CTA */}
                        <div className="bg-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                            {/* Decorative illustration */}
                            <div className="absolute top-4 right-4 w-16 h-16 opacity-10">
                                <ServiceIllustration 
                                    type="success" 
                                    className="w-full h-full object-contain"
                                    fallbackIcon={<FaStar className="text-primary" />}
                                />
                            </div>

                            <div className="text-center mb-6 relative z-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    Consultation Gratuite
                                </h3>
                                <p className="text-gray-600">
                                    Obtenez une analyse personnalisée de vos besoins en 24h
                                </p>
                            </div>

                            <div className="space-y-4">
                                <NavLink
                                    to="/contact"
                                    className="w-full flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 cursor-pointer transition-all duration-300 group"
                                >
                                    Démarrer Maintenant
                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </NavLink>
                            </div>

                            {/* Trust Indicators */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
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
                        <div className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20 relative overflow-hidden">
                            {/* Background illustration */}
                            <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                                <ServiceIllustration 
                                    type="digital" 
                                    className="w-full h-full object-contain"
                                    fallbackIcon={<FaEnvelope className="text-white" />}
                                />
                            </div>

                            <div className="text-center relative z-10">
                                <h4 className="text-xl font-bold text-white mb-3">
                                    Suivez nos Actualités
                                </h4>
                                <p className="text-gray-300 mb-4">
                                    Restez informé de nos dernières innovations et conseils
                                </p>
                                <div className="flex gap-3">
                                    <form onSubmit={handleNewsletterSubmit} className="flex gap-3 w-full">
                                        <input
                                            type="email"
                                            name="newsletter-email"
                                            placeholder="Votre email"
                                            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="px-6 py-3 bg-secondary text-white rounded-xl hover:bg-secondary-600 transition-colors duration-300"
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
