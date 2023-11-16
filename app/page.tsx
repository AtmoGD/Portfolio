"use client";

import {
  Image,
  AspectRatio,
  Center,
  Box,
  Stack,
  ActionIcon,
  rem,
  Title,
  Transition,
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";
import NextImage from "next/image";

import witchWayImage from "@/assets/WitchWay.png";
import unthronedImage from "@/assets/Unthroned.png";
import pumpkinHarvestImage from "@/assets/PumpkinHarvest@0.25x.png";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import TransitionWrapper from "@/components/transition-wrapper";

export default function Home() {
  return (
    <TransitionWrapper>
      <Center>
        <Stack>
          <Center>
            <Title order={2} mt={100}>
              Letzte Projekte
            </Title>
          </Center>
          <Box maw={"36em"} mt={25} mb={250}>
            <Carousel
              slideSize="100%"
              height={"100%"}
              w={"36em"}
              loop
              nextControlIcon={
                <Box
                  bg={"red"}
                  style={{ width: rem(38), height: rem(38), borderRadius: 5 }}
                >
                  <IconArrowRight
                    color="white"
                    style={{
                      width: rem(32),
                      height: rem(32),
                      marginTop: 3,
                      marginLeft: 3,
                    }}
                  />
                </Box>
              }
              previousControlIcon={
                <Box
                  bg={"red"}
                  style={{ width: rem(38), height: rem(38), borderRadius: 5 }}
                >
                  <IconArrowLeft
                    color="white"
                    style={{
                      width: rem(32),
                      height: rem(32),
                      marginTop: 3,
                      marginLeft: 3,
                    }}
                  />
                </Box>
              }
            >
              <Carousel.Slide>
                <Link href={"/projects"}>
                  <AspectRatio ratio={630 / 500} w={"36em"} mx="auto">
                    <Image
                      component={NextImage}
                      src={witchWayImage}
                      alt="Profile Image"
                      radius={"0%"}
                      w={"36em"}
                    />
                  </AspectRatio>
                </Link>
              </Carousel.Slide>
              <Carousel.Slide>
                <Link href={"/projects"}>
                  <AspectRatio ratio={630 / 500} w={"36em"} mx="auto">
                    <Image
                      component={NextImage}
                      src={unthronedImage}
                      alt="Profile Image"
                      radius={"0%"}
                      w={"36em"}
                    />
                  </AspectRatio>
                </Link>
              </Carousel.Slide>
              <Carousel.Slide>
                <Link href={"/projects"}>
                  <AspectRatio ratio={630 / 500} w={"36em"}>
                    <Image
                      component={NextImage}
                      src={pumpkinHarvestImage}
                      alt="Profile Image"
                      radius={"0%"}
                      w={"36em"}
                    />
                  </AspectRatio>
                </Link>
              </Carousel.Slide>
            </Carousel>
          </Box>
        </Stack>
      </Center>
    </TransitionWrapper>
  );
}
