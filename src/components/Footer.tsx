import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold">RedRock Fabrications</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Delivering precision steel fabrication services with quality craftsmanship, 
              transparent processes, and dedicated support.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Alameda North Valley, NM 87114, USA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>(505) 555-0100</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="flex-shrink-0" />
                <span>info@redrockfab.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Fabrication</li>
              <li>Engineering & Detailing</li>
              <li>Pre-Construction</li>
              <li>Miscellaneous Metals</li>
              <li>Project Management</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} RedRock Fabrications. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
