import { useState, useEffect } from "react";
import { Home, Users, Briefcase, MessageSquare, UserCircle, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoImg from "@/assets/img/Logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About Us", icon: Users },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "testimonials", label: "Testimonials", icon: MessageSquare },
    { id: "team", label: "Team", icon: UserCircle },
    { id: "contact", label: "Contact Us", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-navy-dark/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img
              src={LogoImg}
              alt="Aura Persona Logo"
              className="h-12 w-auto object-contain"
            />
            <h1 className="text-2xl font-bold text-white">
              Aura <span className="text-gold">Persona</span>
            </h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-gold transition-colors hover-elevate"
                data-testid={`button-nav-${link.id}`}
              >
                <link.icon className="h-4 w-4 mr-2" />
                {link.label}
              </Button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy-deep border-t border-gold/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-gold justify-start hover-elevate"
                data-testid={`button-nav-mobile-${link.id}`}
              >
                <link.icon className="h-4 w-4 mr-2" />
                {link.label}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
