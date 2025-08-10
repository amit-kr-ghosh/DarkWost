import React from 'react';
import { Eye, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white px-16 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Dark Wost</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              See the world differently with premium eyewear that combines cutting-edge technology with timeless style.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="p-2 bg-gray-800 rounded-lg hover:bg-indigo-600 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['New Arrivals', 'Bestsellers', 'Sunglasses', 'Prescription', 'Blue Light', 'Gift Cards'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {['Size Guide', 'Return Policy', 'Warranty', 'FAQ', 'Contact Us', 'Track Order'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">hello@darkwost.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">1-800-DARK-WOST</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Dark Wost. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;