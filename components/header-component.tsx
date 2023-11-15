"use client";

import React, { FunctionComponent, useState } from "react";
import profileImgSrc from "@/assets/profile.jpg";
import NextImage from "next/image";
import TabSection from "./tab-section-component";
import Link from "next/link";

import {
  AspectRatio,
  Center,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import {
  IconBrandGithub,
  IconBrandItch,
  IconBrandLinkedin,
  IconBrandSketch,
  IconCalendar,
  IconMailFilled,
  IconMapPinFilled,
} from "@tabler/icons-react";

interface PageProps { }

const HeaderComponent: FunctionComponent<PageProps> = () => {
  const [birthday] = useState(new Date(1996, 6, 12));
  const [age] = useState(
    new Date().getUTCFullYear() - birthday.getUTCFullYear()
  );

  return (
    <div>
      <Center w={"100%"} h={"100vh"} className="gradient-background">
        <Stack align="center">
          <Group justify="center">

            <Group justify="center">
              <AspectRatio ratio={1 / 1} w={200} mx="auto">
                <Image
                  component={NextImage}
                  src={profileImgSrc}
                  alt="Profile Image"
                  radius={"50%"}
                />
              </AspectRatio>
            </Group>

            <Group justify="center">
              <Stack h={"100%"} justify="flex-start">
                <Title order={1}>Dennis Hawran</Title>

                <Group>
                  <IconMapPinFilled size={24} />
                  <Text> Augsburg, Germany</Text>
                </Group>

                <Group>
                  <IconCalendar size={24} />
                  <Text> 12.06.1996 ({age})</Text>
                </Group>

                <Group>
                  <IconMailFilled size={24} />
                  <Text> dennishawran@gmail.com</Text>
                </Group>

                <Group>
                  <Link href={"https://atmogd.itch.io/"} target="_blank">
                    <IconBrandItch size={60} />
                  </Link>
                  <Link href={"https://sketchfab.com/atmo_gd"} target="_blank">
                    <IconBrandSketch size={60} />
                  </Link>
                  <Link href={"https://github.com/AtmoGD"} target="_blank">
                    <IconBrandGithub size={60} />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/dennis-hawran-30497b19a/"
                    }
                    target="_blank"
                  >
                    <IconBrandLinkedin size={60} />
                  </Link>
                </Group>
              </Stack>
            </Group>


          </Group>
        </Stack>
      </Center>
      <TabSection />
    </div>
  );
};

export default HeaderComponent;
