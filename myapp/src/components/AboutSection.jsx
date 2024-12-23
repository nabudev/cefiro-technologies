'use client';
import React from 'react';

const servicesData = [
  {
    id: 1,
    title: "Landing Pages",
    description: "Creamos sitios web atractivos y efectivos que convierten visitantes en clientes de tu negocio. Nuestro diseño se enfoca en la experiencia del usuario para impulsar el crecimiento de tu negocio.",
    image: "/img/landing.webp"
  },
  {
    id: 2,
    title: "Soluciones Web a Medida",
    description: "Desarrollamos sistemas web personalizados que van más allá de una landing page, incluyendo funcionalidades dinámicas como gestión de usuarios, catálogos de productos, reservas en línea, paneles administrativos y más.",
    image: "/img/swm.webp"
  },
  {
    id: 3,
    title: "Sistemas de Gestión Empresarial y/o Comercial",
    description: "Desarrollamos soluciones personalizadas integrando todos los procesos de tu negocio en un sistema, permitiéndote optimizar y mejorar la eficiencia operativa.",
    image: "/img/sge.webp"
  },
  {
    id: 4,
    title: "Soporte y Mantenimiento",
    description: "Ofrecemos servicios de soporte técnico y mantenimiento continuo para garantizar que tus sistemas funcionen sin problemas. Disponibilidad completa para resolver cualquier incidencia y mantener su infraestructura tecnológica actualizada y segura.",
    image: "/img/soporte.webp"
  }
];

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        </div>
        {servicesData.map((service, index) => (
          <div key={service.id} className={`grid lg:grid-cols-2 gap-8 items-center py-16 ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Image Column */}
            <div className={`relative ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
              <div className="relative z-10">
                <img
                  src={service.image}
                  alt={`Ilustración para ${service.title}`}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 bg-gradient-to-br from-gray-200/30 to-gray-600/30 rounded-3xl transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'}`}></div>
                <div className={`absolute ${index % 2 === 0 ? 'top-1/4 right-1/4' : 'bottom-1/4 left-1/4'} w-32 h-32 bg-gray-500/20 rounded-full blur-xl`}></div>
              </div>
            </div>

            {/* Content Column */}
            <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:col-start-1' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                {service.title}
              </h2>
              <p className="text-lg text-gray-600">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;

