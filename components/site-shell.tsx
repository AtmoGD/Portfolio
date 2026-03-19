"use client";

import Link from "next/link";
import type { Route } from "next";
import LanguageSwitch from "@/components/language-switch";
import { profile } from "@/src/content/site";
import { localize, useI18n } from "@/src/i18n";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const { language, t } = useI18n();

  const navItems: Array<{ href: Route; label: string }> = [
    { href: "/", label: t("navHome") },
    { href: "/projects", label: t("navProjects") },
    { href: "/about", label: t("navAbout") },
    { href: "/cv", label: t("navCv") },
    { href: "/contact", label: t("navContact") },
  ];

  return (
    <div className="site-root">
      <header className="site-header">
        <div className="container nav-row">
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              ◉
            </span>
            <span>{profile.name}</span>
          </Link>

          <nav aria-label="Main navigation" className="top-nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
            <LanguageSwitch />
          </nav>
        </div>
      </header>

      <main className="container page-content">
        <div className="stack-sm">
          <p className="muted">{localize(profile.title, language)}</p>
          {children}
        </div>
      </main>
    </div>
  );
}
