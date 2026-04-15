"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Gamepad2, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { LanguageSwitch } from "./LanguageSwitch";

export function SiteHeader() {
  const { t } = useTranslation();
  const path = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/cv", label: t("nav.cv") },
  ] as const;

  function isActive(href: string) {
    if (href === "/") return path === "/";
    return path?.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-[80] bg-ink/85 backdrop-blur-md border-b-2 border-phosphor/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-neon-pink text-black flex items-center justify-center group-hover:bg-neon-cyan transition-colors">
            <Gamepad2 className="w-5 h-5" strokeWidth={2.5} />
          </div>
          <span className="arcade-title text-xs sm:text-sm text-phosphor group-hover:text-neon-pink transition-colors">
            DENNIS<span className="text-neon-pink">.</span>DEV
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className={cn(
                "font-mono text-sm uppercase tracking-wider px-3 py-2 transition-colors relative",
                isActive(link.href)
                  ? "text-neon-pink"
                  : "text-phosphor-dim hover:text-neon-cyan"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-neon-pink shadow-neon-pink" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch />
          <button
            className="md:hidden p-2 text-phosphor hover:text-neon-pink"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t-2 border-phosphor/10 bg-ink">
          <nav className="flex flex-col p-4 gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "font-mono text-sm uppercase tracking-wider px-3 py-3 border-l-2 transition-colors",
                  isActive(link.href)
                    ? "text-neon-pink border-neon-pink"
                    : "text-phosphor-dim border-transparent hover:text-neon-cyan hover:border-neon-cyan"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
