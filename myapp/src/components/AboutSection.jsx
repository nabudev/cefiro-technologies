"use client"

import { useState } from "react"
import { Globe, Layout, BarChart3, Wrench } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function SolucionesTecnologicas() {
  const soluciones = [
    {
      id: "paginas-web",
      titulo: "Páginas web",
      icono: <Globe className="w-12 h-12" />,
      ruta: "/soluciones/paginas-web",
    },
    {
      id: "aplicaciones-web",
      titulo: "Aplicaciones web",
      icono: <Layout className="w-12 h-12" />,
      ruta: "/soluciones/aplicaciones-web",
    },
    {
      id: "sistemas-gestion",
      titulo: "Sistemas de gestión empresarial",
      icono: <BarChart3 className="w-12 h-12" />,
      ruta: "/soluciones/sistemas-gestion",
    },
    {
      id: "soporte-mantenimiento",
      titulo: "Soporte y mantenimiento",
      icono: <Wrench className="w-12 h-12" />,
      ruta: "/soluciones/soporte-mantenimiento",
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Desarrollamos soluciones tecnológicas que impulsan el crecimiento de las Empresas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {soluciones.map((solucion) => (
          <SolucionCard key={solucion.id} solucion={solucion} />
        ))}
      </div>
    </div>
  )
}

function SolucionCard({ solucion }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={solucion.ruta}>
      <motion.div
        className="flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          className="bg-gray-100 rounded-full p-6 mb-4"
          animate={{
            y: isHovered ? -10 : 0,
            boxShadow: isHovered ? "0px 10px 15px rgba(0, 0, 0, 0.1)" : "0px 0px 0px rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3 }}
        >
          {solucion.icono}
        </motion.div>
        <motion.h3
          className="text-lg font-medium text-center"
          animate={{
            color: isHovered ? "#3182ce" : "#1a202c",
          }}
          transition={{ duration: 0.3 }}
        >
          {solucion.titulo}
        </motion.h3>
      </motion.div>
    </Link>
  )
}


