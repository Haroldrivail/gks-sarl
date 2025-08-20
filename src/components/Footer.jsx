import { Link } from 'react-router';
import Logo from '../assets/logo.jpg'; // Assuming you have a logo image
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16 mt-16 relative overflow-hidden">
            {/* Effet de brillance en arrière-plan */}
            <div className="absolute inset-0 bg-primary/5 opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Section Entreprise */}
                    <div className="space-y-6">
                        <div className="group">
                            <div className="flex items-center mb-4">
                                <img src={Logo} alt="GKS SARL" width={80} className="transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <p className="text-sm font-semibold text-primary/90 mb-2">Gamma Kappa Solutions SARL</p>
                        </div>
                        <p className="leading-relaxed text-gray-300 text-sm">
                            Votre partenaire de confiance pour les solutions technologiques, 
                            télécommunications, et services diversifiés au Cameroun.
                        </p>
                        <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
                            <div className="text-xs text-gray-400 space-y-1">
                                <p><span className="text-primary font-medium">NIU:</span> M042517737194C</p>
                                <p><span className="text-primary font-medium">RCCM:</span> CM-DLA-02-2025/B-12/00567</p>
                                <p><span className="text-primary font-medium">Capital:</span> 900.000 FCFA</p>
                            </div>
                        </div>
                    </div>

                    {/* Section Services */}
                    <div className="space-y-6">
                        <h4 className="text-white text-lg font-semibold mb-6 relative">
                            <span className="text-primary">Nos Services</span>
                            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-primary rounded-full"></div>
                        </h4>
                        <ul className="list-none space-y-3">
                            <li className="text-gray-300 transition-all duration-300 hover:text-primary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    Panneaux Solaires
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                            <li className="text-gray-300 transition-all duration-300 hover:text-primary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    Télécommunications
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                            <li className="text-gray-300 transition-all duration-300 hover:text-primary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    Marketing Digital
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                            <li className="text-gray-300 transition-all duration-300 hover:text-primary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    Hébergement Web
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                            <li className="text-gray-300 transition-all duration-300 hover:text-primary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    Services Import-Export
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                            <li className="text-gray-300 transition-all duration-300 hover:text-primary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    BTP & Industrie
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Section Secteurs */}
                    <div className="space-y-6">
                        <h4 className="text-white text-lg font-semibold mb-6 relative">
                            <span className="text-secondary">Secteurs d'Activité</span>
                            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-secondary rounded-full"></div>
                        </h4>
                        <ul className="list-none space-y-3">
                            <li className="text-gray-300 transition-all duration-300 hover:text-secondary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    Commerce Général
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                            <li className="text-gray-300 transition-all duration-300 hover:text-secondary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    Agriculture & Élevage
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                            <li className="text-gray-300 transition-all duration-300 hover:text-secondary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    Transport
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                            <li className="text-gray-300 transition-all duration-300 hover:text-secondary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    Hôtellerie
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                            <li className="text-gray-300 transition-all duration-300 hover:text-secondary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    Transformation
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                            <li className="text-gray-300 transition-all duration-300 hover:text-secondary hover:translate-x-2 cursor-pointer group">
                                <span className="relative">
                                    Représentation Commerciale
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Section Contact */}
                    <div className="space-y-6">
                        <h4 className="text-white text-lg font-semibold mb-6 relative">
                            <span className="text-accent">Contact</span>
                            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent rounded-full"></div>
                        </h4>
                        <div className="space-y-4">
                            <a 
                                href="https://maps.google.com/?q=Douala,République du Cameroun" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-300 group hover:text-white transition-all duration-300 hover:translate-x-1 no-underline"
                            >
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/40 transition-all duration-300">
                                    <FaMapMarkerAlt className="text-primary group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span>Douala, République du Cameroun</span>
                            </a>
                            <a 
                                href="tel:+237677117831"
                                className="flex items-center text-gray-300 group hover:text-white transition-all duration-300 hover:translate-x-1 no-underline"
                            >
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/40 transition-all duration-300">
                                    <FaPhone className="text-primary group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span>(+237) 677 11 78 31</span>
                            </a>
                            <a 
                                href="mailto:guykouo@yahoo.fr"
                                className="flex items-center text-gray-300 group hover:text-white transition-all duration-300 hover:translate-x-1 no-underline"
                            >
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/40 transition-all duration-300">
                                    <FaEnvelope className="text-primary group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <span>guykouo@yahoo.fr</span>
                            </a>
                        </div>
                        
                        {/* Réseaux sociaux */}
                        <div className="flex gap-4 mt-8">
                            <a 
                                href="#" 
                                aria-label="LinkedIn"
                                className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl no-underline transition-all duration-300 hover:bg-secondary hover:scale-110 hover:rotate-3 hover:shadow-lg group"
                            >
                                <FaLinkedin className="group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a 
                                href="#" 
                                aria-label="Facebook"
                                className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl no-underline transition-all duration-300 hover:bg-secondary hover:scale-110 hover:rotate-3 hover:shadow-lg group"
                            >
                                <FaFacebook className="group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a 
                                href="#" 
                                aria-label="Twitter"
                                className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-xl no-underline transition-all duration-300 hover:bg-secondary hover:scale-110 hover:rotate-3 hover:shadow-lg group"
                            >
                                <FaTwitter className="group-hover:scale-110 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation rapide */}
                <div className="border-t border-primary/30 pt-10 mb-10">
                    <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm">
                        <nav>
                            <ul className="flex justify-center gap-8 list-none flex-wrap">
                                <li>
                                    <Link 
                                        to="/" 
                                        className="text-gray-300 no-underline transition-all duration-300 hover:text-primary hover:scale-105 font-medium px-4 py-2 rounded-lg hover:bg-primary/10 group"
                                    >
                                        <span className="relative">
                                            Accueil
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/services" 
                                        className="text-gray-300 no-underline transition-all duration-300 hover:text-primary hover:scale-105 font-medium px-4 py-2 rounded-lg hover:bg-primary/10 group"
                                    >
                                        <span className="relative">
                                            Services
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/sectors" 
                                        className="text-gray-300 no-underline transition-all duration-300 hover:text-primary hover:scale-105 font-medium px-4 py-2 rounded-lg hover:bg-primary/10 group"
                                    >
                                        <span className="relative">
                                            Secteurs
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/contact" 
                                        className="text-gray-300 no-underline transition-all duration-300 hover:text-primary hover:scale-105 font-medium px-4 py-2 rounded-lg hover:bg-primary/10 group"
                                    >
                                        <span className="relative">
                                            Contact
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center border-t border-primary/20 pt-8">
                    <div className="bg-gray-800/30 rounded-xl p-6 backdrop-blur-sm">
                        <p className="mb-3 text-gray-300 font-medium">
                            &copy; {new Date().getFullYear()} <span className="text-primary font-bold">GKS SARL - Gamma Kappa Solutions</span>. Tous droits réservés.
                        </p>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            <span className="text-primary/80">RCCM:</span> CM-DLA-02-2025/B-12/00567 du 30/04/2025 | <span className="text-primary/80">NIU:</span> M042517737194C
                        </p>
                        <div className="mt-4 flex justify-center">
                            <div className="w-16 h-0.5 bg-primary rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}