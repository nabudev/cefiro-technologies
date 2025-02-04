"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import GridPattern from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ProjectCarousel() {
  const projects = [
    {
      id: 1,
      title: "Instituto Superior San Cristobal",
      description: "Sistema de gestión para institucion educativa que permite a los alumnos inscribirse a los exámenes finales de sus carreras",
      image: "img/issc.webp?height=400&width=600"
    },
    
    {
      id: 2,
      title: "Mena Vial SRL",
      description: "Sitio web informativo para una empresa de construcción con el fin de mostrarle a potenciales clientes los productos y servicios que se ofrecen",
      image: "img/mena.webp?height=400&width=600"
    },

    {
      id: 3,
      title: "Roobet Bot",
      description: "Sistema de detección y notificación de información automatizado. Analiza en tiempo real y de manera precisa los eventos de la plataforma y lo notifica a través del canal de mensajeria Telegram",
      image: "img/roobet.webp?height=400&width=600"
    },

    {
      id: 4,
      title: "Gestor de ventas",
      description: "Desarrollamos una herramienta que te permite gestionar las ventas, calcular costos y márgenes de ganancia de manera rápida y precisa, facilitando la gestión de presupuestos y cotizaciones.",
      image: "img/gestorventas.webp?height=400&width=600"
    },
  ]

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-800 relative flex h-full items-center justify-center overflow-hidden bg-background p-4 sm:p-20 md:shadow-xl">
      <GridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">Nuestros Proyectos</h2>
        <p className="text-lg sm:text-xl font-bold text-center text-white mb-8 sm:mb-12 max-w-3xl mx-auto">
          Te mostramos nuestros últimos trabajos donde plasmamos nuestra calidad de diseño y desarrollo
        </p>
        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="sm:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card className="overflow-hidden h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover"
                      />
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <h3 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center w-full py-2 gap-2 sm:hidden">
            {projects.map((_, index) => (
              <button
                key={index}
                className="h-3 w-3 rounded-full bg-gray-300 focus:outline-none"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="hidden sm:block absolute inset-0 pointer-events-none">
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-auto" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-auto" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}