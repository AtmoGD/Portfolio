"use client";

import {
  AspectRatio,
  Image,
  Switch,
  rem,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import React, { FunctionComponent } from "react";
import NextImage from "next/image";
import cx from "clsx";

import germanImage from "@/assets/de.svg";
import englishImage from "@/assets/us.svg";

interface PageProps {}
// Global State Management um die Sprache zu wechseln und das andere Package für das ändern der Strings
// GlobalStateManagement
// Next-Intl
const LightModeSwitch: FunctionComponent<PageProps> = () => {
  const theme = useMantineTheme();
  const { setColorScheme } = useMantineColorScheme();
  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <div>
      <Switch
        size="md"
        color="dark.4"
        onLabel={sunIcon}
        offLabel={moonIcon}
        onChange={(event) =>
          setColorScheme(event.currentTarget.checked ? "dark" : "light")
        }
      />
    </div>
  );
};

export default LightModeSwitch;
