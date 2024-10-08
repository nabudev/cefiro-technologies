"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
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
      image: "img/issc.png?height=400&width=600"
    },
    {
      id: 2,
      title: "Mena Vial SRL",
      description: "Sitio web informativo para una empresa de construcción con el fin de mostrarle a potenciales clientes los productos y servicios que se ofrecen",
      image: "img/mena.png?height=400&width=600"
    },
    {
      id: 4,
      title: "Inmobiliaria Zamora",
      description: "Página web diseñado y desarrollado para impulsar el alcance de visualizaciones de los servicios de Inmobiliaria Zamora",
      image: "img/zamora.png?height=400&width=600"
    },
    {
      id: 3,
      title: "AutoElite Motors",
      description: "Sitio web de concesionaria diseñado y desarrollado para promocionar la venta de automóviles",
      image: "img/autoelite.png?height=400&width=600"
    }
  ]

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-blue-950">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8">Nuestros Proyectos</h2>
        <p className="text-lg sm:text-xl font-bold text-center text-white mb-8 sm:mb-12 max-w-3xl mx-auto">
          Te mostramos nuestros últimos proyectos donde plasmamos nuestra calidad de diseño y desarrollo
        </p>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="sm:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card className="overflow-hidden h-full">
                    <CardContent className="p-0 flex flex-col h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
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
          <div className="hidden sm:block">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}