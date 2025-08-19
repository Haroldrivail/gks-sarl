import React from 'react';
import { NavLink } from 'react-router';
import { FaSolarPanel, FaWifi, FaLaptopCode, FaServer, FaShippingFast, FaHammer, FaArrowRight, FaCheckCircle, FaRegLightbulb, FaCog } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: FaSolarPanel,
      title: "Énergie Solaire",
      description: "Solutions complètes d'énergie renouvelable pour particuliers et entreprises",
      features: ["Installation clé en main", "Maintenance préventive", "Monitoring 24/7", "Garantie 25 ans"],
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: FaWifi,
      title: "Télécommunications",
      description: "Infrastructure réseau et solutions de connectivité avancées",
      features: ["Fibre optique", "Réseaux WiFi", "Solutions IoT", "Support technique"],
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: FaLaptopCode,
      title: "Marketing Digital",
      description: "Stratégies digitales pour développer votre présence en ligne",
      features: ["Sites web modernes", "SEO/SEM", "Réseaux sociaux", "Analytics"],
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: FaServer,
      title: "Hébergement Web",
      description: "Solutions d'hébergement haute performance et sécurisées",
      features: ["Serveurs dédiés", "Cloud hosting", "Sauvegarde automatique", "SSL inclus"],
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: FaShippingFast,
      title: "Import-Export",
      description: "Services commerciaux internationaux et représentation",
      features: ["Sourcing produits", "Logistique", "Douanes", "Négociation"],
      color: "from-red-400 to-rose-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: FaHammer,
      title: "Prestations Techniques",
      description: "Services techniques spécialisés et maintenance industrielle",
      features: ["Automatisation", "Maintenance", "Formation", "Audit technique"],
      color: "from-gray-400 to-slate-500",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analyse de Besoins",
      description: "Étude approfondie de vos besoins et contraintes",
      icon: FaRegLightbulb
    },
    {
      step: "02", 
      title: "Conception Solution",
      description: "Élaboration d'une solution sur mesure",
      icon: FaCog
    },
    {
      step: "03",
      title: "Mise en Œuvre",
      description: "Déploiement professionnel de la solution",
      icon: FaHammer
    },
    {
      step: "04",
      title: "Suivi & Support",
      description: "Accompagnement continu et maintenance",
      icon: FaCheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
            <FaCog className="mr-2" />
            Nos Services
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Solutions Complètes pour
            <span className="text-primary"> Votre Réussite</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            De l'énergie solaire aux télécommunications, nous offrons des services 
            intégrés pour accompagner votre transformation digitale et énergétique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-300"
            >
              Demander un Devis
              <FaArrowRight className="ml-2" />
            </NavLink>
            <button className="cursor-pointer inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300">
              Voir nos Réalisations
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services conçus pour répondre 
              à tous vos besoins technologiques et commerciaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                {/* Service Header */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`text-2xl ${service.iconColor}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <NavLink 
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary hover:text-white text-gray-700 font-medium rounded-xl transition-all duration-300 group-hover:shadow-md"
                  >
                    En Savoir Plus
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Processus de Travail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  {/* Step Number */}
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl font-bold text-primary group-hover:text-white">
                      {step.step}
                    </span>
                  </div>
                  
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
                  )}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                  <step.icon className="text-gray-600 text-lg group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactez nos experts pour une consultation gratuite et découvrez 
            comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-300"
            >
              Consultation Gratuite
              <FaArrowRight className="ml-2" />
            </NavLink>
            <button className="inline-flex items-center px-8 py-4 border-2 border-secondary text-secondary cursor-pointer font-semibold rounded-xl hover:bg-secondary hover:text-white hover:bg-secondary transition-all duration-300">
              Télécharger notre Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
