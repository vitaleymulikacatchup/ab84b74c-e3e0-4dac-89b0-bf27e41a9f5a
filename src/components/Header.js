import React, { useState } from 'react';
import { Menu, X, ChevronDown, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-blue to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-brand-dark">Sargas</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-brand-blue transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a href="#web-dev" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Web Development</a>
                  <a href="#mobile-dev" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Mobile Development</a>
                  <a href="#support" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Support and Maintenance</a>
                </div>
              )}
            </div>
            <a href="#portfolio" className="text-gray-700 hover:text-brand-blue transition-colors">Portfolio</a>
            <a href="#about" className="text-gray-700 hover:text-brand-blue transition-colors">About</a>
            <a href="#contacts" className="text-gray-700 hover:text-brand-blue transition-colors">Contacts</a>
          </nav>

          {/* Clutch Rating & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">C</span>
              </div>
              <div className="text-sm">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-red-500 text-red-500" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-500">Based on 6 Clutch reviews</div>
              </div>
            </div>
            <button className="btn-secondary">
              Book a Call
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <div>
              <div className="font-semibold text-gray-900 mb-2">Services</div>
              <div className="pl-4 space-y-2">
                <a href="#web-dev" className="block text-gray-600">Web Development</a>
                <a href="#mobile-dev" className="block text-gray-600">Mobile Development</a>
                <a href="#support" className="block text-gray-600">Support and Maintenance</a>
              </div>
            </div>
            <a href="#portfolio" className="block text-gray-700">Portfolio</a>
            <a href="#about" className="block text-gray-700">About</a>
            <a href="#contacts" className="block text-gray-700">Contacts</a>
            <div className="pt-4 border-t border-gray-100">
              <button className="btn-secondary w-full">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;