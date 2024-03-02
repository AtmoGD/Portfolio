"use client";

import { Center, NavLink, Stack } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FunctionComponent } from "react";
import LightModeSwitch from "./light-mode-switch";
import LanguageSwitch from "./language-switch";
import { useTranslation } from "react-i18next";

interface PageProps {}

const TabSection: FunctionComponent<PageProps> = () => {
  const { t } = useTranslation();
  const path = usePathname();
  let smallViewport = window.innerWidth < 768;

  const innerContent = (
    <>
      {/* <NavLink
        style={{ borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}
        component={Link}
        href="/"
        label="Home"
        active={path === "/"}
        maw={"10em"}
        m={15}
      /> */}

      <NavLink
        style={{ borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}
        component={Link}
        href="/projects"
        label={t("projectsTitle")}
        active={path === "/projects"}
        maw={"10em"}
        m={15}
      />

      <NavLink
        style={{ borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}
        component={Link}
        href="/cv"
        label={t("cvTitle")}
        active={path === "/cv"}
        maw={"10em"}
        m={15}
      />

      {/* <NavLink
        style={{ borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}
        component={Link}
        href="/contact"
        label="Kontakt"
        active={path === "/contact"}
        maw={"10em"}
        m={15}
      /> */}

      <LightModeSwitch />
      <LanguageSwitch />
    </>
  );

  if (smallViewport) {
    return (
      <Stack justify="center" align="center" className="tabBar">
        {innerContent}
      </Stack>
    );
  } else {
    return <Center className="tabBar">{innerContent}</Center>;
  }
};

export default TabSection;
