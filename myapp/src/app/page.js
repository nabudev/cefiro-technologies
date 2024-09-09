'use client';
import { NavbarJsx } from "@/components/navbar";
import { HeroJsx } from "@/components/hero";
import { BusinessRulesJsx } from "@/components/business-rules";
import { BusinessPlansJsx } from "@/components/business-plans";
import { ContactFormJsx } from "@/components/contact-form";
import { FooterJsx } from "@/components/footer";
import { WhatWeDo } from "@/components/what-we-do";
import { ProjectCarousel } from "@/components/project-carousel";
import React, { useState } from 'react';

export default function Home(){
  const [activeSection, setActiveSection] = useState('home');
  return(
    <>
      <NavbarJsx activeSection={activeSection} setActiveSection={setActiveSection} />
      <section id="home">
        <HeroJsx />
      </section>
      <section id="about">
        <WhatWeDo />
      </section>
      <section id="rules">
        <BusinessRulesJsx />
      </section>
      <section id="plans">
        <BusinessPlansJsx />
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