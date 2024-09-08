'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Inicio' },
  { id: 'plans', label: 'Planes' },
  { id: 'rules', label: 'Reglas de Negocio' },
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
      className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">Cefiro Techs</a>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.a
                href={`#${item.id}`}
                className={`text-lg ${activeSection === item.id ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveSection(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </nav>)
  );
}