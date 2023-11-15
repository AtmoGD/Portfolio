import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./globals.css";
import HeaderComponent from "../components/header-component";

import {
  MantineProvider,
  ColorSchemeScript,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";

export const metadata = {
  title: "Dennis Hawran",
  description: "Welcome to my website!",
};

export interface Props {
  children: React.ReactNode;
}

const primary: MantineColorsTuple = [
  "#ffeeee",
  "#f5dddd",
  "#e2baba",
  "#d09494",
  "#c17473",
  "#b85f5e",
  "#b45454",
  "#9f4445",
  "#8f3b3c",
  "#7f3032",
];

const defaultTheme = createTheme({
  primaryColor: "primary",
  colors: {
    primary,
  },
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={defaultTheme}>
          <HeaderComponent />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
