import { Github, Linkedin, Mail, Instagram } from "lucide-react";

// filepath: c:\Users\Fourt\Desktop\Projects\React_App\github_page\fourthstanza.github.io\src\layout\footer.tsx

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
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
                        <h3 className="text-lg font-bold mb-4 text-text">In brief</h3>
                        <p className="text-text/70 text-sm italic">
                            This webpage is a work in progress, expect some functionality to be missing. Designed & developed by hand. All images and content © Matthew Sylvester unless otherwise specified. Powered by React+Vite and Tailwindcss.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-text">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-text/70 hover:text-hover text-sm">About</a></li>
                            <li><a href="#projects" className="text-text/70 hover:text-hover text-sm">Projects</a></li>
                            <li><a href="#gallery" className="text-text/70 hover:text-hover text-sm">Gallery</a></li>
                            <li><a href="#contact" className="text-text/70 hover:text-hover text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-text">Connect</h3>
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
                        © {currentYear} Matthew Sylvester. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};