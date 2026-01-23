import { useState } from "react";
import { Menu, Square } from "lucide-react";
import Logo from "../assets/images/logo.png";
import { Button } from "../components/button";

const navLinks = [
    { label: "About", href: "/#/about" },
    { label: "Projects", href: "/#/projects" },
    { label: "Gallery", href: "/#/gallery" },
    { label: "Contact", href: "/#/contact" },
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const startClose = () => {
        setIsClosing(true);
    }


    return <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-5">
        {/*mobile nav bar block*/}
        <div className="md:hidden fixed inset-x-0 top-0 h-21 glass -z-10"/>
        {/*desktop nav bar block*/}
        <div className="hidden md:flex fixed inset-x-0 top-0 h-22 -z-10 bg-linear-to-b from-background-bottom to-background-bottom/0"/>
        <nav className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex gap-3 items-center text-4xl font-bold font-serif italic tracking-tight hover:text-hover hover:text-shadow-lg/15 text-shadow-background-top">
                <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full drop-shadow-md drop-shadow-surface-gray" />f (s)
            </a>
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-1 glass items-center animate-fade-in rounded-full outline-text/40 outline-1 ">
                <div className="px-2 py-1 flex gap-4">
                {navLinks.map((link, index) => (
                    <a key={index} href={link.href} className="px-4 py-2 hover:text-hover font-bold lg:text-lg">
                        {link.label}
                    </a>
                ))}
                </div>
                {/*en/fr button*/}
                <Button className="mr-2 px-4 py-2 text-sm font-extralight">
                    EN/FR
                </Button>
            </div>
        {/* Mobile Nav*/}
            <button className="md:hidden p-2 white animate-fade-in"
                onClick={() => {
                    if (isMobileMenuOpen) {
                        startClose();
                    } else {
                        setIsMobileMenuOpen(true);
                    }
                }}>
                {isMobileMenuOpen ? <Square size={24}/> : <Menu size={24}/>}
            </button>
        </nav>

        {/* Mobile Menu*/}
        {(isMobileMenuOpen || isClosing) && (
        <div className={`md:hidden glass my-4 outline-2 outline-white/60 ${isClosing ? "animate-fade-out" : "animate-fade-in"}`}
            onAnimationEnd={() => {
                if (isClosing) {
                    setIsClosing(false);
                    setIsMobileMenuOpen(false);
                }
            }}>
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                    <a  key={index}
                        href={link.href} 
                        className="px-4 py-1 hover:text-hover text-lg"
                        onClick={() => startClose()}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
            <Button className="mt-0 px-4 mb-4 mx-7 text-sm font-extralight">
                EN/FR
            </Button>
        </div>
        )}
    </header>;  
};