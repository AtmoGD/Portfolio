import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsPreview } from "@/components/sections/SkillsPreview";
import { ConnectSection } from "@/components/sections/ConnectSection";
import { ContactCta } from "@/components/sections/ContactCta";
import { LazyMount } from "@/components/ui/LazyMount";

// Split ProjectWheel into its own JS chunk + defer mount until the user
// scrolls near it — keeps the ~49-image metadata map out of the initial
// landing-page bundle.
const ProjectWheel = dynamic(
  () => import("@/components/sections/ProjectWheel"),
  { ssr: false },
);

export default function Home() {
  return (
    <>
      <Hero />
      <LazyMount placeholderClassName="min-h-[640px] sm:min-h-[720px]">
        <ProjectWheel />
      </LazyMount>
      <AboutSection />
      <FeaturedProjects />
      <SkillsPreview />
      <ConnectSection />
      <ContactCta />
    </>
  );
}
