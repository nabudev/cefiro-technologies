"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const ServicioComponent = () => {
  // Estado para rastrear qué texto tiene hover
  const [hoveredText, setHoveredText] = useState(null)

  // Lista de servicios
  const servicios = [
    "Desarrollo tecnológico innovador",
    "Sistemas sostenibles y seguros",
    "Soporte técnico especializado",
    "Formación técnica para equipos de trabajo",
    "Soluciones alineadas a necesidades específicas",
  ]

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          ¿Por qué elegirnos?
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Imagen - Aquí puedes reemplazar con tu propia imagen */}
        <div className="w-full md:w-1/2 relative">
          <div className="rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-xl">
            <Image
              src="/img/cefiro.webp?height=600&width=600"
              alt="Empresa de Software"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Textos con animación */}
        <div className="w-full md:w-1/2 space-y-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredText(index)}
              onMouseLeave={() => setHoveredText(null)}
            >
              <motion.h3
                className="text-2xl font-light tracking-wide cursor-pointer"
                initial={{ color: "#173954" }}
                animate={{
                  color: hoveredText === index ? "#173954" : "#173954",
                  x: hoveredText === index ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {servicio}
              </motion.h3>

              {/* Línea animada debajo del texto */}
              <motion.div
                className="h-0.5 bg-gray-600 mt-1"
                initial={{ width: 0 }}
                animate={{
                  width: hoveredText === index ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicioComponent
