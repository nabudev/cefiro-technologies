'use client'

import { Users, Code, DollarSign } from "lucide-react"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export function WhatWeDo() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#173954] via-[#173954] to-[#61dafb] bg-clip-text text-transparent leading-tight">
        ¿QUÉ HACEMOS?
      </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <ServiceCard
                icon={<Code className="h-10 w-10 mb-4 text-primary" />}
                title="Desarrollo Web"
                description="Creamos sitios web modernos que se adaptan a las necesidades de tu negocio." />
          </NeonGradientCard>
          <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <ServiceCard
              icon={<DollarSign className="h-10 w-10 mb-4 text-primary" />}
              title="Presupuestos"
              description="Ofrecemos presupuestos sin costo, transparentes y detallados. Con opciones flexibles para diferentes escalas y necesidades." />
          </NeonGradientCard>
          <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <ServiceCard
              icon={<Users className="h-10 w-10 mb-4 text-primary" />}
              title="Reuniones"
              description="Mantenemos una comunicación constante a través de reuniones regulares para garantizar que estés siempre al tanto del progreso de tu proyecto." />
          </NeonGradientCard>
        </div>
      </div>
    </section>)
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    (<div
      className="flex flex-col items-center text-center p-6">
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>)
  );
}

