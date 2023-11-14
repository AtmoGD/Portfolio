"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, NavLink } from "@mantine/core";
import type { Props } from "./layout";
import Link from "next/link";

function MyAppShell({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink component={Link} label="Home" href="/" />
        <NavLink component={Link} label="CV" href="/cv" />
        <NavLink component={Link} label="Projects" href="/projects" />
        <NavLink component={Link} label="Contact" href="/contact" />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

export default MyAppShell;
