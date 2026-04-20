import type { Metadata, Viewport } from "next";
import { Inter, Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

import { Providers } from "@/components/providers/Providers";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CrtOverlay } from "@/components/arcade/CrtOverlay";
import { CursorTrail } from "@/components/arcade/CursorTrail";
import { BootSequence } from "@/components/arcade/BootSequence";
import { KonamiListener } from "@/components/arcade/KonamiListener";
import { AchievementToaster } from "@/components/arcade/AchievementToaster";
import { PixelConfetti } from "@/components/arcade/PixelConfetti";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a10",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dennis-hawran.dev"),
  title: "Dennis Hawran — Gameplay Programmer",
  description:
    "Portfolio of Dennis Hawran — Gameplay Programmer with a Master's in Game Development. Unity, Unreal, VR, AR, game jams and an unhealthy love for coffee.",
  openGraph: {
    title: "Dennis Hawran — Gameplay Programmer",
    description:
      "Unity, Unreal, VR, AR, game jams. Powered by coffee, seeking a team.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${pressStart.variable} ${vt323.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-ink text-phosphor min-h-screen antialiased"
      >
        <Providers>
          <SiteHeader />
          {children}
          <SiteFooter />
          <CrtOverlay />
          <CursorTrail />
          <BootSequence />
          <KonamiListener />
          <AchievementToaster />
          <PixelConfetti />
        </Providers>
      </body>
    </html>
  );
}
