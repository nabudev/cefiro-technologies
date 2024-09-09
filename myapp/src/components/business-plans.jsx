'use client'

import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  { name: 'Básico', price: '99', features: ['Característica 1', 'Característica 2', 'Característica 3'] },
  { name: 'Pro', price: '199', features: ['Todo del Básico', 'Característica 4', 'Característica 5'] },
  { name: 'Enterprise', price: '299', features: ['Todo del Pro', 'Característica 6', 'Soporte 24/7'] },
];

export function BusinessPlansJsx() {
  return (
    (<div className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Nuestros Planes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">${plan.price}<span className="text-sm font-normal">/mes</span></p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>)
  );
}