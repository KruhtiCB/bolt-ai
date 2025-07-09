import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Sisuni Tech</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="/taddy11" className="text-gray-600 hover:text-blue-600 transition-colors">TaddyTI</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            <a href="/career" className="text-blue-600 font-medium">Career</a>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;