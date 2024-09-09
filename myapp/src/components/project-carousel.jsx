"use client"

import * as React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export function ProjectCarousel() {
  const projects = [
    {
      id: 1,
      title: "Eco Smart Home",
      description: "Sistema de domótica para hogares ecológicos",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/eco-smart-home",
    },
    {
      id: 2,
      title: "City Transit App",
      description: "Aplicación de transporte público en tiempo real",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/city-transit-app",
    },
    {
      id: 3,
      title: "Health Track",
      description: "Plataforma de seguimiento de salud personal",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/health-track",
    },
    {
      id: 4,
      title: "EduConnect",
      description: "Plataforma de educación en línea",
      image: "/placeholder.svg?height=400&width=600",
      link: "/projects/educonnect",
    },
  ]

  return (
    (<section
      className="w-full py-12 md:py-24 lg:py-32 bg-blue-950">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Nuestros Proyectos</h2>
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
                        <Link href={project.link}>
                          <Button className="w-full">Ver Proyecto</Button>
                        </Link>
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