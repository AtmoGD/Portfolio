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

import arcImage from "@/assets/Arc.png";
import hammerImage from "@/assets/Hammer.png";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <Center>
      <Stack align="center">
        <Box bg={"#f7eaea"} w={"100vw"} p={25}>
          <Center>
            <Title order={2}>Games</Title>
          </Center>
        </Box>
        <Stack>
          <ProjectCard
            title="Unthroned"
            description="Unthroned is a twin-stick shooter with base building and tower defense elements. It was developed as a student project for our masters degree. You are playing dave, a cool necromancer who is trying to invade his brothers empire. Go and farm enough souls to upgrade your skills and your home base."
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
            description="Diese Arbeit wurde im Rahmen einer Studienarbeit im WS 2021/22 erstellt. Es wurde ein VR-Spiel entwickelt welches später in einem haptischen VR-Raum installiert und gespielt werden soll. Bei dem haptischen VR-Raum geht es darum keine Controller zur Steuerung in der virtuellen Umgebung mehr zu benötigen. Dafür wird es echte Gegenstände geben, welche in die Hand genommen werden können und mit welchen die virtuelle Welt manipuliert werden kann."
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
            title="Cozy Winter Market"
            description="In this game your only goal is to relax and to build your own Christmas market. First get a nice cozy blanket, grab a cup off tee (or mulled wine) and then start building. The more buildings you have the more customers will visit your Christmas market. But don't forget the decoration! The more decoration you have the more money the customers will spend!"
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
            description="The people in the small suburb near your farm have pretty basic needs: pumpkins. Luckily, that's exactly what you're focused on! So you can plant, water, harvest and deliver your pumpkins - or just take a relieving walk in the woods and enjoy the beauty mother nature presents to you."
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
            description="In a world that keeps getting faster and more chaotic even witches have to be careful not to get stuck. Help the witch to survive as long as possible by making her environment as pleasant as imaginable. In Witch Way? you won't take control of the witch herself, but of the magical world she lives in. Place various objects and set directions to lead her through the dark forest. But be aware, even well-intentioned help can cause trouble!"
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
            description="The gravity is changing after a random time. You can see in which directions the paddles are pulled by the green indicator bar at the top or bottom. Also the speed of the ball is slowly increasing over time. You can play against your friends or an AI."
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
            description="A Bomberman clone i did as my first student game project. It uses a game engine made by students of my university."
            image={bombermanImage}
            badges={["FUDGE Engine", "Programming", "Student"]}
            link={"https://atmogd.github.io/BomberMan/html/Game.html"}
          />
        </Stack>
        <Box bg={"#f7eaea"} w={"100vw"} p={25}>
          <Center>
            <Title order={2}>3D Modelle</Title>
          </Center>
        </Box>
        {/* <Title order={2} mt={50}>
          3D Modelle
        </Title> */}
        <Stack>
          <ProjectCard
            title="Arc Reactor"
            description="A model i made as a student project. Goal was to create any game any game asset."
            image={arcImage}
            badges={["Blender", "Substance Painter", "Student"]}
            link={
              "https://sketchfab.com/3d-models/arc-reactor-tony-stark-high-poly-7c57e1f6b3034194a1e3c8abb3a49df2"
            }
            buttonText="3D Model Viewer"
          />

          <ProjectCard
            title="Mjölnir"
            description="A model i made as a student project. Goal was to create any game any game asset."
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
