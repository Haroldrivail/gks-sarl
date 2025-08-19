import React from 'react';
import { FaStar, FaQuoteLeft, FaTrophy, FaAward } from 'react-icons/fa';

export default function PartnersSection() {
    const partners = [
        {
            name: "SONARA",
            logo: "🏭",
            type: "Industrie Pétrolière",
            description: "Automatisation complète des systèmes de distribution"
        },
        {
            name: "AGRITECH PLUS",
            logo: "🌱",
            type: "Agriculture",
            description: "Solutions IoT pour l'agriculture de précision"
        },
        {
            name: "HOSPITAL CENTER",
            logo: "🏥",
            type: "Santé",
            description: "Système de gestion énergétique intelligent"
        },
        {
            name: "LYCÉE TECHNIQUE",
            logo: "🎓",
            type: "Éducation",
            description: "Infrastructure réseau et connectivité"
        },
        {
            name: "DOUALA PORT",
            logo: "⚓",
            type: "Transport",
            description: "Modernisation des systèmes logistiques"
        },
        {
            name: "BANK CENTRAL",
            logo: "🏦",
            type: "Finance",
            description: "Sécurisation et automatisation bancaire"
        }
    ];

    const testimonials = [
        {
            text: "GKS SARL a transformé notre exploitation agricole. Nos rendements ont augmenté de 45% grâce à leurs solutions IoT.",
            author: "Jean-Pierre Mbida",
            company: "Ferme Moderne Douala",
            rating: 5,
            image: "👨‍🌾"
        },
        {
            text: "Une équipe exceptionnelle ! Leur expertise en automatisation nous a fait économiser 60% sur nos coûts énergétiques.",
            author: "Marie Fotso",
            company: "Industries Camerounaises",
            rating: 5,
            image: "👩‍💼"
        },
        {
            text: "Service irréprochable et suivi personnalisé. Nous recommandons GKS SARL les yeux fermés.",
            author: "Dr. Paul Nkomo",
            company: "Centre Médical Moderne",
            rating: 5,
            image: "👨‍⚕️"
        }
    ];

    const certifications = [
        {
            name: "ISO 9001:2015",
            description: "Qualité",
            icon: FaTrophy,
            color: "text-yellow-500"
        },
        {
            name: "ISO 14001",
            description: "Environnement",
            icon: FaAward,
            color: "text-green-500"
        },
        {
            name: "OHSAS 18001",
            description: "Sécurité",
            icon: FaTrophy,
            color: "text-blue-500"
        },
        {
            name: "Certification Cisco",
            description: "Réseau",
            icon: FaAward,
            color: "text-primary"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                        <FaTrophy className="mr-2" />
                        Nos Références
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Ils Nous Font
                        <span className="text-primary"> Confiance</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez pourquoi plus de 500 entreprises et institutions 
                        ont choisi GKS SARL pour leurs projets technologiques.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
                        Nos Partenaires Stratégiques
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {partners.map((partner, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                            >
                                <div className="text-center">
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {partner.logo}
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                                        {partner.name}
                                    </h4>
                                    <div className="text-sm text-primary font-medium mb-3">
                                        {partner.type}
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        {partner.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
                        Ce qu'ils disent de nous
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative hover:shadow-xl transition-all duration-300"
                            >
                                <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                    <FaQuoteLeft className="text-white text-sm" />
                                </div>
                                
                                <div className="pt-4">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400 text-sm" />
                                        ))}
                                    </div>
                                    
                                    <p className="text-gray-600 mb-6 italic">
                                        "{testimonial.text}"
                                    </p>
                                    
                                    <div className="flex items-center">
                                        <div className="text-2xl mr-3">
                                            {testimonial.image}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                {testimonial.author}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {testimonial.company}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div className="bg-gray-900 rounded-3xl p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
                    
                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                Nos Certifications
                            </h3>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Des standards internationaux qui garantissent la qualité 
                                et la fiabilité de nos services.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {certifications.map((cert, index) => (
                                <div 
                                    key={index}
                                    className="text-center group hover:scale-110 transition-transform duration-300"
                                >
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                                        <cert.icon className={`text-2xl ${cert.color}`} />
                                    </div>
                                    <h4 className="text-white font-bold mb-1">
                                        {cert.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        {cert.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        {/* Trust Stats */}
                        <div className="mt-12 pt-12 border-t border-white/20">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-1">
                                        500+
                                    </div>
                                    <div className="text-gray-300 text-sm">
                                        Clients Satisfaits
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-secondary mb-1">
                                        10+
                                    </div>
                                    <div className="text-gray-300 text-sm">
                                        Années d'Expérience
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-accent mb-1">
                                        98%
                                    </div>
                                    <div className="text-gray-300 text-sm">
                                        Taux de Satisfaction
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-1">
                                        24/7
                                    </div>
                                    <div className="text-gray-300 text-sm">
                                        Support Technique
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
