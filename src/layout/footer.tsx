import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useCurrentLanguage } from "../components/useCurrentLanguage";

export const Footer = () => {
    const lang = useCurrentLanguage();

    const socialLinks = [
        { icon: Github, href: "https://github.com/fourthstanza", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/fourthstanza/", label: "LinkedIn" },
        { icon: Instagram, href: "https://www.instagram.com/fourthstanza/", label: "Instagram" },
        { icon: Mail, href: "mailto:fourthstanza@gmail.com", label: "Email" },
    ];

    return (
        <footer className="bg-footer-background border-t border-surface-gray/20">
            <div className="container mx-auto px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:justify-items-center">
                    {/* About */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-text">{lang === "fr" ? "En bref" : "In brief"}</h3>
                        <p className="text-text/70 text-sm italic">
                            {lang === "fr" ? "Cette page web est en cours de développement, donc certaines fonctionnalités sont manquantes. Conçue et développée à la main. Propulsée par React+Vite et Tailwindcss." : "This webpage is a work in progress, expect some functionality to be missing. Designed & developed by hand. Powered by React+Vite and Tailwindcss."}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-text">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href={lang === "fr" ? "#/fr/about" : "#/en/about"} className="text-text/70 hover:text-hover text-sm">{lang === "fr" ? "À propos" : "About"}</a></li>
                            <li><a href={lang === "fr" ? "#/fr/projects" : "#/en/projects"} className="text-text/70 hover:text-hover text-sm">{lang === "fr" ? "Projets" : "Projects"}</a></li>
                            <li><a href={lang === "fr" ? "#/fr/gallery" : "#/en/gallery"} className="text-text/70 hover:text-hover text-sm">{lang === "fr" ? "Galerie" : "Gallery"}</a></li>
                            <li><a href={lang === "fr" ? "#/fr/contact" : "#/en/contact"} className="text-text/70 hover:text-hover text-sm">{lang === "fr" ? "Contact" : "Contact"}</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-text">{lang === "fr" ? "Connectez" : "Connect"}</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-text/70 hover:text-hover transition-colors"
                                        aria-label={link.label}
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-surface-gray/20 pt-8">
                    <p className="text-center text-text/50 text-sm">
                        {lang === "fr" ? "© 2026 Matthew Sylvester. Tous droits réservés." : "© 2026 Matthew Sylvester. All rights reserved."}
                    </p>
                </div>
            </div>
        </footer>
    );
};