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
  IconBriefcase,
} from "@tabler/icons-react";
import React, { FunctionComponent } from "react";

import { useTranslation } from "react-i18next";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  const { t } = useTranslation();
  return (
    <Stack align="center">
      <Box className="titleBar">
        <Center>
          <Title order={2}>{t("cvTitle")}</Title>
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
            <Title order={2}>{t("educationTitle")}</Title>

            <Timeline active={5} bulletSize={24} lineWidth={2} reverseActive>
              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title={t("universityAugsburg")}
              >
                <Badge>M.A</Badge>
                <Text c="dimmed" size="sm">
                  2022 - 2024
                </Text>
                <Text size="md" mt={4}>
                  {t("interactiveMediaSystems")}
                </Text>
                <IconCircleOff size={12} />
                <Text size="xs" mt={4} component="span">
                  {" "}
                  1.4
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title={t("universityFurtwangen")}
              >
                <Badge>B.Sc</Badge>
                <Text c="dimmed" size="sm">
                  2019 - 2022
                </Text>
                <Text size="md" mt={4}>
                  {t("mediaInformatics")}
                </Text>
                <IconCircleOff size={12} />
                <Text size="xs" mt={4} component="span">
                  {" "}
                  1.6
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title={t("vocationalCollege")}
              >
                <Text c="dimmed" size="sm">
                  2016 - 2017
                </Text>
                <Text size="md" mt={4}>
                  {t("collegeCertificate")}
                </Text>
                <IconCircleOff size={12} />
                <Text size="xs" mt={4} component="span">
                  {" "}
                  2.8
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
                <Text size="md" mt={4}>
                  {t("productionMechanic")}
                </Text>
                <IconCircleOff size={12} />
                <Text size="xs" mt={4} component="span">
                  {" "}
                  2.4
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Schillerschule Rheinfelden"
              >
                <Text c="dimmed" size="sm">
                  2004 - 2011
                </Text>
                <Text size="md" mt={4}>
                  Hauptschule
                </Text>
                <IconCircleOff size={12} />
                <Text size="xs" mt={4} component="span">
                  {" "}
                  2.4
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconSchool size={12} />}
                title="Schillerschule Rheinfelden"
              >
                <Text c="dimmed" size="sm">
                  2001 - 2004
                </Text>
                <Text size="md" mt={4}>
                  Grundschule
                </Text>
              </Timeline.Item>
            </Timeline>
          </Stack>

          <Stack>
            <Title order={2}>{t("workExperienceTitle")}</Title>

            <Timeline active={3} bulletSize={24} lineWidth={2} reverseActive>
              <Timeline.Item
                bullet={<IconMapPinFilled size={12} />}
                title="Universität Hohenheim"
              >
                <Text c="dimmed" size="sm">
                  März 2021 - <b>heute</b>
                </Text>
                <Text size="md" mt={4}>
                  Werksstudent
                </Text>
                <Text size="xs" maw={"36em"}>
                  Entwickeln eines Chatbots spezialisiert auf die Lehre
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconBriefcase size={12} />}
                title="Hochschule Furtwangen"
              >
                <Text c="dimmed" size="sm">
                  September 2021 - März 2022
                </Text>
                <Text size="md" mt={4}>
                  Tutor "Unity Engine"
                </Text>
                <Text size="xs" maw={"36em"}>
                  Unterstützen von Studenten bei der Entwicklung von Spielen mit
                  der Unity Engine
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconBriefcase size={12} />}
                title="Hochschule Furtwangen"
              >
                <Text c="dimmed" size="sm">
                  September 2020 - August 2021
                </Text>
                <Text size="md" mt={4}>
                  Tutor "Entwicklung Interaktiver Anwendungen"&quot"
                </Text>
                <Text size="xs" maw={"36em"}>
                  Unterstützen von Studenten bei der Entwicklung von Spielen mit
                  der FUDGE Engine
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconBriefcase size={12} />}
                title="Hochschule Furtwangen"
              >
                <Text c="dimmed" size="sm">
                  März 2020 - August 2020
                </Text>
                <Text size="md" mt={4}>
                  Praktikum im Spiellabor
                </Text>
                <Text size="xs" maw={"36em"}>
                  Organisation des Spielelabors, unterstützen von Studierenden
                  und entwicklung verschiedener Anwendungen
                </Text>
              </Timeline.Item>

              <Timeline.Item
                bullet={<IconBriefcase size={12} />}
                title="Global Safety Textiles"
              >
                <Text c="dimmed" size="sm">
                  September 2014 - Juli 2016
                </Text>
                <Text size="md" mt={4}>
                  Produktionsmechaniker
                </Text>
                <Text size="xs" maw={"36em"}>
                  Programmieren und Reparieren von CNC Nähmaschinen und Laser
                  Cuttern
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
