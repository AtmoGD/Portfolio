"use client";

import { Carousel } from "@mantine/carousel";
import { Title, Image, AspectRatio, Center, Box, Stack } from "@mantine/core";
import NextImage from "next/image";

import cozyMarktImage from "@/assets/CozyWinterMarket.png";
import unthronedImage from "@/assets/Unthroned.png";
import pumpkinHarvestImage from "@/assets/PumpkinHarvest@0.25x.png";

import Link from "next/link";

export default function Home() {
  return (
    <Center>
      <Stack>

        <Box maw={"36em"} mt={100} mb={250}>
          <Carousel
            slideSize="100%"
            height={"100%"}
            w={"36em"}
            loop
          >
            <Carousel.Slide>
              {/* <Link href={"https://atmogd.itch.io/cozy-winter-market"} target="_blank"> */}
              <Center>
                {/* <AspectRatio ratio={630 / 500} w={"36em"} mx="auto"> */}
                <Image
                  component={NextImage}
                  src={cozyMarktImage}
                  alt="Profile Image"
                  radius={"0%"}
                  w={"36em"}
                />
                {/* </AspectRatio> */}
              </Center>
              {/* </Link> */}
            </Carousel.Slide>
            <Carousel.Slide>
              {/* <Link href={"https://atmogd.itch.io/unthroned"} target="_blank"> */}
              <Center>
                {/* <AspectRatio ratio={630 / 500} w={"36em"} mx="auto"> */}
                <Image
                  component={NextImage}
                  src={unthronedImage}
                  alt="Profile Image"
                  radius={"0%"}
                  w={"36em"}
                />
                {/* </AspectRatio> */}
              </Center>
              {/* </Link> */}
            </Carousel.Slide>
            <Carousel.Slide>
              {/* <Link href={"https://atmogd.itch.io/pumpkin-harvest"} target="_blank"> */}
              <Center>
                {/* <AspectRatio ratio={630 / 500} w={"36em"}> */}
                <Image
                  component={NextImage}
                  src={pumpkinHarvestImage}
                  alt="Profile Image"
                  radius={"0%"}
                  w={"36em"}
                />
                {/* </AspectRatio> */}
              </Center>
              {/* </Link> */}
            </Carousel.Slide>
          </Carousel>
        </Box>
      </Stack>
    </Center>
  );
}
