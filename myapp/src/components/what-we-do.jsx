'use client'

import { Briefcase, Code, Megaphone, Users } from "lucide-react"

export function WhatWeDo() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">¿Qué Hacemos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<Code className="h-10 w-10 mb-4 text-primary" />}
            title="Desarrollo Web"
            description="Creamos sitios web modernos y responsivos que se adaptan a las necesidades de tu negocio." />
          <ServiceCard
            icon={<Megaphone className="h-10 w-10 mb-4 text-primary" />}
            title="Marketing Digital"
            description="Desarrollamos estrategias de marketing online para aumentar tu visibilidad y atraer más clientes." />
          <ServiceCard
            icon={<Briefcase className="h-10 w-10 mb-4 text-primary" />}
            title="Consultoría Empresarial"
            description="Ofrecemos asesoramiento experto para optimizar tus procesos y mejorar la eficiencia de tu empresa." />
          <ServiceCard
            icon={<Users className="h-10 w-10 mb-4 text-primary" />}
            title="Gestión de Redes Sociales"
            description="Manejamos tus perfiles en redes sociales para construir una comunidad sólida alrededor de tu marca." />
        </div>
      </div>
    </section>)
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    (<div
      className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>)
  );
}