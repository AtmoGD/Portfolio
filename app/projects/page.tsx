import { Box, Center, Stack, Title } from "@mantine/core";
import React, { FunctionComponent } from "react";
import ProjectCard from "@/components/project-component";

import unthronedImage from "@/assets/Unthroned.png";
import cozyMarktImage from "@/assets/CozyWinterMarket.png";
import pumpkinHarvestImage from "@/assets/PumpkinHarvest@0.25x.png";
import witchWayImage from "@/assets/WitchWay.png";
import gravityPongImage from "@/assets/GravityPong.png";
import oasisImage from "@/assets/Oasis.jpg";
import bombermanImage from "@/assets/Bomb.png";
import aureaImage from "@/assets/Aurea.png";

import arcImage from "@/assets/Arc.png";
import hammerImage from "@/assets/Hammer.png";

import { useTranslation } from "react-i18next";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  const { t } = useTranslation();
  return (
    <Center>
      <Stack align="center">
        <Box className="titleBar">
          <Center>
            <Title order={2}>Games</Title>
          </Center>
        </Box>
        <Stack>
          <ProjectCard
            title="Unthroned"
            description={t("unthronedDescription")}
            image={unthronedImage}
            badges={[
              "Unity",
              "Programming",
              "Engine Development",
              "Game Design",
              "Student Project",
            ]}
            link={"https://atmogd.itch.io/unthroned"}
          />

          <ProjectCard
            title="Oasis"
            description={t("oasisDescription")}
            image={oasisImage}
            badges={[
              "Unreal",
              "Programming",
              "Game Design",
              "VR",
              "Motion Capturing",
              "Bachelor Thesis",
            ]}
            link={"https://youtu.be/Wh6ieci--3E"}
            buttonText="Gameplay Teaser"
          />

          <ProjectCard
            title="Aurea"
            description={t("aureaDescription")}
            image={aureaImage}
            badges={[
              "Unity",
              "Programming",
              "Game Design",
              "AR",
              "Student Project",
            ]}
            link={"https://www.youtube.com/watch?v=t9RwqJnLjy8"}
            buttonText="Gameplay Teaser"
          />

          <ProjectCard
            title="Cozy Winter Market"
            description={t("cozyWinterDescription")}
            image={cozyMarktImage}
            badges={[
              "Unity",
              "Programming",
              "Game Jam",
              "Game Design",
              "Hobby",
            ]}
            link={"https://atmogd.itch.io/cozy-winter-market"}
          />

          <ProjectCard
            title="Pumpkin Harvest"
            description={t("pumpkinHarvestDescription")}
            image={pumpkinHarvestImage}
            badges={[
              "Unity",
              "Programming",
              "Game Design",
              "Game Jam",
              "Hobby",
            ]}
            link={"https://atmogd.itch.io/pumpkin-harvest"}
          />

          <ProjectCard
            title="Witch Way?"
            description={t("witchWayDescription")}
            image={witchWayImage}
            badges={[
              "Unity",
              "Programming",
              "Game Design",
              "Game Jam",
              "Student Project",
            ]}
            link={"https://atmogd.itch.io/witch-way"}
          />

          <ProjectCard
            title="Gravity Pong"
            description={t("gravityPongDescription")}
            image={gravityPongImage}
            badges={[
              "Unity",
              "Programming",
              "Game Design",
              "Machine Learning",
              "Hobby",
            ]}
            link={"https://atmogd.itch.io/gravity-pong"}
          />

          <ProjectCard
            title="Bomberman"
            description={t("bombermanDescription")}
            image={bombermanImage}
            badges={["FUDGE Engine", "Programming", "Student"]}
            link={"https://atmogd.github.io/BomberMan/html/Game.html"}
          />
        </Stack>
        <Box className="titleBar">
          <Center>
            <Title order={2}>3D Modelle</Title>
          </Center>
        </Box>
        <Stack>
          <ProjectCard
            title="Arc Reactor"
            description={t("arcReactorDescription")}
            image={arcImage}
            badges={["Blender", "Substance Painter", "Student"]}
            link={
              "https://sketchfab.com/3d-models/arc-reactor-tony-stark-high-poly-7c57e1f6b3034194a1e3c8abb3a49df2"
            }
            buttonText="3D Model Viewer"
          />

          <ProjectCard
            title="Mjölnir"
            description={t("mjolnirDescription")}
            image={hammerImage}
            badges={["Blender", "Substance Painter", "Student"]}
            link={
              "https://sketchfab.com/3d-models/thors-hammer-mjolnir-high-poly-b5ab1f0f032e40abbe33ef47e53cc7c0"
            }
            buttonText="3D Model Viewer"
          />
        </Stack>
      </Stack>
    </Center>
  );
};

export default Page;
