import React from 'react';
import { FaStore, FaLeaf, FaTruck, FaHotel, FaCogs, FaHandshake, FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router';

// Image d'arrière-plan pour la section secteurs
import sectorsShowcaseBgImg from '../assets/images/smart-city.jpg';

export default function SectorsShowcase() {
    const sectors = [
        {
            icon: FaStore,
            title: "Commerce Général",
            description: "Solutions complètes pour le commerce de détail et de gros",
            benefits: ["Gestion des stocks", "Systèmes de paiement", "E-commerce"],
            image: "🏪",
            color: "primary"
        },
        {
            icon: FaLeaf,
            title: "Agriculture & Élevage",
            description: "Technologies modernes pour l'agriculture durable",
            benefits: ["Irrigation automatique", "Monitoring IoT", "Solutions bio"],
            image: "🌾",
            color: "secondary"
        },
        {
            icon: FaTruck,
            title: "Transport & Logistique",
            description: "Optimisation des chaînes de transport et livraison",
            benefits: ["Géolocalisation", "Gestion de flotte", "Traçabilité"],
            image: "🚛",
            color: "accent"
        },
        {
            icon: FaHotel,
            title: "Hôtellerie & Tourism",
            description: "Solutions digitales pour l'industrie touristique",
            benefits: ["Réservations en ligne", "Check-in digital", "CRM clients"],
            image: "🏨",
            color: "primary"
        },
        {
            icon: FaCogs,
            title: "Transformation & Industrie",
            description: "Automatisation et modernisation industrielle",
            benefits: ["Industrie 4.0", "Contrôle qualité", "Maintenance prédictive"],
            image: "⚙️",
            color: "secondary"
        },
        {
            icon: FaHandshake,
            title: "Représentation Commerciale",
            description: "Partenariats stratégiques et développement commercial",
            benefits: ["Réseaux d'affaires", "Négociation", "Développement"],
            image: "🤝",
            color: "accent"
        }
    ];

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src={sectorsShowcaseBgImg}
                    alt="Smart city et secteurs technologiques"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
                        <span className="text-sm font-medium text-accent">Nos Secteurs</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Une Expertise
                        <span className="text-accent"> Multisectorielle</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nous intervenons dans des secteurs variés avec une approche 
                        personnalisée pour chaque domaine d'activité.
                    </p>
                </div>

                {/* Sectors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {sectors.map((sector, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Header Card */}
                            <div className={`bg-${sector.color}/5 p-6 border-b border-${sector.color}/10`}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-14 h-14 bg-${sector.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <sector.icon className={`text-xl text-${sector.color}`} />
                                    </div>
                                    <div className="text-3xl">{sector.image}</div>
                                </div>
                                <h3 className={`text-lg font-bold text-gray-900 group-hover:text-${sector.color} transition-colors duration-300`}>
                                    {sector.title}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {sector.description}
                                </p>

                                {/* Benefits */}
                                <div className="space-y-2 mb-6">
                                    {sector.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center text-sm">
                                            <div className={`w-1.5 h-1.5 bg-${sector.color} rounded-full mr-3`}></div>
                                            <span className="text-gray-600">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Success Stories */}
                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            Histoires de <span className="text-primary">Réussite</span>
                        </h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Success Story 1 */}
                        <div className="text-center p-6 bg-primary/5 rounded-xl">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📈</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">+250% de Croissance</h4>
                            <p className="text-gray-600">Une entreprise agricole a multiplié sa production grâce à nos solutions IoT</p>
                        </div>

                        {/* Success Story 2 */}
                        <div className="text-center p-6 bg-secondary/5 rounded-xl">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">70% d'Économies</h4>
                            <p className="text-gray-600">Un hôtel a réduit ses coûts énergétiques avec nos panneaux solaires</p>
                        </div>

                        {/* Success Story 3 */}
                        <div className="text-center p-6 bg-accent/5 rounded-xl">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Expansion Internationale</h4>
                            <p className="text-gray-600">Une PME a étendu ses activités grâce à notre accompagnement</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <NavLink 
                            to="/sectors"
                            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-600 cursor-pointer transition-all duration-300"
                        >
                            Explorer Tous nos Secteurs
                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
