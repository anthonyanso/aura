import LogoImage from "@/assets/img/Logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-navy-dark text-white pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo & Brand */}
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <img src={LogoImage} alt="Aura Persona Logo" className="h-12 w-auto mb-2" />
            <h3 className="text-2xl font-bold text-white mb-2">Aura Persona</h3>
            <p className="text-gray-400 text-left max-w-xs">Empowering talent. Elevating influence. Crafting authentic connections.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#home" className="text-gray-300 hover:text-gold transition-colors duration-300 transform hover:-translate-y-1">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors duration-300 transform hover:-translate-y-1">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors duration-300 transform hover:-translate-y-1">Services</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-gold transition-colors duration-300 transform hover:-translate-y-1">Testimonials</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-gold transition-colors duration-300 transform hover:-translate-y-1">Team</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors duration-300 transform hover:-translate-y-1">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Email: <a href="mailto:info@aurapersona.com" className="hover:text-gold transition">info@aurapersona.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-gold transition">+1 234 567 890</a></li>
              <li>Location: 123 Business Ave, Tech City</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">&copy;Copyright {currentYear} Aura Persona. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
