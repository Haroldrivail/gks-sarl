import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, Link } from 'react-router';
import Logo from '../assets/logo.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    // Fonction pour naviguer et fermer le menu mobile
    const handleNavigation = (path) => {
        navigate(path);
        setOpen(false);
    };

    const toggleDrawer = () => {
        setOpen(!open);
    };

    // Effet pour détecter le scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`top-0 left-0 right-0 transition-all duration-500 ease-in-out z-50 bg-white/30 ${scrolled ? 'fixed backdrop-blur-3xl shadow-2xl mt-2 py-2 px-5 mx-auto rounded-full max-w-5xl' : 'backdrop-blur-sm w-full'}`}>
            {/* Barre de contact moderne - visible seulement quand pas scrollé */}
            <div className={`bg-secondary text-sm overflow-hidden relative hidden md:block ${scrolled ? ' max-h-0' : 'max-h-16 opacity-100'}`}>
                <div className="max-w-7xl mx-auto px-6 py-2">
                    <div className="flex justify-evenly gap-10 flex-wrap items-center">
                        <a 
                            href="tel:+237677117831"
                            className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300 no-underline"
                        >
                            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                                <FaPhone className="text-sm text-white" />
                            </div>
                            <span className="font-medium text-white">(+237) 677 11 78 31</span>
                        </a>
                        <a 
                            href="mailto:guykouo@yahoo.fr"
                            className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300 no-underline"
                        >
                            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                                <FaEnvelope className="text-sm text-white" />
                            </div>
                            <span className="font-medium text-white">guykouo@yahoo.fr</span>
                        </a>
                        <a 
                            href="https://maps.google.com/?q=Douala,Cameroun" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300 no-underline"
                        >
                            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                                <FaMapMarkerAlt className="text-sm text-white" />
                            </div>
                            <span className="font-medium text-white">Douala, Cameroun</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Header principal moderne */}
            <div className={` py-2 ${scrolled ? ' bg-transparent' : 'bg-white/30'}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center">
                        {/* Logo GKS SARL moderne */}
                        <div className="flex-shrink-0 group">
                            <NavLink
                                to="/"
                                className="no-underline text-inherit block"
                                onClick={() => handleNavigation('/')}
                            >
                                <div className="flex flex-col relative">
                                    {/* Container du logo avec effet hover */}
                                    <div className={`flex items-center ${scrolled ? 'justify-start' : 'justify-center'}`}>
                                        <img src={Logo} alt="GKS SARL" width={60} />
                                    </div>
                                    <span className={`text-xs font-semibold text-secondary bg-clip-text tracking-wider block transition-all duration-500 mt-1 ${scrolled ? 'hidden' : 'max-h-6'}`}>
                                        Gamma Kappa Solutions
                                    </span>
                                </div>
                            </NavLink>
                        </div>

                        {/* Menu de navigation desktop moderne */}
                        <nav className="hidden lg:flex">
                            <ul className="flex list-none gap-2 text-secondary">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `font-medium px-6 py-2 transition-all duration-300 text-secondary ${isActive
                                                ? 'text-primary border-b-2 border-primary'
                                                : 'hover:text-primary/30 hover:border-b-1 hover:border-primary/30'
                                            }`
                                        }>

                                        <span className="relative">
                                            Accueil
                                        </span>

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/services"
                                        className={({ isActive }) =>
                                            `font-medium px-6 py-2 transition-all duration-300 text-secondary ${isActive
                                                ? 'text-primary border-b-2 border-primary'
                                                : 'hover:text-primary/30 hover:border-b-1 hover:border-primary/30'
                                            }`
                                        }
                                    >
                                        <span className="relative">
                                            Services
                                        </span>

                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/sectors"
                                        className={({ isActive }) =>
                                            `font-medium px-6 py-2 transition-all duration-300 text-secondary ${isActive
                                                ? 'text-primary border-b-2 border-primary'
                                                : 'hover:text-primary/30 hover:border-b-1 hover:border-primary/30'
                                            }`
                                        }
                                    >
                                        <span className="relative">
                                            Secteurs
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive }) =>
                                            `font-medium px-6 py-2 transition-all duration-300 text-secondary ${isActive
                                                ? 'text-primary border-b-2 border-primary'
                                                : 'hover:text-primary/30 hover:border-b-1 hover:border-primary/30'
                                            }`
                                        }
                                    >
                                        <span className="relative">
                                            Contact
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        {/* Actions header modernes */}
                        <div className="flex items-center gap-4">
                            {/* Menu mobile toggle moderne */}
                            <button
                                className="block lg:hidden bg-white/90 border-0 text-2xl cursor-pointer text-primary p-3 rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-white backdrop-blur-sm z-50 relative"
                                onClick={toggleDrawer}
                                aria-label="Toggle menu"
                            >
                                <div className="relative">
                                    <FaBars className={`transition-all duration-300 ${open ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                                    <FaTimes className={`absolute top-0 left-0 transition-all duration-300 ${open ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu mobile moderne */}
            <div className={`fixed top-full left-0 right-0 bg-secondary-50 backdrop-blur-xl border-t border-gray-200 shadow-2xl transition-all duration-500 ease-in-out z-40 ${open ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}>
                <div className="bg-transparent">
                    <nav>
                        <ul className="list-none space-y-2">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `no-underline font-medium text-lg block py-4 transition-all duration-300 px-6 text-secondary ${isActive
                                            ? 'text-primary bg-secondary-100'
                                            : 'hover:bg-gray-100'
                                        }`
                                    }
                                >
                                    Accueil
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `no-underline font-medium text-lg block py-4 transition-all duration-300 px-6 text-secondary ${isActive
                                            ? 'text-primary bg-secondary-100'
                                            : 'hover:bg-gray-100'
                                        }`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/sectors"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `no-underline font-medium text-lg block py-4 transition-all duration-300 px-6 text-secondary ${isActive
                                            ? 'text-primary bg-secondary-100'
                                            : 'hover:bg-gray-100'
                                        }`
                                    }
                                >
                                    Secteurs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `no-underline font-medium text-lg block py-4 transition-all duration-300 px-6 text-secondary ${isActive
                                            ? 'text-primary bg-secondary-100'
                                            : 'hover:bg-gray-100'
                                        }`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    );
}
