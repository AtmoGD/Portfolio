"use client";

import { Carousel } from "@mantine/carousel";
import { Title, Image, AspectRatio, Center, Box, Stack } from "@mantine/core";
import NextImage from "next/image";

import cozyMarktImgSrc from "@/assets/CozyWinterMarket.png";

export default function Home() {
  return (
    <Center>
      <Stack>
        <Box maw={"36em"}>
          <Title>Willkommen!</Title>
        </Box>
        <Box maw={"36em"}>
          <Title>Projekte von mir</Title>
          <Carousel
            slideSize="100%"
            height={200}
            slideGap="xs"
            draggable={false}
            withIndicators
            loop
          >
            <Carousel.Slide>
              <AspectRatio ratio={1 / 1} w={200} mx="auto">
                <Image
                  component={NextImage}
                  src={cozyMarktImgSrc}
                  alt="Profile Image"
                  radius={"50%"}
                />
              </AspectRatio>
            </Carousel.Slide>
            <Carousel.Slide>
              <AspectRatio ratio={1 / 1} w={200} mx="auto">
                <Image
                  component={NextImage}
                  src={cozyMarktImgSrc}
                  alt="Profile Image"
                  radius={"50%"}
                />
              </AspectRatio>
            </Carousel.Slide>
            <Carousel.Slide>
              <AspectRatio ratio={1 / 1} w={200} mx="auto">
                <Image
                  component={NextImage}
                  src={cozyMarktImgSrc}
                  alt="Profile Image"
                  radius={"50%"}
                />
              </AspectRatio>
            </Carousel.Slide>
          </Carousel>
        </Box>
      </Stack>
    </Center>
  );
}
