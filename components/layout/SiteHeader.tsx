"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Gamepad2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { LanguageSwitch } from "./LanguageSwitch";
import { AchievementHub } from "@/components/arcade/AchievementHub";
import { CheatBanner } from "@/components/arcade/CheatBanner";

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

  // Lock body scroll while drawer is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Close drawer on route change.
  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  // Close drawer on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-[120] bg-ink/95 backdrop-blur-md border-b-2 border-phosphor/15">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 bg-neon-pink text-black flex items-center justify-center group-hover:bg-neon-cyan transition-colors">
            <Gamepad2 className="w-7 h-7" strokeWidth={2.5} />
          </div>
          <span className="arcade-title text-base sm:text-lg text-phosphor group-hover:text-neon-pink transition-colors">
            DENNIS<span className="text-neon-pink">.</span>DEV
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className={cn(
                "font-mono text-base lg:text-lg uppercase tracking-wider px-4 py-3 transition-colors relative font-semibold",
                isActive(link.href)
                  ? "text-neon-pink"
                  : "text-phosphor hover:text-neon-cyan"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-1 left-4 right-4 h-[3px] bg-neon-pink shadow-neon-pink" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop-only controls */}
        <div className="hidden md:flex items-center gap-3">
          <CheatBanner />
          <AchievementHub />
          <LanguageSwitch />
        </div>

        {/* Mobile-only burger */}
        <button
          className="md:hidden p-2 text-phosphor hover:text-neon-pink transition-colors"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="w-7 h-7" strokeWidth={2.5} />
        </button>
      </div>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={links}
        isActive={isActive}
      />
    </header>
  );
}

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  links: readonly { href: string; label: string }[];
  isActive: (href: string) => boolean;
}

function MobileDrawer({ open, onClose, links, isActive }: MobileDrawerProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[130] md:hidden"
            aria-hidden="true"
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-[min(88vw,22rem)] bg-ink border-l-2 border-neon-pink shadow-[0_0_30px_rgba(255,46,99,0.3)] z-[140] md:hidden flex flex-col overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="sticky top-0 flex items-center justify-between h-20 px-5 border-b-2 border-phosphor/15 bg-ink z-10">
              <span className="arcade-title text-base text-neon-pink">
                MENU
              </span>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-2 text-phosphor hover:text-neon-pink transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>

            <nav className="flex flex-col p-4 gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href as any}
                  onClick={onClose}
                  className={cn(
                    "font-mono text-lg uppercase tracking-wider px-4 py-4 border-l-4 transition-colors font-bold",
                    isActive(link.href)
                      ? "text-neon-pink border-neon-pink bg-neon-pink/5"
                      : "text-phosphor border-transparent hover:text-neon-cyan hover:border-neon-cyan hover:bg-phosphor/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-2 px-5 py-5 border-t-2 border-phosphor/10 flex flex-col gap-4">
              <span className="font-mono text-sm uppercase tracking-widest text-phosphor-dim font-bold">
                ▸ Stats
              </span>
              <AchievementHub />
              <CheatBanner />
            </div>

            <div className="px-5 py-5 border-t-2 border-phosphor/10 flex flex-col gap-4">
              <span className="font-mono text-sm uppercase tracking-widest text-phosphor-dim font-bold">
                ▸ Language
              </span>
              <LanguageSwitch />
            </div>

            <div className="mt-auto px-5 py-5 border-t-2 border-phosphor/10">
              <span className="font-mono text-sm text-phosphor-dim/80">
                Press ESC or tap outside to close
              </span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
