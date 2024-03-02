"use client";

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

  const badges = {
    unity: t("unity"),
    programming: t("programming"),
    studentProject: t("studentProject"),
    engineDevelopment: t("engineDevelopment"),
    gameDesign: t("gameDesign"),
    unreal: t("unreal"),
    vr: t("vr"),
    motionCapturing: t("motionCapturing"),
    bachelorThesis: t("bachelorThesis"),
    ar: t("ar"),
    gameJam: t("gameJam"),
    hobby: t("hobby"),
    machineLearning: t("machineLearning"),
    fudgeEngine: t("fudge"),
    blender: t("blender"),
    substancePainter: t("substancePainter"),
  };

  return (
    <Center>
      <Stack align="center">
        <Box className="titleBar">
          <Center>
            <Title order={2}>{t("gamesTitle")}</Title>
          </Center>
        </Box>
        <Stack>
          <ProjectCard
            title="Unthroned"
            description={t("unthronedDescription")}
            image={unthronedImage}
            badges={[
              badges.unity,
              badges.programming,
              badges.engineDevelopment,
              badges.gameDesign,
              badges.studentProject,
            ]}
            link={"https://atmogd.itch.io/unthroned"}
            buttonText={t("play")}
          />

          <ProjectCard
            title="Oasis"
            description={t("oasisDescription")}
            image={oasisImage}
            badges={[
              badges.unreal,
              badges.programming,
              badges.gameDesign,
              badges.vr,
              badges.motionCapturing,
              badges.bachelorThesis,
            ]}
            link={"https://youtu.be/Wh6ieci--3E"}
            buttonText={t("gameplayTeaser")}
          />

          <ProjectCard
            title="Aurea"
            description={t("aureaDescription")}
            image={aureaImage}
            badges={[
              badges.unity,
              badges.programming,
              badges.gameDesign,
              badges.ar,
              badges.studentProject,
            ]}
            link={"https://www.youtube.com/watch?v=t9RwqJnLjy8"}
            buttonText={t("gameplayTeaser")}
          />

          <ProjectCard
            title="Cozy Winter Market"
            description={t("cozyWinterDescription")}
            image={cozyMarktImage}
            badges={[
              badges.unity,
              badges.programming,
              badges.gameJam,
              badges.gameDesign,
              badges.hobby,
            ]}
            link={"https://atmogd.itch.io/cozy-winter-market"}
            buttonText={t("play")}
          />

          <ProjectCard
            title="Pumpkin Harvest"
            description={t("pumpkinHarvestDescription")}
            image={pumpkinHarvestImage}
            badges={[
              badges.unity,
              badges.programming,
              badges.gameDesign,
              badges.gameJam,
              badges.hobby,
            ]}
            link={"https://atmogd.itch.io/pumpkin-harvest"}
            buttonText={t("play")}
          />

          <ProjectCard
            title="Witch Way?"
            description={t("witchWayDescription")}
            image={witchWayImage}
            badges={[
              badges.unity,
              badges.programming,
              badges.gameDesign,
              badges.gameJam,
              badges.studentProject,
            ]}
            link={"https://atmogd.itch.io/witch-way"}
            buttonText={t("play")}
          />

          <ProjectCard
            title="Gravity Pong"
            description={t("gravityPongDescription")}
            image={gravityPongImage}
            badges={[
              badges.unity,
              badges.programming,
              badges.gameDesign,
              badges.machineLearning,
              badges.hobby,
            ]}
            link={"https://atmogd.itch.io/gravity-pong"}
            buttonText={t("play")}
          />

          <ProjectCard
            title="Bomberman"
            description={t("bombermanDescription")}
            image={bombermanImage}
            badges={[
              badges.fudgeEngine,
              badges.programming,
              badges.studentProject,
            ]}
            link={"https://atmogd.github.io/BomberMan/html/Game.html"}
            buttonText={t("play")}
          />
        </Stack>
        <Box className="titleBar">
          <Center>
            <Title order={2}>{t("modelsTitle")}</Title>
          </Center>
        </Box>
        <Stack>
          <ProjectCard
            title="Arc Reactor"
            description={t("arcReactorDescription")}
            image={arcImage}
            badges={[
              badges.blender,
              badges.substancePainter,
              badges.studentProject,
            ]}
            link={
              "https://sketchfab.com/3d-models/arc-reactor-tony-stark-high-poly-7c57e1f6b3034194a1e3c8abb3a49df2"
            }
            buttonText={t("modelViewer")}
          />

          <ProjectCard
            title="Mjölnir"
            description={t("mjolnirDescription")}
            image={hammerImage}
            badges={[
              badges.blender,
              badges.substancePainter,
              badges.studentProject,
            ]}
            link={
              "https://sketchfab.com/3d-models/thors-hammer-mjolnir-high-poly-b5ab1f0f032e40abbe33ef47e53cc7c0"
            }
            buttonText={t("modelViewer")}
          />
        </Stack>
      </Stack>
    </Center>
  );
};

export default Page;
