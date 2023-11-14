import "@mantine/core/styles.css";

import HeaderComponent from "./components/header-component";
import FooterComponent from "./components/footer-component";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import MyAppShell from "./AppShell";

export const metadata = {
  title: "Dennis Hawran",
  description: "Welcome to my website!",
};

export interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          {/* <HeaderComponent /> */}
          {children}
          {/* <MyAppShell>{children}</MyAppShell> */}
          {/* <FooterComponent /> */}
        </MantineProvider>
      </body>
    </html>
  );
}
