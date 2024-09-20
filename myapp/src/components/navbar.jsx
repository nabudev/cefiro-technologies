'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Servicios' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];

export function NavbarJsx({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    (<nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href="#"
            className={`text-2xl font-bold ${scrolled ? 'text-blue-600' : 'text-white'}`}>
            Cefiro Technologies
          </a>
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.a
                  href={`#${item.id}`}
                  className={`text-lg ${activeSection === item.id ? 'text-blue-300' : ''} ${scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
                  onClick={() => setActiveSection(item.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}>
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
          <button className={`md:hidden ${scrolled ? 'text-gray-600' : 'text-white'}`}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>)
  );
}