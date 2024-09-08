'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export function HeroJsx() {
  return (
    (<div
      className="relative bg-blue-600 text-white min-h-screen flex items-center">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3
        }}></div>
      {/* Contenido del Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Innovación Tecnológica para tu Negocio
          </h1>
          <p className="text-xl mb-8">
            Cefiro Technologies: Impulsando el futuro digital de las empresas con soluciones tecnológicas de vanguardia.
          </p>
          <div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="about" smooth={true} duration={500}>
              <motion.button
                className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Conocenos
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Contáctanos
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>)
  );
}