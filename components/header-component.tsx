"use client";

import React, { FunctionComponent } from "react";
import profileImgSrc from "@/assets/profile_compressed.jpg";
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
  IconArrowDown,
  IconBrandGithub,
  IconBrandItch,
  IconBrandLinkedin,
  IconCalendar,
  IconCube,
  IconMailFilled,
  IconMapPinFilled,
} from "@tabler/icons-react";

interface PageProps {}

const HeaderComponent: FunctionComponent<PageProps> = () => {

  // Thanks to: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
  function getAge(dateString :string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  return (
    <Stack gap={0}>
      <Center w={"100%"} h={"100vh"} className="gradient-background">
        <Stack align="center">
          <Group justify="center">
            <Group justify="center">
              <AspectRatio ratio={1 / 1} w={200} mx={"auto"}>
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
                  <Text> 12.06.1996 ({getAge("1996-06-12")})</Text>
                </Group>

                <Group>
                  <IconMailFilled size={24} />
                  <Text> dennishawran@gmail.com</Text>
                </Group>

                <Group>
                  <Link
                    href={"https://atmogd.itch.io/"}
                    target="_blank"
                    className="headerIcon"
                  >
                    <IconBrandItch size={50} />
                  </Link>
                  <Link
                    href={"https://github.com/AtmoGD"}
                    target="_blank"
                    className="headerIcon"
                  >
                    <IconBrandGithub size={50} />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/dennis-hawran-30497b19a/"
                    }
                    target="_blank"
                    className="headerIcon"
                  >
                    <IconBrandLinkedin size={50} />
                  </Link>
                  <Link
                    href={"https://sketchfab.com/atmo_gd"}
                    target="_blank"
                    className="headerIcon"
                  >
                    <IconCube size={50} />
                  </Link>
                </Group>
              </Stack>
            </Group>
          </Group>
        </Stack>
      </Center>
      <IconArrowDown size={60} className="headerArrow" />
      <TabSection />
    </Stack>
  );
};

export default HeaderComponent;
