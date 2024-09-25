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
    (<section
      className="w-full py-12 md:py-24 lg:py-32 bg-blue-950">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Nuestros Proyectos</h2>
        <p className="text-xl font-bold text-center text-white mb-12">Te mostramos nuestros últimos proyectos donde plasmamos nuestra calidad de diseño y desarrollo</p>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>)
  );
}