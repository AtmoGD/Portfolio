"use client";

import {
  Timeline,
  Text,
  Title,
  Stack,
  Box,
  Group,
  Badge,
  Center,
} from "@mantine/core";
import {
  IconCircleOff,
  IconCodeDots,
  IconMapPinFilled,
  IconSchool,
} from "@tabler/icons-react";
import React, { FunctionComponent } from "react";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <Stack align="center">
      <Box bg={"#f7eaea"} w={"100vw"} p={25}>
        <Center>
          <Title order={2}>Lebenslauf</Title>
        </Center>
      </Box>
      <Stack>
        <Group align="start" justify="left" ml={100} mt={0} mb={250}>
          <Box maw={"20em"} mr={50}>
            <Title mt={15} mb={15} order={3}>
              Skills
            </Title>
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
                <IconCodeDots />
              </Group>
            </Group>

            <Group justify="flex-start">
              <Group w={"3em"}>
                <Text>Java</Text>
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
                <Text>Blender</Text>
              </Group>
              <Group>
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
                <Text>Python</Text>
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
          </Box>
          <Stack>
            <Title order={2}>Bildung</Title>

            <Timeline active={4} bulletSize={24} lineWidth={2}>
              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Schillerschule Rheinfelden"
              >
                <Text c="dimmed" size="sm">
                  2001 - 2004
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
                  2004 - 2011
                </Text>
                <Text size="xs" mt={4}>
                  Abschluss: Hauptschulabschluss
                </Text>
                <IconCircleOff size={12} />
                <Text size="xs" mt={4} component="span">
                  {" "}
                  2.4
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Global Safety Textiles"
              >
                <Badge>Ausbildung</Badge>
                <Text c="dimmed" size="sm">
                  2011 - 2014
                </Text>
                <Text size="xs" mt={4}>
                  Abschluss: Produktionsmechaniker -/ Textil
                </Text>
                <IconCircleOff size={12} />
                <Text size="xs" mt={4} component="span">
                  {" "}
                  2.4
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Berufskolleg Weil am Rhein"
              >
                <Text c="dimmed" size="sm">
                  2016 - 2017
                </Text>
                <Text size="xs" mt={4}>
                  Abschluss: Allgemeine Fachhochschulreife
                </Text>
                <IconCircleOff size={12} />
                <Text size="xs" mt={4} component="span">
                  {" "}
                  2.8
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Fachhochschule Furtwangen"
              >
                <Badge>B.Sc</Badge>
                <Text c="dimmed" size="sm">
                  2019 - 2022
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
                <Badge>M.A</Badge>
                <Text c="dimmed" size="sm">
                  2022 - <b>heute</b>
                </Text>
                <Text size="xs" mt={4}>
                  Abschluss: Interaktive Mediensysteme -/ Game Development
                </Text>
              </Timeline.Item>
            </Timeline>
          </Stack>

          <Stack>
            <Title order={2}>Berufserfahrung</Title>

            <Timeline active={3} bulletSize={24} lineWidth={2}>
              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Global Safety Textiles"
              >
                <Text c="dimmed" size="sm">
                  September 2014 - Juli 2016
                </Text>
                <Text size="xs" mt={4}>
                  Produktionsmechaniker
                </Text>
                <Text size="xs" maw={"36em"}>
                  Programmieren und Reparieren von CNC Nähmaschinen und Laser
                  Cuttern
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Hochschule Furtwangen"
              >
                <Text c="dimmed" size="sm">
                  März 2020 - August 2020
                </Text>
                <Text size="xs" mt={4}>
                  Praktikum
                </Text>
                <Text size="xs" maw={"36em"}>
                  Organisation den Spielelabors, unterstützen von Studenten und
                  entwicklung verschiedener Anwendungen
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Hochschule Furtwangen"
              >
                <Text c="dimmed" size="sm">
                  September 2020 - August 2021
                </Text>
                <Text size="xs" mt={4}>
                  Tutor &quotEntwicklung Interaktiver Anwendungen&quot
                </Text>
                <Text size="xs" maw={"36em"}>
                  Unterstützen von Studenten bei der Entwicklung von Spielen mit
                  der FUDGE Engine
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Hochschule Furtwangen"
              >
                <Text c="dimmed" size="sm">
                  September 2021 - März 2022
                </Text>
                <Text size="xs" mt={4}>
                  Tutor &quotUnity Engine&quot
                </Text>
                <Text size="xs" maw={"36em"}>
                  Unterstützen von Studenten bei der Entwicklung von Spielen mit
                  der Unity Engine
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Universität Hohenheim"
              >
                <Text c="dimmed" size="sm">
                  März 2021 - <b>heute</b>
                </Text>
                <Text size="xs" mt={4}>
                  Werksstudent
                </Text>
                <Text size="xs" maw={"36em"}>
                  Entwickeln eines Chatbots spezialisiert auf die Lehre
                </Text>
              </Timeline.Item>
            </Timeline>
          </Stack>
        </Group>
        <Group align="start" justify="flex-start" maw={"72em"}>
          {/* <Box maw={"20em"}>
            <Title mt={15} mb={15} order={3}>Hobbys</Title>
            <Group>
              <IconCodeCircle /><Text >Programmieren</Text>
            </Group>

            <Group>
              <IconMusic /><Text >Musik (Trompete & Schlagzeug)</Text>
            </Group>
          </Box> */}

          {/* <Box maw={"20em"}>
            <Title mt={15} mb={15} order={3}>Ehrenämter</Title>
            <Group>
              <IconCircle />
              <Text>Fachschaftsmitglied</Text>
            </Group>

            <Group>
              <IconCircle />
              <Text>Ausbildungsbotschafter</Text>
            </Group>

            <Group>
              <IconCircle />
              <Text>Uniformwart der Stadtmusik Rheinfelden</Text>
            </Group>

            <Group>
              <IconCircle />
              <Text>Game Design Workshops im Jugendhilfswerk Freiburg</Text>
            </Group>
          </Box> */}
        </Group>
      </Stack>
    </Stack>
  );
};

export default Page;
