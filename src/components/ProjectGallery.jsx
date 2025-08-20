import React, { useState } from 'react';
import { FaExpand, FaExternalLinkAlt, FaPlay, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

// Images pour les projets
import solarProjectImg from '../assets/images/solar-image.jpg';
import automationImg from '../assets/images/automation-1.jpg';
import networkImg from '../assets/images/network-1.jpeg';
import iotImg from '../assets/images/iot-monitoring.jpg';
import smartCityImg from '../assets/images/smart-city.jpg';
import universityImg from '../assets/images/university-campus.jpg';
import ruralSolarImg from '../assets/images/rural-solar.jpg';
import portIotImg from '../assets/images/port-surveillance.jpeg';

export default function ProjectGallery() {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'Tous les Projets', count: 12 },
        { id: 'solar', name: 'Énergie Solaire', count: 4 },
        { id: 'automation', name: 'Automatisation', count: 3 },
        { id: 'network', name: 'Réseaux', count: 3 },
        { id: 'iot', name: 'IoT', count: 2 }
    ];

    const projects = [
        {
            id: 1,
            title: "Centrale Solaire Agricole",
            category: "solar",
            image: solarProjectImg,
            location: "Douala",
            year: "2024",
            description: "Installation de 500kW pour irrigation automatisée",
            tags: ["Énergie", "Agriculture", "IoT"],
            featured: true
        },
        {
            id: 2,
            title: "Automatisation Industrielle",
            category: "automation",
            image: automationImg,
            location: "Yaoundé",
            year: "2024",
            description: "Système complet de gestion production",
            tags: ["Industrie", "Automation", "PLC"],
            featured: true
        },
        {
            id: 3,
            title: "Réseau Hospitalier",
            category: "network",
            image: networkImg,
            location: "Bafoussam",
            year: "2023",
            description: "Infrastructure réseau haute disponibilité",
            tags: ["Santé", "Réseau", "Sécurité"],
            featured: false
        },
        {
            id: 4,
            title: "Ferme Connectée",
            category: "iot",
            image: iotImg,
            location: "Bamenda",
            year: "2023",
            description: "Monitoring en temps réel des cultures",
            tags: ["Agriculture", "Capteurs", "LoRaWAN"],
            featured: true
        },
        {
            id: 5,
            title: "Éclairage Public Intelligent",
            category: "automation",
            image: smartCityImg,
            location: "Douala",
            year: "2023",
            description: "Gestion intelligente de l'éclairage urbain",
            tags: ["Smart City", "LED", "Capteurs"],
            featured: false
        },
        {
            id: 6,
            title: "Campus Universitaire Connecté",
            category: "network",
            image: universityImg,
            location: "Yaoundé",
            year: "2024",
            description: "WiFi haute performance pour 5000 étudiants",
            tags: ["Éducation", "WiFi", "Fibre"],
            featured: true
        },
        {
            id: 7,
            title: "Microgrid Rural",
            category: "solar",
            image: ruralSolarImg,
            location: "Maroua",
            year: "2023",
            description: "Électrification de village isolé",
            tags: ["Rural", "Microgrid", "Batteries"],
            featured: false
        },
        {
            id: 8,
            title: "Surveillance IoT Port",
            category: "iot",
            image: portIotImg,
            location: "Limbé",
            year: "2024",
            description: "Monitoring conteneurs et sécurité",
            tags: ["Logistique", "Caméras", "RFID"],
            featured: false
        }
    ];

    const filteredProjects = activeCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projets" className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                        <FaPlay className="mr-2" />
                        Portfolio
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Nos Réalisations
                        <span className="text-primary"> Récentes</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez comment nous transformons les idées en solutions concrètes 
                        à travers nos projets innovants au Cameroun et en Afrique Centrale.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                activeCategory === category.id
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary shadow-md'
                            }`}
                        >
                            {category.name}
                            <span className="ml-2 text-sm opacity-75">
                                ({category.count})
                            </span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.id}
                            className={`bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group ${
                                project.featured ? 'ring-2 ring-primary/20' : ''
                            }`}
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                        ⭐ Featured
                                    </div>
                                )}

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex space-x-3">
                                        <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300">
                                            <FaExpand className="text-sm" />
                                        </button>
                                        <button className="w-10 h-10 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors duration-300">
                                            <FaExternalLinkAlt className="text-sm" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <FaMapMarkerAlt className="mr-1" />
                                        {project.location}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <FaCalendarAlt className="mr-1" />
                                        {project.year}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">
                                50+
                            </div>
                            <div className="text-gray-600">
                                Projets Livrés
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-secondary mb-2">
                                10+
                            </div>
                            <div className="text-gray-600">
                                Villes Couvertes
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">
                                5MW+
                            </div>
                            <div className="text-gray-600">
                                Énergie Installée
                            </div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-2">
                                100%
                            </div>
                            <div className="text-gray-600">
                                Projets Réussis
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
