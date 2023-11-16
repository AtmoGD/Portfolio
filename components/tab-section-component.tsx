"use client";

import { Center, NavLink } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FunctionComponent } from "react";
import LightModeSwitch from "./light-mode-switch";

interface PageProps {}

const TabSection: FunctionComponent<PageProps> = () => {
  const path = usePathname();

  return (
    <Center className="tabBar">
      <NavLink
        style={{ borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}
        component={Link}
        href="/"
        label="Home"
        active={path === "/"}
        maw={"10em"}
        m={15}
      />
      <NavLink
        style={{ borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}
        component={Link}
        href="/cv"
        label="Lebenslauf"
        active={path === "/cv"}
        maw={"10em"}
        m={15}
      />
      <NavLink
        style={{ borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}
        component={Link}
        href="/projects"
        label="Projekte"
        active={path === "/projects"}
        maw={"10em"}
        m={15}
      />
      <NavLink
        style={{ borderRadius: "8px", textAlign: "center", fontWeight: "bold" }}
        component={Link}
        href="/contact"
        label="Kontakt"
        active={path === "/contact"}
        maw={"10em"}
        m={15}
      />
      <LightModeSwitch />
    </Center>
  );
};

export default TabSection;
