import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { useSpring, useInView, animated } from '@react-spring/web';
import Loader from '../components/Loader';
import ServiceIllustration from '../components/ServiceIllustration';
import { NavLink } from 'react-router';
import { FaSolarPanel, FaWifi, FaLaptopCode, FaServer, FaShippingFast, FaHammer, FaArrowRight, FaCheckCircle, FaRegLightbulb, FaCog } from 'react-icons/fa';

// Import des images du dossier assets
import datacenterTeamImg from '../assets/images/data-center-team.jpg';
import serverTeamImg from '../assets/images/export-import.jpeg';
import techTeamImg from '../assets/images/tech-team.jpg';
import solarImg from '../assets/images/solar-image.jpg';
import digitalImg from '../assets/images/digital-image.jpg';
import networkImg from '../assets/images/networking-image.jpg';

// Image d'arrière-plan pour la section hero
import servicesBgImg from '../assets/images/business-growth.jpg';

export default function Services() {
  const [isLoading, setIsLoading] = useState(true);

  // Composant pour animer les cartes de services
  const AnimatedServiceCard = ({ service, index }) => {
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true
    });

    const cardAnimation = useSpring({
      from: {
        opacity: 0,
        transform: 'translateY(80px) rotateX(15deg)',
        scale: 0.9
      },
      to: {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px) rotateX(0deg)' : 'translateY(80px) rotateX(15deg)',
        scale: inView ? 1 : 0.9
      },
      config: { tension: 200, friction: 25 },
      delay: index * 200
    });

    const headerAnimation = useSpring({
      from: { width: '0%' },
      to: { width: inView ? '100%' : '0%' },
      config: { tension: 150, friction: 20 },
      delay: index * 200 + 300
    });

    return (
      <animated.div
        ref={ref}
        style={cardAnimation}
        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
      >
        {/* Service Header */}
        <animated.div
          style={headerAnimation}
          className={`h-2 bg-gradient-to-r ${service.color}`}
        ></animated.div>

        {/* Image principale du service */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay avec gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors duration-300"></div>

          {/* Icône flottante */}
          <div
            className={`absolute top-4 right-4 w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
          >
            <service.icon className={`text-xl ${service.iconColor}`} />
          </div>
        </div>

        {/* Contenu */}
        <div className="p-8">
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
        </div>
      </animated.div>
    );
  };

  useState(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: FaSolarPanel,
      title: "Énergie Solaire",
      description: "Solutions complètes d'énergie renouvelable pour particuliers et entreprises",
      features: ["Installation clé en main", "Maintenance préventive", "Monitoring 24/7", "Garantie 25 ans"],
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      illustration: "solar",
      image: solarImg
    },
    {
      icon: FaWifi,
      title: "Télécommunications",
      description: "Infrastructure réseau et solutions de connectivité avancées",
      features: ["Fibre optique", "Réseaux WiFi", "Solutions IoT", "Support technique"],
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      illustration: "telecom",
      image: networkImg
    },
    {
      icon: FaLaptopCode,
      title: "Marketing Digital",
      description: "Stratégies digitales pour développer votre présence en ligne",
      features: ["Sites web modernes", "SEO/SEM", "Réseaux sociaux", "Analytics"],
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      illustration: "digital",
      image: digitalImg
    },
    {
      icon: FaServer,
      title: "Hébergement Web",
      description: "Solutions d'hébergement haute performance et sécurisées",
      features: ["Serveurs dédiés", "Cloud hosting", "Sauvegarde automatique", "SSL inclus"],
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      illustration: "hosting",
      image: datacenterTeamImg
    },
    {
      icon: FaShippingFast,
      title: "Import-Export",
      description: "Services commerciaux internationaux et représentation",
      features: ["Sourcing produits", "Logistique", "Douanes", "Négociation"],
      color: "from-red-400 to-rose-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      illustration: "import",
      image: serverTeamImg
    },
    {
      icon: FaHammer,
      title: "Prestations Techniques",
      description: "Services techniques spécialisés et maintenance industrielle",
      features: ["Automatisation", "Maintenance", "Formation", "Audit technique"],
      color: "from-gray-400 to-slate-500",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
      illustration: "technical",
      image: techTeamImg
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="min-h-screen bg-gray-50">
            {/* Hero Section avec Illustration */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img
                  src={servicesBgImg}
                  alt="Solutions business et croissance"
                  className="w-full h-full object-cover opacity-15"
                />
                <div className="absolute inset-0 bg-gray-900/75"></div>
              </div>

              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-green-500/10 to-blue-500/20"></div>
              <div className="absolute top-10 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Contenu texte */}
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 rounded-full text-amber-400 font-medium mb-6">
                      <FaCog className="mr-2" />
                      Nos Services
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                      Solutions Complètes pour
                      <span className="text-amber-400"> Votre Réussite</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8">
                      De l'énergie solaire aux télécommunications, nous offrons des services
                      intégrés pour accompagner votre transformation digitale et énergétique.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <NavLink
                        to="/contact"
                        className="inline-flex items-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-300"
                      >
                        Demander un Devis
                        <FaArrowRight className="ml-2" />
                      </NavLink>
                      <button
                        onClick={() => {
                          // Navigation directe avec ancrage - méthode la plus fiable
                          window.location.href = '/#projets';
                        }}
                        className="cursor-pointer inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                      >
                        Voir nos Réalisations
                      </button>
                    </div>
                  </div>

                  {/* Illustration côté droit */}
                  <div className="relative">
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                      <ServiceIllustration
                        type="business"
                        className="w-full h-80 object-cover rounded-2xl"
                        fallbackIcon={<div className="w-full h-80 bg-gradient-to-br from-amber-500/20 to-green-500/20 rounded-2xl flex items-center justify-center">
                          <span className="text-6xl text-white/60">💼</span>
                        </div>}
                      />

                      {/* Éléments flottants */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500/20 rounded-2xl backdrop-blur-sm border border-amber-500/30 flex items-center justify-center">
                        <FaSolarPanel className="text-amber-500 text-2xl" />
                      </div>

                      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500/20 rounded-2xl backdrop-blur-sm border border-green-500/30 flex items-center justify-center">
                        <FaWifi className="text-green-500 text-2xl" />
                      </div>
                    </div>
                  </div>
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
                      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
                    >
                      {/* Service Header */}
                      <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                      {/* Image principale du service */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Overlay avec gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors duration-300"></div>

                        {/* Icône flottante */}
                        <div
                          className={`absolute top-4 right-4 w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center shadow-lg border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                        >
                          <service.icon className={`text-lg ${service.iconColor}`} />
                        </div>

                        {/* Illustration décorative en overlay */}
                        <div className="absolute bottom-4 left-4 w-16 h-16 opacity-80">
                          <ServiceIllustration
                            type={service.illustration}
                            className="w-full h-full object-contain"
                            fallbackIcon={<div className={`w-full h-full ${service.bgColor} rounded-lg flex items-center justify-center`}>
                              <service.icon className={`text-xl ${service.iconColor}`} />
                            </div>}
                          />
                        </div>
                      </div>

                      <div className="p-8">
                        {/* Content */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
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
                    <div
                      key={index}
                      className="text-center group hover:scale-105 transition-all duration-300"
                    >
                      <div className="relative">
                        {/* Step Number */}
                        <div
                          className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300"
                        >
                          <span className="text-2xl font-bold text-amber-600 group-hover:text-white">
                            {step.step}
                          </span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 group-hover:rotate-12 transition-all duration-300">
                        <step.icon className="text-gray-600 text-lg group-hover:text-amber-600 transition-colors duration-300" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-green-500/10"></div>

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
                    className="inline-flex items-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-300"
                  >
                    Consultation Gratuite
                    <FaArrowRight className="ml-2" />
                  </NavLink>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}
