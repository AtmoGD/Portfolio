"use client";

import {
  Image,
  AspectRatio,
  Center,
  Box,
  Stack,
  rem,
  Title,
  Group,
  Button,
  NavLink,
} from "@mantine/core";

import { Carousel } from "@mantine/carousel";
import NextImage from "next/image";

import witchWayImage from "@/assets/WitchWay.png";
import unthronedImage from "@/assets/Unthroned.png";
import pumpkinHarvestImage from "@/assets/PumpkinHarvest@0.25x.png";

import { IconArrowLeft, IconArrowRight, IconCoffee } from "@tabler/icons-react";
import Link from "next/link";
import TransitionWrapper from "@/components/transition-wrapper";
import { redirect, usePathname } from "next/navigation";

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <TransitionWrapper>
      <Center>
        <Stack>
          <Box className="titleBar">
            <Center>
              <Title order={2}>{t("aboutMeTitle")}</Title>
            </Center>
          </Box>
          <Center>
            <Stack>
              <Center mb={150} mt={50}>
                <Box maw={"50em"}>
                  <Group justify="center">
                    <IconCoffee style={{ width: rem(80), height: rem(80) }} />
                    <p
                      style={{
                        textAlign: "center",
                        paddingBottom: "2rem",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {t("aboutMeText")}
                    </p>

                    <Group justify="center" align="center">
                      <Button
                        rightSection={<IconArrowRight size={16} />}
                        component={Link}
                        href={"/projects"}
                        w={"25em"}
                      >
                        {t("projectsTitle")}
                      </Button>

                      <Button
                        rightSection={<IconArrowRight size={16} />}
                        component={Link}
                        href={"/cv"}
                        w={"25em"}
                      >
                        {t("cvTitle")}
                      </Button>
                    </Group>
                  </Group>
                </Box>
              </Center>
              {/* <Box className="titleBar" mb={30}>
                <Center>
                  <Title order={2}>{t("lastProjectsTitle")}</Title>
                </Center>
              </Box>
              <Center>
                <Box maw={"36em"} mt={0} mb={150}>
                  <Carousel
                    slideSize="100%"
                    height={"100%"}
                    w={"36em"}
                    loop
                    nextControlIcon={
                      <Box
                        bg={"red"}
                        style={{
                          width: rem(38),
                          height: rem(38),
                          borderRadius: 5,
                        }}
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
                        style={{
                          width: rem(38),
                          height: rem(38),
                          borderRadius: 5,
                        }}
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
              </Center> */}
            </Stack>
          </Center>
        </Stack>
      </Center>
    </TransitionWrapper>
  );
}
