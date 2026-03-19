"use client";

import { Switch, rem } from "@mantine/core";
import Image from "next/image";
import React, { FunctionComponent } from "react";

import i18n from "@/src/i18n";

interface PageProps {}

const flagSize = 14;

const LanguageSwitch: FunctionComponent<PageProps> = () => {
  const enFlag = (
    <Image
      src="/us.svg"
      width={flagSize}
      height={flagSize}
      alt="English"
      style={{ borderRadius: "50%" }}
    />
  );

  const deFlag = (
    <Image
      src="/de.svg"
      width={flagSize}
      height={flagSize}
      alt="Deutsch"
      style={{ borderRadius: "50%" }}
    />
  );

  return (
    <div>
      <Switch
        size="md"
        color="dark.4"
        m={10}
        thumbIcon={null}
        checked={i18n.language === "en"}
        onLabel={enFlag}
        offLabel={deFlag}
        aria-label="Switch language between German and English"
        styles={{
          trackLabel: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: rem(14),
            height: rem(14),
          },
        }}
        onChange={(event) =>
          i18n.changeLanguage(event.currentTarget.checked ? "en" : "de")
        }
      />
    </div>
  );
};

export default LanguageSwitch;
