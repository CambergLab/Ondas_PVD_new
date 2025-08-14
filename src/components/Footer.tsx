import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-capoeira-blue text-white">
      <div className="container-capoeira section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-capoeira-yellow font-montserrat text-body-large font-bold">
              Ondas Providence
            </h3>
            <p className="text-white/90 leading-relaxed">
              Rhode Island's premier capoeira group, established in 2000 by
              Mestre Tigri (Dr. Silas Pinto) and led by Mestre Tabareu Dos
              Palmares (Joel Pasian).
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-capoeira-yellow font-montserrat text-body-large font-bold">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="/"
                className="text-white/90 hover:text-capoeira-yellow transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white/90 hover:text-capoeira-yellow transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="/songs"
                className="text-white/90 hover:text-capoeira-yellow transition-colors duration-200"
              >
                Songs
              </a>
            </nav>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="text-capoeira-yellow font-montserrat text-body-large font-bold">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-capoeira-yellow hover:text-capoeira-blue transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-capoeira-yellow hover:text-capoeira-blue transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-capoeira-yellow hover:text-capoeira-blue transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
            <div className="pt-4 space-y-2 text-sm text-white/80">
              <p>📍 New Wave Martial Arts, Warwick, RI</p>
              <p>📅 Wednesday & Friday, 6:30-8:00 PM</p>
              <p>📧 info@ondasprovidence.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/80">
          <p>© 2025 Ondas Providence Capoeira Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
