import { useState } from 'react';
import Loader from '../components/Loader';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaBuilding, FaWhatsapp, FaLinkedin, FaTwitter, FaFacebook, FaArrowRight, FaCheckCircle, FaUser, FaCommentAlt, FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

export default function Contact() {

    const [isLoading, setIsLoading] = useState(true);
    useState(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for form submission
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: FaBuilding,
            title: "Entreprise",
            details: ["GAMMA KAPPA SOLUTIONS SARL", "Sigle : GKS SARL"],
            color: "text-primary"
        },
        {
            icon: FaMapMarkerAlt,
            title: "Adresse",
            details: ["Douala, Cameroun", "Quartier Bonapriso"],
            color: "text-secondary"
        },
        {
            icon: FaPhone,
            title: "Téléphone",
            details: ["(+237) 677 11 78 31", "Appels & WhatsApp"],
            color: "text-accent"
        },
        {
            icon: FaEnvelope,
            title: "Email",
            details: ["guykouo@yahoo.fr", "Contact professionnel"],
            color: "text-primary"
        },
        {
            icon: FaClock,
            title: "Horaires",
            details: ["Lun - Ven: 8h00 - 18h00", "Sam: 9h00 - 13h00"],
            color: "text-secondary"
        }
    ];

    const services = [
        "Énergie Solaire",
        "Télécommunications",
        "Marketing Digital",
        "Hébergement Web",
        "Import-Export",
        "Prestations Techniques",
        "Autre"
    ];

    const socialLinks = [
        { icon: FaWhatsapp, name: "WhatsApp", color: "text-green-500", hover: "hover:text-green-600" },
        { icon: FaLinkedin, name: "LinkedIn", color: "text-blue-600", hover: "hover:text-blue-700" },
        { icon: FaTwitter, name: "Twitter", color: "text-sky-500", hover: "hover:text-sky-600" },
        { icon: FaFacebook, name: "Facebook", color: "text-blue-500", hover: "hover:text-blue-600" }
    ];

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="min-h-screen bg-gray-50">
                        {/* Hero Section */}
                        <section className="relative py-20 bg-gray-900 overflow-hidden">
                            {/* Background Elements */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
                            <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
                                    <FaCommentAlt className="mr-2" />
                                    Contactez-nous
                                </div>
                                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                                    Parlons de Votre
                                    <span className="text-primary"> Projet</span>
                                </h1>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                                    Nous sommes à votre disposition pour répondre à toutes vos questions
                                    et vous accompagner dans la réalisation de vos projets.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="tel:+237677117831"
                                        className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 hover:scale-105 transition-all duration-300"
                                    >
                                        <FaPhone className="mr-2" />
                                        Appeler Maintenant
                                    </a>
                                    <a
                                        href="mailto:guykouo@yahoo.fr"
                                        className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                                    >
                                        <FaEnvelope className="mr-2" />
                                        Envoyer un Email
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Contact Information & Form */}
                        <section className="py-20">
                            <div className="max-w-7xl mx-auto px-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                    {/* Contact Information */}
                                    <div>
                                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
                                            Nos Coordonnées
                                        </h2>
                                        <p className="text-lg text-gray-600 mb-12">
                                            Nous sommes disponibles pour vous accompagner dans tous vos projets.
                                            N'hésitez pas à nous contacter par le moyen qui vous convient le mieux.
                                        </p>

                                        <div className="space-y-8">
                                            {contactInfo.map((info, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start group hover:scale-105 transition-transform duration-300"
                                                >
                                                    <div className={`flex-shrink-0 w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors duration-300`}>
                                                        <info.icon className={`text-xl ${info.color} group-hover:scale-110 transition-transform duration-300`} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                            {info.title}
                                                        </h3>
                                                        {info.details.map((detail, detailIndex) => (
                                                            <p key={detailIndex} className="text-gray-600">
                                                                {detail}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Social Links */}
                                        <div className="mt-12">
                                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                                Suivez-nous
                                            </h3>
                                            <div className="flex space-x-4">
                                                {socialLinks.map((social, index) => (
                                                    <a
                                                        key={index}
                                                        href="#"
                                                        className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center ${social.color} ${social.hover} hover:scale-110 transition-all duration-300`}
                                                        title={social.name}
                                                    >
                                                        <social.icon className="text-lg" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Form */}
                                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                        <div className="text-center mb-8">
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                                Demande de Contact
                                            </h3>
                                            <p className="text-gray-600">
                                                Remplissez ce formulaire et nous vous recontacterons sous 24h
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Nom complet <span className="text-red-500 font-bold">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                            placeholder="Votre nom complet"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Email <span className="text-red-500 font-bold">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                            placeholder="votre.email@exemple.com"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Téléphone
                                                    </label>
                                                    <div className="relative">
                                                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                            placeholder="+237 6XX XXX XXX"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Entreprise
                                                    </label>
                                                    <div className="relative">
                                                        <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                        <input
                                                            type="text"
                                                            name="company"
                                                            value={formData.company}
                                                            onChange={handleInputChange}
                                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                            placeholder="Nom de votre entreprise"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Service demandé
                                                </label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                                >
                                                    <option value="">Sélectionnez un service</option>
                                                    {services.map((service, index) => (
                                                        <option key={index} value={service}>
                                                            {service}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Message <span className="text-red-500 font-bold">*</span>
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    rows="5"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                                                    placeholder="Décrivez votre projet ou vos besoins..."
                                                    required
                                                ></textarea>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 hover:scale-105 transition-all duration-300 group"
                                            >
                                                Envoyer ma Demande
                                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                            </button>

                                            <div className="text-center text-sm text-gray-500">
                                                <FaCheckCircle className="inline mr-1 text-green-500" />
                                                Réponse garantie sous 24h
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Map Section (Placeholder) */}
                        <section className="py-20 bg-white">
                            <div className="max-w-7xl mx-auto px-6">
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                        Notre Localisation
                                    </h2>
                                    <p className="text-xl text-gray-600">
                                        Venez nous rendre visite dans nos bureaux à Douala
                                    </p>
                                </div>

                                <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                                    <div className="text-center">
                                        <FaMapMarkerAlt className="text-6xl text-primary mb-4 mx-auto" />
                                        <h3 className="text-2xl font-bold text-gray-700 mb-2">
                                            Carte Interactive
                                        </h3>
                                        <p className="text-gray-600">
                                            Douala, Quartier Bonapriso, Cameroun
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Contact */}
                        <section className="py-20 bg-gray-50">
                            <div className="max-w-4xl mx-auto px-6">
                                <div className="text-center mb-16">
                                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                                        <FaQuestionCircle className="mr-2" />
                                        FAQ
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                        Questions Fréquentes
                                    </h2>
                                    <p className="text-xl text-gray-600">
                                        Trouvez rapidement les réponses aux questions les plus courantes
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        {
                                            question: "Quel est votre délai de réponse ?",
                                            answer: "Nous nous engageons à répondre à toute demande sous 24h maximum, souvent bien plus rapidement. Pour les urgences, nous sommes joignables par téléphone et répondons immédiatement.",
                                            category: "Délais"
                                        },
                                        {
                                            question: "Proposez-vous des devis gratuits ?",
                                            answer: "Oui, tous nos devis sont gratuits et sans engagement. Nous étudions votre projet en détail et vous proposons une solution sur mesure avec un prix transparent. La consultation initiale est également gratuite.",
                                            category: "Tarifs"
                                        },
                                        {
                                            question: "Intervenez-vous dans toute l'Afrique Centrale ?",
                                            answer: "Nous intervenons principalement au Cameroun dans toutes les régions. Nous étudions aussi les projets dans les pays voisins (Tchad, Centrafrique, Gabon, Guinée Équatoriale) selon la nature et l'envergure du projet.",
                                            category: "Zone d'intervention"
                                        },
                                        {
                                            question: "Quels sont vos moyens de paiement ?",
                                            answer: "Nous acceptons les virements bancaires, Mobile Money (Orange Money, MTN Mobile Money), les espèces pour les petits montants, et les chèques d'entreprise. Des facilités de paiement peuvent être accordées selon le projet.",
                                            category: "Paiement"
                                        },
                                        {
                                            question: "Offrez-vous une garantie sur vos services ?",
                                            answer: "Oui, nous offrons une garantie sur tous nos services : 2 ans sur les installations électriques, 5 ans sur les panneaux solaires, 1 an sur les services informatiques, et un support technique continu pendant la durée de garantie.",
                                            category: "Garantie"
                                        },
                                        {
                                            question: "Avez-vous des certifications professionnelles ?",
                                            answer: "Nous possédons les certifications ISO 9001:2015 (Qualité), ISO 14001 (Environnement), OHSAS 18001 (Sécurité), ainsi que les certifications Cisco pour les réseaux et les agréments locaux pour l'électricité.",
                                            category: "Certifications"
                                        },
                                        {
                                            question: "Comment suivre l'avancement de mon projet ?",
                                            answer: "Nous mettons à votre disposition un chef de projet dédié, des rapports d'avancement hebdomadaires, un accès à notre plateforme de suivi en ligne, et des points de contrôle réguliers avec vous.",
                                            category: "Suivi"
                                        },
                                        {
                                            question: "Proposez-vous de la formation ?",
                                            answer: "Oui, nous proposons des formations sur mesure pour vos équipes : utilisation des équipements installés, maintenance de base, bonnes pratiques, et formation continue. Les formations peuvent être sur site ou dans nos locaux.",
                                            category: "Formation"
                                        }
                                    ].map((faq, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                                        >
                                            <button
                                                onClick={() => toggleFAQ(index)}
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-300 rounded-xl"
                                            >
                                                <div className="flex items-center flex-1">
                                                    <div className="flex items-center mr-4">
                                                        <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                                            {faq.category}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-gray-900">
                                                        {faq.question}
                                                    </h3>
                                                </div>
                                                <div className="flex-shrink-0 ml-4">
                                                    {activeFAQ === index ? (
                                                        <FaChevronUp className="text-primary text-lg transition-transform duration-300" />
                                                    ) : (
                                                        <FaChevronDown className="text-gray-400 text-lg transition-transform duration-300" />
                                                    )}
                                                </div>
                                            </button>

                                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}>
                                                <div className="px-6 pb-6">
                                                    <div className="border-t border-gray-100 pt-4">
                                                        <p className="text-gray-600 leading-relaxed">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Additional Help Section */}
                                <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <FaCommentAlt className="text-primary text-2xl" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            Vous ne trouvez pas votre réponse ?
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            Notre équipe est là pour répondre à toutes vos questions spécifiques.
                                            N'hésitez pas à nous contacter directement.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <a
                                                href="tel:+237677117831"
                                                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 hover:scale-105 transition-all duration-300"
                                            >
                                                <FaPhone className="mr-2" />
                                                Appeler un Expert
                                            </a>
                                            <a
                                                href="mailto:guykouo@yahoo.fr"
                                                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                                            >
                                                <FaEnvelope className="mr-2" />
                                                Poser une Question
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Contact Stats */}
                                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-primary mb-2">&lt; 2h</div>
                                        <div className="text-gray-600">Temps de réponse moyen</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                                        <div className="text-gray-600">Taux de satisfaction client</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                                        <div className="text-gray-600">Support technique disponible</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </>
            )}
        </>
    );
}
