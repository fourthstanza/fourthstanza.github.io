import Logo from "../assets/images/logo.jpg";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
]

export const Navbar = () => {
    return <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-5">
        <nav className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex gap-3 items-center text-2xl font-bold tracking-tight hover:text-hover">
                <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full" /> Matthew Sylvester
            </a>
            {/* Desktop Nav */}
            <div className="flex gap-1 items-center">
                <div className="glass rounded-full px-2 py-1 flex gap-4">
                {navLinks.map((link, index) => (
                    <a key={index} href={link.href} className="px-4 py-2 hover:text-hover">
                        {link.label}
                    </a>
                ))}
                </div>
            </div>
        </nav>
    </header>;
};