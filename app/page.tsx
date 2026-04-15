import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsPreview } from "@/components/sections/SkillsPreview";
import { ContactCta } from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <SkillsPreview />
      <ContactCta />
    </>
  );
}
