"use client";

import {
  Timeline,
  Text,
  Title,
  Center,
  Stack,
  Box,
  Group,
} from "@mantine/core";
import {
  IconCircleOff,
  IconCodeDots,
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMapPinFilled,
  IconMessageDots,
  IconSchool,
} from "@tabler/icons-react";
import React, { FunctionComponent } from "react";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <Group align="start" justify="center" mt={50}>
      <Stack>
        <Title order={1}>(Aus-)Bildung</Title>

        <Timeline active={4} bulletSize={24} lineWidth={2}>
          <Timeline.Item
            bullet={<IconSchool size={12} />}
            title="Schillerschule Rheinfelden"
          >
            <Text c="dimmed" size="sm">
              2002 - 2006
            </Text>
            <Text size="xs" mt={4}>
              Abschluss: Grundschulabschluss
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSchool size={12} />}
            title="Schillerschule Rheinfelden"
          >
            <Text c="dimmed" size="sm">
              2006 - 2011
            </Text>
            <Text size="xs" mt={4}>
              Abschluss: Hauptschulabschluss
            </Text>
            <IconCircleOff size={12} />
            <Text size="xs" mt={4} component="span">
              {" "}
              2.3
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSchool size={12} />}
            title="Global Safety Textiles"
          >
            <Text c="dimmed" size="sm">
              2011 - 2014
            </Text>
            <Text size="xs" mt={4}>
              Abschluss: Produktionsmechaniker -/ Textil
            </Text>
            <IconCircleOff size={12} />
            <Text size="xs" mt={4} component="span">
              {" "}
              2.1
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSchool size={12} />}
            title="Berufskolleg Weil am Rhein"
          >
            <Text c="dimmed" size="sm">
              2014 - 2015
            </Text>
            <Text size="xs" mt={4}>
              Abschluss: Allgemeine Fachhochschulreife
            </Text>
            <IconCircleOff size={12} />
            <Text size="xs" mt={4} component="span">
              {" "}
              2.1
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSchool size={12} />}
            title="Fachhochschule Furtwangen"
          >
            <Text c="dimmed" size="sm">
              2016 - 2019
            </Text>
            <Text size="xs" mt={4}>
              Abschluss: (Medien)Informatik B.Sc
            </Text>
            <IconCircleOff size={12} />
            <Text size="xs" mt={4} component="span">
              {" "}
              1.6
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconMapPinFilled size={12} />}
            title="Technische Hochschule Augsburg"
          >
            <Text c="dimmed" size="sm">
              2022 - heute
            </Text>
            <Text size="xs" mt={4}>
              Abschluss: Interaktive Mediensysteme -/ Game Development
            </Text>
          </Timeline.Item>
        </Timeline>

        <Title mt={25} order={1}>
          Berufserfahrung
        </Title>

        <Timeline active={4} bulletSize={24} lineWidth={2}>
          <Timeline.Item
            bullet={<IconSchool size={12} />}
            title="Global Safety Textiles (Produktionsmechaniker)"
          >
            <Text c="dimmed" size="sm">
              Juni 2014 - August 2016
            </Text>
            <Text size="xs" mt={4}>
              Programmieren und Reparieren von CNC Nähmaschinen und Laser
              Cuttern
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSchool size={12} />}
            title="Global Safety Textiles"
          >
            <Text c="dimmed" size="sm">
              2014 - 2016 Produktionsmechaniker
            </Text>
            <Text size="xs" mt={4}>
              Programmieren und Reparieren von CNC Nähmaschinen und Laser
              Cuttern
            </Text>
          </Timeline.Item>
        </Timeline>
      </Stack>
      <Stack>
        <Box>
          <Title>Skills</Title>
          <Group justify="flex-start">
            <Group w={"3em"}>
              <Text>Unity</Text>
            </Group>
            <Group>
              <IconCodeDots />
              <IconCodeDots />
              <IconCodeDots />
              <IconCodeDots />
              <IconCodeDots />
            </Group>
          </Group>

          <Group justify="flex-start">
            <Group w={"3em"}>
              <Text>C#</Text>
            </Group>
            <Group>
              <IconCodeDots />
              <IconCodeDots />
              <IconCodeDots />
              <IconCodeDots />
            </Group>
          </Group>

          <Group justify="flex-start">
            <Group w={"3em"}>
              <Text>Unreal</Text>
            </Group>
            <Group>
              <IconCodeDots />
              <IconCodeDots />
              <IconCodeDots />
            </Group>
          </Group>

          <Group justify="flex-start">
            <Group w={"3em"}>
              <Text>C++</Text>
            </Group>
            <Group>
              <IconCodeDots />
              <IconCodeDots />
            </Group>
          </Group>

          <Group justify="flex-start">
            <Group w={"3em"}>
              <Text>Python</Text>
            </Group>
            <Group>
              <IconCodeDots />
              <IconCodeDots />
              <IconCodeDots />
            </Group>
          </Group>
        </Box>

        <Box mt={25} maw={"36em"}>
          <Title>Hobbys</Title>
          <Text>Programmieren</Text>
          <Text>Musik</Text>
        </Box>

        <Box mt={25} maw={"36em"}>
          <Title>Ehrenämter</Title>
          <Text>6 Semester Fachschaft</Text>
          <Text>Ausbildungsbotschafter</Text>
          <Text>Game Design für jugendliche</Text>
        </Box>
      </Stack>
    </Group>
  );
};

export default Page;
