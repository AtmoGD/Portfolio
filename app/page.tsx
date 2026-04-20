import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { SkillsPreview } from "@/components/sections/SkillsPreview";
import { ConnectSection } from "@/components/sections/ConnectSection";
import { ContactCta } from "@/components/sections/ContactCta";
import { LazyMount } from "@/components/ui/LazyMount";

// ProjectWheel bundles the ~49-entry galleryImages metadata map; code-splitting
// it keeps that weight out of the initial landing-page bundle. LazyMount then
// defers the actual mount (and its JS chunk fetch) until the user scrolls near.
const ProjectWheel = dynamic(
  () => import("@/components/sections/ProjectWheel").then((m) => m.ProjectWheel),
  { ssr: false },
);

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <LazyMount placeholderClassName="min-h-[620px] sm:min-h-[680px]">
        <ProjectWheel />
      </LazyMount>
      <SkillsPreview />
      <ConnectSection />
      <ContactCta />
    </>
  );
}
