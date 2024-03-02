"use client";

import React, { FunctionComponent } from "react";
import NextImage, { StaticImageData } from "next/image";
import {
  AspectRatio,
  Image,
  Title,
  Text,
  Box,
  Group,
  Stack,
  Badge,
  Button,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

interface PageProps {
  title: string;
  description: string;
  image: StaticImageData;
  badges: string[];
  link: string;
  buttonText?: string;
  radius?: string;
}

const ProjectCard: FunctionComponent<PageProps> = ({
  title,
  description,
  image,
  badges,
  link,
  buttonText = "Spielen",
  radius = "50%",
}: PageProps) => {
  return (
    <Box p={25}>
      <Group>
        <AspectRatio ratio={1 / 1} w={300}>
          <Image
            component={NextImage}
            src={image}
            alt="Profile Image"
            radius={radius}
          />
        </AspectRatio>
        <Stack>
          <Title order={2}>{title}</Title>
          <Group maw={"36em"}>
            {badges.map((badge) => (
              <Badge key={badge} color="primary.4">
                {badge}
              </Badge>
            ))}
          </Group>
          <Text maw={"36em"}>{description}</Text>
          <Button
            rightSection={<IconArrowRight size={16} />}
            onClick={() => {
              window.open(link, "_blank");
            }}
          >
            {buttonText}
          </Button>
        </Stack>
      </Group>
    </Box>
  );
};

export default ProjectCard;
