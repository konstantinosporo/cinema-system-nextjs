'use client';
import { useState } from 'react';
import { navLinks } from '../../navigation/navlinks';// Adjust the path as needed

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 bg-opacity-75 z-50 bg-gradient-to-r from-blue-800 to-transparent">
      <div className="container mx-auto flex items-center justify-between p-3">
        <div className="text-2xl font-bold">CinemaSystem</div>

        {/* Toggle Button for Mobile Menu */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:bg-gray-700 px-3 py-2 rounded">
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gray-800`}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="block px-4 py-2 text-center hover:bg-gray-700">
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
