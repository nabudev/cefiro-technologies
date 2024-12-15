'use client'

import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { Code, Wrench, ChartPie, Globe  } from 'lucide-react'


export function Servicios() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <ServiceCard
                icon={<Globe className="h-10 w-10 mb-4 text-primary" />}
                title="Landing Pages"
                description="Diseñamos y desarrollamos páginas web modernas y optimizadas para atraer clientes y destacar tu negocio o proyecto." />
          </NeonGradientCard>
          <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <ServiceCard
              icon={<ChartPie className="h-10 w-10 mb-4 text-primary" />}
              title="Sistemas de Gestión Empresarial"
              description="Desarrollamos soluciones a medida para automatizar y optimizar tus procesos." />
          </NeonGradientCard>
          <NeonGradientCard className="max-w-sm items-center justify-center text-center">
            <ServiceCard
              icon={<Wrench className="h-10 w-10 mb-4 text-primary" />}
              title="Soporte y Mantenimiento"
              description="Cuidamos tus sistemas con actualizaciones, soporte técnico y mejoras constantes." />
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

