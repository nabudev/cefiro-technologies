'use client'

import React from 'react';
import { motion } from 'framer-motion';

const rules = [
  {
    title: "Presupuesto",
    description: "Ofrecemos presupuestos transparentes y detallados. Nuestro enfoque de costos se basa en el valor que aportamos a tu negocio, con opciones flexibles que se adaptan a diferentes escalas y necesidades.",
    icon: (
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Reuniones",
    description: "Mantenemos una comunicación constante a través de reuniones regulares. Utilizamos herramientas de videoconferencia para facilitar la colaboración remota y garantizar que estés siempre al tanto del progreso de tu proyecto.",
    icon: (
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Desarrollo del Trabajo",
    description: "Seguimos una metodología ágil, con sprints semanales y entregables incrementales. Nuestro proceso de desarrollo está diseñado para ser flexible y adaptable, permitiéndonos responder rápidamente a tus necesidades cambiantes.",
    icon: (
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  }
];

export function BusinessRulesJsx() {
  return (
    (<section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestras Reglas de Negocio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div
                className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                {rule.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{rule.title}</h3>
              <p className="text-gray-600">{rule.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>)
  );
}