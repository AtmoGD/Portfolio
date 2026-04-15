"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowDown, Coffee, MapPin, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile_compressed.jpg";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Hero() {
  const { t } = useTranslation();
  const [pixel, setPixel] = useState(false);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden border-b-2 border-phosphor/10">
      <BackgroundFx />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 py-20 w-full grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start gap-4"
        >
          <button
            onClick={() => setPixel((p) => !p)}
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
                src={profileImg}
                alt="Dennis Hawran"
                fill
                sizes="224px"
                className={cn(
                  "object-cover transition-all duration-300",
                  pixel && "contrast-125 saturate-150"
                )}
                style={
                  pixel
                    ? {
                        filter:
                          "contrast(1.25) saturate(1.6) hue-rotate(-5deg) blur(0.5px)",
                        imageRendering: "pixelated",
                      }
                    : undefined
                }
                priority
              />
              {pixel && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 2px, transparent 2px, transparent 5px), repeating-linear-gradient(90deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 2px, transparent 2px, transparent 5px)",
                  }}
                />
              )}
              {pixel && (
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-scanline-overlay" />
              )}
            </div>
            <span className="absolute -bottom-2 -right-2 bg-ink border-2 border-neon-cyan text-neon-cyan px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
              {pixel ? "RAW" : "8-BIT"}
            </span>
          </button>
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-phosphor-dim">
            <MapPin className="w-4 h-4" />
            {t("hero.location")}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex flex-col gap-5"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 border-2 border-neon-lime text-neon-lime font-mono text-[11px] uppercase tracking-widest">
              <span className="w-2 h-2 bg-neon-lime animate-pulse-slow" />
              {t("hero.status")}
            </span>
            <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-widest text-phosphor-dim">
              {t("hero.pressStart")}
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

          <div className="flex flex-wrap gap-3 mt-4">
            <Link href={"/projects" as any}>
              <Button variant="primary" size="lg">
                <Sparkles className="w-4 h-4" />
                {t("hero.cta.viewProjects")}
              </Button>
            </Link>
            <Link href={"/cv" as any}>
              <Button variant="outline" size="lg">
                {t("hero.cta.readCv")}
              </Button>
            </Link>
            <a href="mailto:dennishawran@gmail.com">
              <Button variant="cyan" size="lg">
                <Coffee className="w-4 h-4" />
                {t("hero.cta.contact")}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-phosphor-dim font-mono text-[10px] uppercase tracking-widest"
      >
        {t("hero.scrollHint")}
        <ArrowDown className="w-4 h-4 animate-bounce-slow" />
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
