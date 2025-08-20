import React from 'react';
import { FaRocket, FaLightbulb, FaChartLine, FaUsers, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

// Image d'arrière-plan pour la newsletter
import newsletterBgImg from '../assets/images/network-infrastructure.jpg';

export default function NewsletterSection() {
    const benefits = [
        {
            icon: FaLightbulb,
            title: "Conseils d'Experts",
            description: "Astuces et stratégies validées par nos spécialistes"
        },
        {
            icon: FaChartLine,
            title: "Tendances du Marché",
            description: "Les dernières innovations technologiques"
        },
        {
            icon: FaRocket,
            title: "Études de Cas",
            description: "Découvrez nos succès et retours d'expérience"
        },
        {
            icon: FaUsers,
            title: "Communauté",
            description: "Rejoignez un réseau de professionnels"
        }
    ];

    const stats = [
        { value: "5,000+", label: "Abonnés actifs" },
        { value: "98%", label: "Taux d'ouverture" },
        { value: "2x/mois", label: "Newsletters" },
        { value: "0", label: "Spam garanti" }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src={newsletterBgImg}
                    alt="Infrastructure réseau et connectivité"
                    className="w-full h-full object-cover opacity-5"
                />
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                        <FaPaperPlane className="mr-2" />
                        Newsletter Exclusive
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Restez à la Pointe de
                        <span className="text-primary"> l'Innovation</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Recevez directement dans votre boîte mail nos dernières actualités, 
                        conseils d'experts et études de cas exclusives. 100% gratuit, 0% spam.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Benefits */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">
                                Ce que vous recevrez :
                            </h3>
                            
                            <div className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-start group hover:scale-105 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                                            <benefit.icon className="text-primary text-lg" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-1">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-gray-600">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-2xl font-bold text-primary mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Subscription Form */}
                    <div className="relative">
                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <FaPaperPlane className="text-primary text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Inscription Gratuite
                                </h3>
                                <p className="text-gray-600">
                                    Rejoignez notre communauté d'innovateurs
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Prénom *
                                    </label>
                                    <input 
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                        placeholder="Votre prénom"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input 
                                        type="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                        placeholder="votre.email@exemple.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Secteur d'activité
                                    </label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                                        <option value="">Sélectionnez votre secteur</option>
                                        <option value="agriculture">Agriculture</option>
                                        <option value="sante">Santé</option>
                                        <option value="education">Éducation</option>
                                        <option value="industrie">Industrie</option>
                                        <option value="services">Services</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>

                                <div className="flex items-start">
                                    <input 
                                        type="checkbox" 
                                        id="consent"
                                        className="mt-1 mr-3 text-primary focus:ring-primary"
                                    />
                                    <label htmlFor="consent" className="text-sm text-gray-600">
                                        J'accepte de recevoir les newsletters de GKS SARL et 
                                        confirme avoir pris connaissance de la politique de confidentialité.
                                    </label>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-primary-600 cursor-pointer transition-all duration-300 flex items-center justify-center group"
                                >
                                    S'abonner Maintenant
                                    <FaCheckCircle className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
                                </button>
                            </form>

                            {/* Trust Indicators */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <FaCheckCircle className="text-green-500 mr-1" />
                                        Désabonnement facile
                                    </div>
                                    <div className="flex items-center">
                                        <FaCheckCircle className="text-green-500 mr-1" />
                                        Données sécurisées
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium transform rotate-12 shadow-lg">
                            Offre Limitée! 🎁
                        </div>
                    </div>
                </div>

                {/* Bottom Testimonial */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-2xl mx-auto">
                        <p className="text-gray-600 italic mb-4">
                            "Grâce à la newsletter de GKS SARL, j'ai pu optimiser mes installations 
                            solaires et augmenter ma rentabilité de 30%. Leurs conseils sont précieux!"
                        </p>
                        <div className="flex items-center justify-center">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">M.D</span>
                            </div>
                            <div className="text-left">
                                <div className="font-semibold text-gray-900">Marcel Dupont</div>
                                <div className="text-sm text-gray-600">Agriculteur, Douala</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
