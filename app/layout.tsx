import "./globals.css";
import type { Metadata } from "next";
import SiteShell from "@/components/site-shell";
import { I18nProvider } from "@/src/i18n";

export const metadata: Metadata = {
  title: "Dennis Hawran · Gameplay & Systems Developer",
  description:
    "Portfolio focused on playable systems, technical ownership, and production-ready gameplay implementation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <SiteShell>{children}</SiteShell>
        </I18nProvider>
      </body>
    </html>
  );
}
