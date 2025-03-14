'use client'

import React, { useEffect } from 'react'
import BlurFade from './ui/blur-fade';

const HeroJsx = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative h-[400px] w-full md:h-[600px]">
          <img
            src="/img/logosinfondo.webp"
            alt="Logo Cefiro Technologies"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="space-y-6 text-center md:text-left">
          <BlurFade>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Creamos tecnología{" "}
              <span className="block">que impulsan el crecimiento.</span>
            </h1>
          </BlurFade>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contactanos
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md bg-[#173954] px-8 py-2 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#61dafb]/90" 
            >
              Más sobre nosotros
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroJsx