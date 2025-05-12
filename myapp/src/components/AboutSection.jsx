"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, Layout, BarChart3, Wrench, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function SolucionesTecnologicas() {
  const [selectedSolution, setSelectedSolution] = useState(null)

  // Cerrar el modal al presionar Escape
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setSelectedSolution(null)
      }
    }
    window.addEventListener("keydown", handleEsc)

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  // Prevenir scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedSolution) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedSolution])

  const soluciones = [
    {
      id: "paginas-web",
      titulo: "Páginas web",
      icono: <Globe className="w-12 h-12" />,
      descripcion:
        "Diseñamos y desarrollamos sitios web modernos y optimizados que representan la identidad de tu empresa y mejoran la experiencia de tus clientes.",
      caracteristicas: [
        "Diseño personalizado y atractivo",
        "Optimización para dispositivos móviles",
        "Integración con redes sociales",
        "Posicionamiento SEO",
        "Panel de administración intuitivo",
      ],
    },
    {
      id: "aplicaciones-web",
      titulo: "Aplicaciones web",
      icono: <Layout className="w-12 h-12" />,
      descripcion:
        "Creamos aplicaciones web a medida que automatizan procesos, mejoran la productividad y ofrecen soluciones específicas para las necesidades de tu empresa.",
      caracteristicas: [
        "Integración de Bases de Datos",
        "Interfaces de usuario intuitivas",
        "Escalabilidad y rendimiento optimizado",
        "Seguridad y protección de datos",
      ],
    },
    {
      id: "sistemas-gestion",
      titulo: "Sistemas de gestión empresarial",
      icono: <BarChart3 className="w-12 h-12" />,
      descripcion:
        "Implementamos sistemas integrales que centralizan la información de tu empresa, optimizan procesos y facilitan la toma de decisiones estratégicas.",
      caracteristicas: [
        "Gestión de inventario",
        "Control de ventas y facturación",
        "Administración de recursos humanos",
        "Análisis de datos y reportes personalizados",
      ],
    },
    {
      id: "soporte-mantenimiento",
      titulo: "Soporte y mantenimiento",
      icono: <Wrench className="w-12 h-12" />,
      descripcion:
        "Ofrecemos servicios continuos de soporte técnico y mantenimiento para garantizar el funcionamiento óptimo de tus sistemas y plataformas digitales.",
      caracteristicas: [
        "Monitoreo de rendimiento",
        "Actualizaciones de seguridad",
        "Copias de seguridad periódicas",
        "Asesoramiento técnico personalizado",
      ],
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
          <SolucionCard key={solucion.id} solucion={solucion} onClick={() => setSelectedSolution(solucion)} />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSolution && <Modal solucion={selectedSolution} onClose={() => setSelectedSolution(null)} />}
      </AnimatePresence>
    </div>
  )
}

function SolucionCard({ solucion, onClick }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer"
      onClick={onClick}
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
  )
}

function Modal({ solucion, onClose }) {
  const modalRef = useRef(null)

  // Cerrar al hacer clic fuera del modal
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose()
    }
  }

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClickOutside}
    >
      <motion.div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">{solucion.icono}</div>
            <h3 className="text-2xl font-bold text-gray-800">{solucion.titulo}</h3>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Cerrar">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-700 mb-6">{solucion.descripcion}</p>

          <h4 className="font-bold text-lg mb-4 text-gray-800">Características principales:</h4>
          <ul className="space-y-2">
            {solucion.caracteristicas.map((caracteristica, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>{caracteristica}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-3 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
