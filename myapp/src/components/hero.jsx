'use client'

import React from 'react';
import { motion } from 'framer-motion';

export function HeroJsx() {
  return (
    (<div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Bienvenido a Cefiro Techs
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          Innovación tecnológica para impulsar tu negocio
        </motion.p>
        <motion.button
          className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Descubre más
        </motion.button>
      </div>
    </div>)
  );
}