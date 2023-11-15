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
} from "@mantine/core";

interface PageProps {
  title: string;
  description: string;
  image: StaticImageData;
  badges: string[];
}

const ProjectCard: FunctionComponent<PageProps> = ({
  title,
  description,
  image,
  badges,
}: PageProps) => {
  return (
    <Box maw={"36em"}>
      <Group>
        <AspectRatio ratio={1 / 1} w={250}>
          <Image
            component={NextImage}
            src={image}
            alt="Profile Image"
            radius={"50%"}
          />
        </AspectRatio>
        <Stack>
          <Title>{title}</Title>
          <Group>
            {badges.map((badge) => (
              <Badge>{badge}</Badge>
            ))}
          </Group>
          <Text>{description}</Text>
        </Stack>
      </Group>
    </Box>
  );
};

export default ProjectCard;
