"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowDown,
  Box,
  Coffee,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Gamepad2,
} from "lucide-react";
import dennisRaw from "@/assets/Dennis.jpg";
import dennis8bit from "@/assets/Dennis_8Bit.png";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { unlock } from "@/lib/achievements";

const HERO_SOCIALS = [
  {
    href: "mailto:dennishawran@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://github.com/AtmoGD",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://atmogd.itch.io/",
    label: "itch.io",
    icon: Gamepad2,
  },
  {
    href: "https://sketchfab.com/atmo_gd",
    label: "Sketchfab",
    icon: Box,
  },
  {
    href: "https://www.linkedin.com/in/dennis-hawran-30497b19a/",
    label: "LinkedIn",
    icon: Linkedin,
  },
] as const;

export function Hero() {
  const { t } = useTranslation();
  const [pixel, setPixel] = useState(false);
  const flipCountRef = useRef(0);

  function flipAvatar() {
    setPixel((p) => !p);
    flipCountRef.current += 1;
    if (flipCountRef.current >= 3) unlock("avatarFlipper");
  }

  return (
    <section className="relative min-h-[calc(100svh-5rem)] flex items-center overflow-hidden border-b-2 border-phosphor/10">
      <BackgroundFx />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 py-20 w-full grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <button
            onClick={flipAvatar}
            aria-label="Toggle avatar style"
            className="group relative"
          >
            <div
              className={cn(
                "relative w-40 h-40 sm:w-56 sm:h-56 overflow-hidden border-4 border-neon-pink transition-all",
                "shadow-neon-pink group-hover:border-neon-cyan group-hover:shadow-neon-cyan"
              )}
            >
              <Image
                src={pixel ? dennis8bit : dennisRaw}
                alt="Dennis Hawran"
                fill
                sizes="224px"
                className={cn(
                  "object-cover transition-opacity duration-200",
                  pixel && "[image-rendering:pixelated]"
                )}
                priority
              />
            </div>
            <span className="absolute -bottom-2 -right-2 bg-ink border-2 border-neon-cyan text-neon-cyan px-2 py-1 font-mono text-xs uppercase tracking-wider font-bold">
              {pixel ? "RAW" : "8-BIT"}
            </span>
          </button>
          <div className="flex items-center gap-2 font-mono text-base text-phosphor">
            <MapPin className="w-5 h-5 text-neon-cyan" />
            {t("hero.location")}
          </div>

          <div className="flex items-center gap-2" aria-label="Social links">
            {HERO_SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-11 h-11 border-2 border-phosphor/30 text-phosphor hover:text-neon-cyan hover:border-neon-cyan hover:shadow-neon-cyan hover:-translate-y-0.5 flex items-center justify-center transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex flex-col gap-5"
        >
          <div className="flex items-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-neon-lime text-neon-lime font-mono text-sm uppercase tracking-widest font-bold">
              <span className="w-2.5 h-2.5 bg-neon-lime animate-pulse-slow" />
              {t("hero.status")}
            </span>
          </div>

          <h1 className="arcade-title text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-phosphor leading-[1.1]">
            <span className="inline-block hover:chromatic transition-all">
              {t("hero.name")}
            </span>
          </h1>

          <div className="flex flex-col gap-1 font-mono text-lg sm:text-xl">
            <span className="text-neon-pink text-glow-pink">
              &gt; {t("hero.role")}
            </span>
            <span className="text-phosphor-dim">
              <Coffee className="inline w-4 h-4 mr-2 -mt-1" />
              {t("hero.tagline")}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-3 mt-4">
            <Link href={"/projects" as any} className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                <Sparkles className="w-4 h-4" />
                {t("hero.cta.viewProjects")}
              </Button>
            </Link>
            <a href="mailto:dennishawran@gmail.com" className="w-full sm:w-auto">
              <Button variant="cyan" size="lg" className="w-full sm:w-auto">
                <Coffee className="w-4 h-4" />
                {t("hero.cta.contact")}
              </Button>
            </a>
            <Link href={"/cv" as any} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <FileText className="w-4 h-4" />
                {t("hero.cta.readCv")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-phosphor-dim font-mono text-sm uppercase tracking-widest"
      >
        {t("hero.scrollHint")}
        <ArrowDown className="w-5 h-5 animate-bounce-slow" />
      </motion.div>
    </section>
  );
}

function BackgroundFx() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-bg opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,46,99,0.18), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(0,229,255,0.18), transparent 55%)",
        }}
      />
      <FloatingPixels />
    </>
  );
}

function FloatingPixels() {
  const pixels = Array.from({ length: 14 });
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      {pixels.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const size = 3 + ((i * 2) % 5);
        const delay = (i * 0.3) % 4;
        const duration = 6 + ((i * 1.1) % 5);
        const color =
          i % 3 === 0
            ? "bg-neon-pink"
            : i % 3 === 1
            ? "bg-neon-cyan"
            : "bg-neon-amber";
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={cn("absolute", color)}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
            }}
          />
        );
      })}
    </div>
  );
}
