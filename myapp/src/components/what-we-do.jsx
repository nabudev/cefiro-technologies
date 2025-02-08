'use client';

import { Target , Lightbulb , Handshake  } from "lucide-react"

export function WhatWeDo() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 relative">
      <div className="relative">
        {/* Primera sección - Izquierda arriba */}
        <div className="flex items-start mb-24 gap-6">
          <Lightbulb className="text-gray-100 flex-shrink-0" size={80} />
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">¿Qué hacemos?</h2>
            <p className="text-lg text-gray-600">
                Creamos soluciones que impulsan el crecimiento de las empresas.
            </p>
          </div>
        </div>

        {/* Segunda sección - Derecha medio */}
        <div className="flex items-start mb-24 gap-6 ml-auto flex-row-reverse">
          <Handshake  className="text-gray-100 flex-shrink-0" size={80} />
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">¿Cómo lo hacemos?</h2>
            <p className="text-lg text-gray-600">Adaptándonos a las necesidades de nuestros clientes.</p>
          </div>
        </div>

        {/* Tercera sección - Izquierda abajo */}
        <div className="flex items-start gap-6">
          <Target  className="text-gray-100 flex-shrink-0" size={80} />
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">¿Por qué lo hacemos?</h2>
            <p className="text-lg text-gray-600">Para garantizar el éxito y crecimiento de nuestros clientes.</p>
          </div>
        </div>

        {/* Líneas decorativas */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M20,20 L80,50 L20,80"
              fill="none"
              stroke="#D1D5DB"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}