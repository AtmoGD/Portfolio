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
  IconBrandItch,
  IconBrandLinkedin,
  IconBrandSketch,
  IconCalendar,
  IconMailFilled,
  IconMapPinFilled,
} from "@tabler/icons-react";

interface PageProps {}

const HeaderComponent: FunctionComponent<PageProps> = () => {
  const [birthday] = useState(new Date(1996, 6, 12));
  const [age] = useState(
    new Date().getUTCFullYear() - birthday.getUTCFullYear()
  );

  return (
    <div>
      <Center w={"100%"} h={"100vh"} className="gradient">
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
                <Text>
                  <IconMapPinFilled size={16} /> Augsburg, Germany
                </Text>
                <Text>
                  <IconCalendar size={16} /> 12.06.1996 ({age})
                </Text>
                <Text>
                  <IconMailFilled size={16} /> dennishawran@gmail.com
                </Text>

                <Group>
                  <Link href={"https://atmogd.itch.io/"} target="_blank">
                    <IconBrandItch />
                  </Link>
                  <Link href={"https://sketchfab.com/atmo_gd"} target="_blank">
                    <IconBrandSketch />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/dennis-hawran-30497b19a/"
                    }
                    target="_blank"
                  >
                    <IconBrandLinkedin />
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
