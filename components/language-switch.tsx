"use client";

import {
  Switch,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";

import React, { FunctionComponent } from "react";

import i18n from "@/src/i18n";

interface PageProps {}

const LanguageSwitch: FunctionComponent<PageProps> = () => {
  const deFlag = (
    <img
      src="/de.svg"
      style={{ width: rem(14), height: rem(14), borderRadius: "50%" }}
    />
  );

  const enFlag = (
    <img
      src="/us.svg"
      style={{ width: rem(14), height: rem(14), borderRadius: "50%" }}
    />
  );

  return (
    <div>
      <Switch
        size="md"
        color="dark.4"
        m={10}
        onLabel={deFlag}
        offLabel={enFlag}
        onChange={(event) =>
          i18n.changeLanguage(event.currentTarget.checked ? "en" : "de")
        }
      />
    </div>
  );
};

export default LanguageSwitch;
