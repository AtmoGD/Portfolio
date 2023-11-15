import React, { FunctionComponent } from "react";
import unthronedImage from "@/assets/Unthroned.png";
import ProjectCard from "@/components/project-component";
interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <div>
      <ProjectCard
        title="Unthroned"
        description="Unthroned is a twin-stick shooter with base building and tower defense elements. It was developed as a student project for our masters degree. You are playing dave, a cool necromancer who is trying to invade his brothers empire. Go and farm enough souls to upgrade your skills and your home base."
        image={unthronedImage}
        badges={["Programming", "Game Design", "Art"]}
      />
    </div>
  );
};

export default Page;
