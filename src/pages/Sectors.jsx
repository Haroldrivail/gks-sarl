import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Loader from '../components/Loader';
import { NavLink } from 'react-router';
import { FaStore, FaSeedling, FaTruck, FaHotel, FaCogs, FaHandshake, FaArrowRight, FaCheckCircle, FaUsers, FaTrophy, FaGlobe, FaChartLine } from 'react-icons/fa';
import usePreloadResources from '../hooks/usePreloadResources';

// Image d'arrière-plan pour la section hero
import sectorsBgImg from '../assets/images/team-collaboration.jpg';

export default function Sectors() {
  const { progress, isComplete } = usePreloadResources();
  const [fadeOut, setFadeOut] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    if (isComplete || progress >= 100) {
      const t1 = setTimeout(() => setFadeOut(true), 250);
      const t2 = setTimeout(() => setHideLoader(true), 900);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [isComplete, progress]);

  const sectors = [
    {
      icon: FaStore,
      title: "Commerce Général",
      description: "Vente de matériels électroniques, équipements divers et solutions commerciales",
      activities: ["Matériels électroniques", "Équipements techniques", "Solutions B2B", "Distribution"],
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      stats: { projects: "50+", clients: "200+", satisfaction: "98%" }
    },
    {
      icon: FaSeedling,
      title: "Agriculture & Élevage",
      description: "Solutions pour le développement agricole et l'élevage moderne",
      activities: ["Agriculture moderne", "Élevage intelligent", "Transformation agricole", "IoT agricole"],
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      stats: { projects: "40+", clients: "150+", satisfaction: "96%" }
    },
    {
      icon: FaTruck,
      title: "Transport & Logistique",
      description: "Services de transport et logistique pour vos besoins",
      activities: ["Transport de marchandises", "Logistique avancée", "Distribution", "Tracking GPS"],
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      stats: { projects: "30+", clients: "80+", satisfaction: "97%" }
    },
    {
      icon: FaHotel,
      title: "Hôtellerie & Tourisme",
      description: "Services et solutions pour le secteur hôtelier",
      activities: ["Gestion hôtelière", "Équipements modernes", "Services associés", "Automatisation"],
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      stats: { projects: "25+", clients: "60+", satisfaction: "99%" }
    },
    {
      icon: FaCogs,
      title: "Industrie & BTP",
      description: "Solutions pour le secteur industriel et du BTP",
      activities: ["Automatisation industrielle", "BTP moderne", "Maintenance", "Consulting technique"],
      color: "from-gray-400 to-slate-500",
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
      stats: { projects: "35+", clients: "90+", satisfaction: "95%" }
    },
    {
      icon: FaHandshake,
      title: "Services aux Entreprises",
      description: "Prestations de services pour les entreprises et institutions",
      activities: ["Consulting", "Formation", "Support technique", "Partenariats"],
      color: "from-red-400 to-rose-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      stats: { projects: "60+", clients: "250+", satisfaction: "98%" }
    }
  ];

  const achievements = [
    {
      icon: FaUsers,
      title: "Clients Diversifiés",
      description: "Plus de 800 clients dans 6 secteurs d'activité",
      number: "800+"
    },
    {
      icon: FaTrophy,
      title: "Projets Réussis",
      description: "240 projets livrés avec succès",
      number: "240+"
    },
    {
      icon: FaGlobe,
      title: "Zones Couvertes",
      description: "Présence dans 15 villes du Cameroun",
      number: "15"
    },
    {
      icon: FaChartLine,
      title: "Croissance Annuelle",
      description: "Croissance moyenne de 35% par an",
      number: "35%"
    }
  ];

  const testimonials = [
    {
      sector: "Agriculture",
      text: "GKS SARL a révolutionné notre exploitation avec leurs solutions IoT. Nos rendements ont augmenté de 40%.",
      author: "Jean-Paul Mbida",
      company: "Ferme Moderne Douala",
      image: "🌾"
    },
    {
      sector: "Industrie",
      text: "L'automatisation de notre chaîne de production nous a fait économiser 50% sur les coûts opérationnels.",
      author: "Marie Fotso",
      company: "Industries Camerounaises",
      image: "🏭"
    },
    {
      sector: "Hôtellerie",
      text: "Leur système de gestion intelligent a amélioré notre efficacité et la satisfaction de nos clients.",
      author: "Dr. Paul Nkomo",
      company: "Hôtel Prestige Yaoundé",
      image: "🏨"
    }
  ];

  return (
    <>
      {!hideLoader && (
        <div className={(fadeOut ? 'opacity-0' : 'opacity-100') + ' transition-opacity duration-500'}>
          <Loader progress={progress} />
        </div>
      )}
      {hideLoader && (
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative py-20 bg-gray-900 overflow-hidden"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src={sectorsBgImg}
                alt="Équipe collaborative multisectorielle"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gray-900/70"></div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
            <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
                <FaGlobe className="mr-2" />
                Nos Secteurs d'Activité
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Expertise Sectorielle
                <span className="text-primary"> Multi-Domaines</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Nous accompagnons les entreprises de tous secteurs avec des solutions
                sur mesure adaptées aux spécificités de chaque domaine d'activité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Voir nos Services
                </NavLink>
              </div>
            </div>
          </motion.section>

          {/* Sectors Grid */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Nos Domaines d'Intervention
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Une expertise reconnue dans 6 secteurs clés de l'économie camerounaise
                  avec des solutions innovantes et performantes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sectors.map((sector, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
                  >
                    {/* Sector Header */}
                    <div className={`h-2 bg-gradient-to-r ${sector.color}`}></div>

                    <div className="p-8">
                      {/* Icon */}
                      <div className={`w-16 h-16 ${sector.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <sector.icon className={`text-2xl ${sector.iconColor}`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                        {sector.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {sector.description}
                      </p>

                      {/* Activities */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 mb-3">Nos interventions :</h4>
                        <ul className="space-y-2">
                          {sector.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="flex items-center text-sm text-gray-600">
                              <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary">
                            {sector.stats.projects}
                          </div>
                          <div className="text-xs text-gray-500">Projets</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-secondary">
                            {sector.stats.clients}
                          </div>
                          <div className="text-xs text-gray-500">Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-accent">
                            {sector.stats.satisfaction}
                          </div>
                          <div className="text-xs text-gray-500">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-20 bg-white"
          >
            <div className="max-w-7xl mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Nos Réalisations par Secteur
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Des chiffres qui témoignent de notre expertise et de la confiance
                  que nous accordent nos clients dans tous les secteurs.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <achievement.icon className="text-3xl text-primary group-hover:text-white" />
                    </div>

                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {achievement.number}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {achievement.title}
                    </h3>

                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Testimonials by Sector */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-20 bg-gray-50"
          >
            <div className="max-w-7xl mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Témoignages par Secteur
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Découvrez ce que nos clients disent de nos interventions
                  dans leurs secteurs d'activité respectifs.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + 0.3 
                      }}
                      className="text-center mb-6"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.2 + 0.4,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="text-4xl mb-4"
                      >
                        {testimonial.image}
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + 0.5 
                        }}
                        className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm"
                      >
                        {testimonial.sector}
                      </motion.div>
                    </motion.div>

                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.2 + 0.6 
                      }}
                      className="text-gray-600 mb-6 italic text-center"
                    >
                      "{testimonial.text}"
                    </motion.p>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + 0.7 
                      }}
                      className="text-center"
                    >
                      <div className="font-semibold text-gray-900 mb-1">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.company}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <section className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Votre Secteur Mérite une Expertise Dédiée
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Quel que soit votre domaine d'activité, nous avons l'expertise
                et les solutions pour faire croître votre entreprise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-300"
                >
                  Consultation Sectorielle
                  <FaArrowRight className="ml-2" />
                </NavLink>
                <NavLink
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-xl hover:bg-secondary hover:text-white hover:bg-secondary transition-all duration-300"
                >
                  Découvrir nos Services
                </NavLink>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}