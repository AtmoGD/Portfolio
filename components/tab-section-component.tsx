"use client";

import { Center, NavLink } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FunctionComponent } from "react";
import LanguageSwitch from "./language-switch";

interface PageProps {}

const TabSection: FunctionComponent<PageProps> = () => {
  const path = usePathname();

  return (
    <Center>
      <NavLink
        style={{ borderRadius: "8px" }}
        component={Link}
        href="/"
        label="Home"
        active={path === "/"}
      />
      <NavLink
        style={{ borderRadius: "8px" }}
        component={Link}
        href="/cv"
        label="Lebenslauf"
        active={path === "/cv"}
      />
      <NavLink
        style={{ borderRadius: "8px" }}
        component={Link}
        href="/projects"
        label="Projekte"
        active={path === "/projects"}
      />
      <NavLink
        style={{ borderRadius: "8px" }}
        component={Link}
        href="/contact"
        label="Kontakt"
        active={path === "/contact"}
      />
      <LanguageSwitch />
    </Center>
  );
};

export default TabSection;
