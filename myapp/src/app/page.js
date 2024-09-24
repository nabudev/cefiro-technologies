'use client';
import { NavbarJsx } from "@/components/navbar";
import { HeroJsx } from "@/components/hero";
import { ContactFormJsx } from "@/components/contact-form";
import { FooterJsx } from "@/components/footer";
import { WhatWeDo } from "@/components/what-we-do";
import { ProjectCarousel } from "@/components/project-carousel";
import { WhatsAppButtonJsx } from "@/components/whats-app-button";
import React, { useState } from 'react';

export default function Home(){
  const [activeSection, setActiveSection] = useState('home');
  return(
    <>
      <WhatsAppButtonJsx />
      <NavbarJsx activeSection={activeSection} setActiveSection={setActiveSection} />
      <section id="home">
        <HeroJsx />
      </section>
      <section id="about">
        <WhatWeDo />
      </section>
      <section id="projects">
        <ProjectCarousel />
      </section>
      <section id="contact">
        <ContactFormJsx />
      </section>
      <FooterJsx />
    </>
  );
};