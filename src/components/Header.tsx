import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="gradient-header text-white sticky top-0 z-50">
      <div className="container-capoeira py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <span className="text-xs font-bold">OP</span>
              </div>
            </div>
            <div className="font-montserrat">
              <h1 className="text-xl font-bold leading-tight">
                Ondas Providence
              </h1>
              <p className="text-sm opacity-90">Capoeira Group</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="hover:text-capoeira-yellow transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-capoeira-yellow transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/songs"
              className="hover:text-capoeira-yellow transition-colors duration-200 font-medium"
            >
              Songs
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="py-2 hover:text-capoeira-yellow transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="py-2 hover:text-capoeira-yellow transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/songs"
                className="py-2 hover:text-capoeira-yellow transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Songs
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
