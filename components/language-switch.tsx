"use client";

import {
  AspectRatio,
  Image,
  Switch,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import React, { FunctionComponent } from "react";
import NextImage from "next/image";

import germanImage from "@/assets/de.svg";
import englishImage from "@/assets/us.svg";

interface PageProps {}
// Global State Management um die Sprache zu wechseln und das andere Package für das ändern der Strings
// GlobalStateManagement
// Next-Intl
const LanguageSwitch: FunctionComponent<PageProps> = () => {
  const [language, setLanguage] = React.useState("de");
  const theme = useMantineTheme();
  const englishIcon = (
    <AspectRatio ratio={1 / 1} w={12} mx="auto">
      <Image
        component={NextImage}
        src={englishImage}
        alt="Profile Image"
        radius={"50%"}
      />
    </AspectRatio>
  );

  const germanIcon = (
    <AspectRatio ratio={1 / 1} w={12} mx="auto">
      <Image
        component={NextImage}
        src={germanImage}
        alt="Profile Image"
        radius={"50%"}
      />
    </AspectRatio>
  );
  return (
    <div>
      <Switch
        size="md"
        color="dark.4"
        onLabel={englishIcon}
        offLabel={germanIcon}
      />
      {/* <img src="../../public/de.svg" alt="de" /> */}

      {/* <!-- Here comes the switch --> */}

      {/* <img src="../../public/en.svg" alt="en" /> */}
    </div>
  );
};

export default LanguageSwitch;
