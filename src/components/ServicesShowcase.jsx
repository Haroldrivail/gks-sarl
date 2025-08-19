import React from 'react';
import { FaSolarPanel, FaWifi, FaLaptopCode, FaServer, FaShippingFast, FaHammer, FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router';

export default function ServicesShowcase() {
    const services = [
        {
            icon: FaSolarPanel,
            title: "Panneaux Solaires",
            description: "Solutions d'énergie renouvelable pour réduire vos coûts et votre empreinte carbone.",
            features: ["Installation complète", "Maintenance 24/7", "Garantie 25 ans"],
            color: "primary",
            image: "🌞"
        },
        {
            icon: FaWifi,
            title: "Télécommunications",
            description: "Infrastructure réseau moderne pour connecter votre entreprise au monde.",
            features: ["Fibre optique", "WiFi professionnel", "Support technique"],
            color: "secondary",
            image: "📡"
        },
        {
            icon: FaLaptopCode,
            title: "Marketing Digital",
            description: "Stratégies digitales pour booster votre présence en ligne et vos ventes.",
            features: ["SEO/SEA", "Réseaux sociaux", "Analytics"],
            color: "accent",
            image: "📱"
        },
        {
            icon: FaServer,
            title: "Hébergement Web",
            description: "Hébergement haute performance et sécurisé pour vos sites web.",
            features: ["99.9% uptime", "SSL gratuit", "Backup quotidien"],
            color: "primary",
            image: "☁️"
        },
        {
            icon: FaShippingFast,
            title: "Import-Export",
            description: "Services logistiques complets pour vos échanges commerciaux internationaux.",
            features: ["Douanes", "Transport", "Assurance"],
            color: "secondary",
            image: "🚢"
        },
        {
            icon: FaHammer,
            title: "BTP & Industrie",
            description: "Construction et solutions industrielles adaptées à vos besoins spécifiques.",
            features: ["Génie civil", "Équipements", "Supervision"],
            color: "accent",
            image: "🏗️"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
                        <span className="text-sm font-medium text-primary">Nos Solutions</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Des Services qui Font la 
                        <span className="text-primary"> Différence</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez notre gamme complète de services conçus pour propulser 
                        votre entreprise vers de nouveaux sommets de réussite.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            {/* Icon et Image */}
                            <div className="flex items-center justify-between mb-6">
                                <div className={`w-16 h-16 bg-${service.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className={`text-2xl text-${service.color}`} />
                                </div>
                                <div className="text-4xl">{service.image}</div>
                            </div>

                            {/* Contenu */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-600">
                                        <div className={`w-1.5 h-1.5 bg-${service.color} rounded-full mr-3`}></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <button className={`w-full flex items-center justify-center px-6 py-3 border-2 border-${service.color} text-${service.color} rounded-xl hover:bg-${service.color} hover:text-white transition-all duration-300 group font-medium cursor-pointer`}>
                                En savoir plus
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Prêt à Transformer Votre Entreprise ?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez 
                            comment nos solutions peuvent propulser votre succès.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <NavLink 
                                to="/services"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 hover:scale-105 transition-all duration-300"
                            >
                                Voir Tous nos Services
                            </NavLink>
                            <NavLink 
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                Demander un Devis
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
