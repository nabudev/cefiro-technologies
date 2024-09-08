import { NavbarJsx } from "@/components/navbar";
import { HeroJsx } from "@/components/hero";
import { BusinessRulesJsx } from "@/components/business-rules";
import { BusinessPlansJsx } from "@/components/business-plans";
import { ContactFormJsx } from "@/components/contact-form";
import { FooterJsx } from "@/components/footer";
import { ProjectsShowcaseJsx } from "@/components/projects-showcase";

export default function Home(){
  return(
    <>
      <NavbarJsx />
      <HeroJsx />
      <BusinessRulesJsx />
      <BusinessPlansJsx />
      <ProjectsShowcaseJsx />
      <ContactFormJsx />
      <FooterJsx />
    </>
  );
};