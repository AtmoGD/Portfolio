"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import LanguageSwitch from "@/components/language-switch";
import { profile } from "@/src/content/site";
import { localize, useI18n } from "@/src/i18n";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const { language, t } = useI18n();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navItems: Array<{ href: Route; label: string }> = [
    { href: "/", label: t("navHome") },
    { href: "/projects", label: t("navProjects") },
    { href: "/about", label: t("navAbout") },
    { href: "/cv", label: t("navCv") },
    { href: "/contact", label: t("navContact") },
  ];

  useEffect(() => {
    if (typeof document === "undefined") return;

    document.body.style.overflow = isMobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  return (
    <div className="site-root">
      <header className="site-header">
        <div className="container nav-row">
          <div className="top-bar-main">
            <Link href="/" className="brand" onClick={() => setIsMobileNavOpen(false)}>
              <span className="brand-mark" aria-hidden="true">
                ◉
              </span>
              <span>{profile.name}</span>
            </Link>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
            >
              <span aria-hidden="true">☰</span>
              <span className="sr-only">{t("openMenu")}</span>
            </button>
          </div>

          <div className="nav-desktop-area">
            <nav aria-label="Main navigation" className="top-nav" data-desktop>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>
            <LanguageSwitch />
          </div>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${isMobileNavOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileNavOpen}
        id="mobile-nav-drawer"
      >
        <div className="mobile-nav-backdrop" onClick={() => setIsMobileNavOpen(false)} />
        <aside className="mobile-nav-drawer">
          <div className="mobile-nav-head">
            <p className="muted">{profile.name}</p>
            <button type="button" className="menu-close" aria-label={t("closeMenu")} onClick={() => setIsMobileNavOpen(false)}>
              ×
            </button>
          </div>
          <LanguageSwitch />
          <nav aria-label="Main navigation" className="mobile-nav-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link" onClick={() => setIsMobileNavOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
      </div>

      <main className="container page-content">
        <div className="stack-sm">
          <p className="muted">{localize(profile.title, language)}</p>
          {children}
        </div>
      </main>
    </div>
  );
}
