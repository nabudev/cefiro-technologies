'use client'

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Plataforma de comercio electrónico con diseño responsivo y carrito de compras dinámico.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "https://ecommerce-ejemplo.com"
  },
  {
    id: 2,
    title: "App de Gestión de Tareas",
    description: "Aplicación web para organizar y seguir el progreso de tareas y proyectos.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "https://taskmanager-ejemplo.com"
  },
  {
    id: 3,
    title: "Blog de Tecnología",
    description: "Sitio web de noticias y artículos sobre las últimas tendencias en tecnología.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "https://techblog-ejemplo.com"
  },
  {
    id: 4,
    title: "Dashboard Analítico",
    description: "Panel de control interactivo para visualización de datos empresariales.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    projectUrl: "https://dashboard-ejemplo.com"
  }
];

export function ProjectsShowcaseJsx() {
  return (
    (<section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                  Ver Proyecto
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>)
  );
}