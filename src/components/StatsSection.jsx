import React from 'react';
import { FaUsers, FaProjectDiagram, FaAward, FaClock, FaGlobe, FaHandshake } from 'react-icons/fa';

export default function StatsSection() {
    const stats = [
        {
            icon: FaUsers,
            number: "500+",
            label: "Clients Satisfaits",
            description: "Entreprises qui nous font confiance",
            color: "primary"
        },
        {
            icon: FaProjectDiagram,
            number: "250+",
            label: "Projets Réalisés",
            description: "Solutions déployées avec succès",
            color: "secondary"
        },
        {
            icon: FaAward,
            number: "99.8%",
            label: "Taux de Satisfaction",
            description: "Clients recommandent nos services",
            color: "accent"
        },
        {
            icon: FaClock,
            number: "24/7",
            label: "Support Disponible",
            description: "Assistance technique continue",
            color: "primary"
        },
        {
            icon: FaGlobe,
            number: "15+",
            label: "Pays Couverts",
            description: "Présence internationale",
            color: "secondary"
        },
        {
            icon: FaHandshake,
            number: "5+",
            label: "Années d'Expérience",
            description: "Expertise reconnue",
            color: "accent"
        }
    ];

    const achievements = [
        {
            title: "Certification ISO 9001",
            description: "Qualité garantie dans tous nos processus",
            icon: "🏆"
        },
        {
            title: "Partenaire Orange Business",
            description: "Solutions télécoms certifiées",
            icon: "🤝"
        },
        {
            title: "Expert en Énergies Renouvelables",
            description: "Installations solaires certifiées",
            icon: "🌱"
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
                        <span className="text-sm font-medium text-secondary">Nos Performances</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Des Résultats qui Parlent
                        <span className="text-secondary"> d'Eux-Mêmes</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez les chiffres qui témoignent de notre engagement 
                        et de la confiance que nos clients nous accordent.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div 
                            key={index}
                            className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-100"
                        >
                            <div className={`w-20 h-20 bg-${stat.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className={`text-3xl text-${stat.color}`} />
                            </div>
                            <div className={`text-4xl lg:text-5xl font-bold text-${stat.color} mb-2`}>
                                {stat.number}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {stat.label}
                            </h3>
                            <p className="text-gray-600">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Achievements Section */}
                <div className="bg-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                                Nos <span className="text-primary">Certifications</span> & 
                                <span className="text-secondary"> Partenariats</span>
                            </h3>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                La reconnaissance de notre expertise par les leaders du marché
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {achievements.map((achievement, index) => (
                                <div 
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                                >
                                    <div className="text-4xl mb-4">{achievement.icon}</div>
                                    <h4 className="text-lg font-bold mb-2 text-primary">
                                        {achievement.title}
                                    </h4>
                                    <p className="text-gray-300">
                                        {achievement.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-12">
                            <div className="inline-flex items-center px-6 py-3 bg-primary/20 rounded-full border border-primary/30">
                                <span className="text-primary font-medium">
                                    ✨ Rejoignez nos clients satisfaits dès aujourd'hui !
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
