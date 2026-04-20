"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion as useFramerReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/cn";
import { galleryBySlug } from "@/content/galleryImages";
import { projects, type Project } from "@/content/projects";

type Tile = {
  img: StaticImageData;
  slug: string;
  project: Project;
  index: number;
};

// Flatten once at module load.
const ALL_TILES: Tile[] = Object.entries(galleryBySlug).flatMap(
  ([slug, images]) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return [];
    return images.map((img, i) => ({ img, slug, project, index: i + 1 }));
  },
);

function shuffle<T>(arr: readonly T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

type AccentKey = Project["accent"];

const accentRgba: Record<AccentKey, string> = {
  pink: "255, 46, 99",
  cyan: "0, 229, 255",
  amber: "255, 209, 102",
  lime: "155, 255, 107",
  violet: "185, 103, 255",
};

const accentBorder: Record<AccentKey, string> = {
  pink: "border-neon-pink",
  cyan: "border-neon-cyan",
  amber: "border-neon-amber",
  lime: "border-neon-lime",
  violet: "border-neon-violet",
};

const accentText: Record<AccentKey, string> = {
  pink: "text-neon-pink",
  cyan: "text-neon-cyan",
  amber: "text-neon-amber",
  lime: "text-neon-lime",
  violet: "text-neon-violet",
};

const AUTO_ADVANCE_MS = 4200;
const VISIBLE_RANGE = 3; // show ±3 around center (total 7 mounted)

// Visual decay tables by absolute offset from the center slot.
const SCALE_BY_ABS: Record<number, number> = {
  0: 1.0,
  1: 0.78,
  2: 0.58,
  3: 0.42,
};
const OPACITY_BY_ABS: Record<number, number> = {
  0: 1.0,
  1: 0.72,
  2: 0.32,
  3: 0.08,
};

function useTileWidth() {
  const [w, setW] = useState(352); // 22rem fallback
  useLayoutEffect(() => {
    const update = () => {
      // clamp(240, 80vw, 24rem) — bigger than v1 to fill the section
      const vw = window.innerWidth;
      const next = Math.max(240, Math.min(vw * 0.72, 24 * 16));
      setW(next);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return w;
}

export default function ProjectWheel() {
  const { t } = useTranslation();
  const reduced = useFramerReducedMotion();
  const tileW = useTileWidth();
  const step = tileW * 0.48; // overlap: flanks partially behind center

  const [items, setItems] = useState<Tile[]>(() => ALL_TILES);
  useEffect(() => {
    setItems(shuffle(ALL_TILES));
  }, []);

  const [idx, setIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const len = items.length;

  useEffect(() => {
    if (reduced || isPaused || len === 0) return;
    const id = window.setInterval(
      () => setIdx((i) => (i + 1) % len),
      AUTO_ADVANCE_MS,
    );
    return () => window.clearInterval(id);
  }, [reduced, isPaused, len]);

  const advance = (step: number) =>
    setIdx((i) => (i + step + len) % len);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      advance(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      advance(-1);
    }
  };

  if (len === 0) return null;

  // Windowed items with wrap-around. Each visible slot renders the item at
  // (idx + offset) mod len, keyed by item index so framer preserves identity
  // as the window slides.
  const visible = Array.from(
    { length: VISIBLE_RANGE * 2 + 1 },
    (_, i) => i - VISIBLE_RANGE,
  ).map((offset) => {
    const itemIdx = (idx + offset + len * 10_000) % len;
    return { offset, item: items[itemIdx], itemIdx };
  });

  const center = items[idx];
  const spring = reduced
    ? { duration: 0 }
    : ({ type: "spring" as const, stiffness: 220, damping: 28, mass: 0.9 });

  return (
    <section
      className="py-20 sm:py-28 bg-ink-50 border-y-2 border-phosphor/10 overflow-hidden"
      aria-roledescription="carousel"
      aria-label={t("wheel.title")}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="inline-flex items-center gap-3 font-mono text-base sm:text-lg uppercase tracking-[0.3em] font-bold text-neon-cyan">
            <span className="inline-block w-10 h-[3px] bg-current" />
            {t("wheel.kicker")}
            <span className="inline-block w-10 h-[3px] bg-current" />
          </div>
          <h2 className="arcade-title text-2xl sm:text-3xl md:text-4xl font-normal text-neon-cyan text-glow-cyan text-center">
            {t("wheel.title")}
          </h2>
        </div>

        {/* Stage */}
        <div
          className="relative w-full mx-auto"
          style={{
            height: `calc(${tileW}px * 9 / 16 * 1.05)`,
          }}
        >
          <AnimatePresence initial={false}>
            {visible.map(({ offset, item, itemIdx }) => {
              const absDist = Math.abs(offset);
              const scale = SCALE_BY_ABS[absDist] ?? 0;
              const opacity = OPACITY_BY_ABS[absDist] ?? 0;
              const accent: AccentKey = item.project.accent;
              const isCenter = offset === 0;
              const glow = isCenter
                ? `0 0 28px rgba(${accentRgba[accent]}, 0.55), 0 0 60px rgba(${accentRgba[accent]}, 0.18)`
                : `0 0 0px rgba(${accentRgba[accent]}, 0)`;

              return (
                <motion.div
                  key={itemIdx}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: tileW,
                    height: (tileW * 9) / 16,
                    marginLeft: -tileW / 2,
                    marginTop: -((tileW * 9) / 16) / 2,
                    zIndex: 30 - absDist,
                  }}
                  initial={{
                    x: offset * step,
                    scale: scale * 0.9,
                    opacity: 0,
                  }}
                  animate={{
                    x: offset * step,
                    scale,
                    opacity,
                    boxShadow: glow,
                  }}
                  exit={{ opacity: 0, scale: scale * 0.9 }}
                  transition={spring}
                >
                  <Link
                    href={`/projects/${item.slug}` as any}
                    aria-label={`${item.project.title} — screenshot ${item.index}`}
                    tabIndex={isCenter ? 0 : -1}
                    className={cn(
                      "group block w-full h-full border-2 overflow-hidden bg-ink-100 relative",
                      accentBorder[accent],
                    )}
                    onClick={() => {
                      // Brief pause so click doesn't feel pre-empted by auto-advance.
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 1500);
                    }}
                  >
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 72vw, 24rem"
                      className="object-cover"
                      priority={isCenter}
                    />
                    {isCenter && (
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{
                          background: `linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.6) 100%)`,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Caption + Controls */}
        <div className="mt-12 flex flex-col items-center gap-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={center.slug}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="text-center min-h-[2.5rem]"
            >
              <div
                className={cn(
                  "arcade-title text-lg sm:text-xl",
                  accentText[center.project.accent],
                )}
              >
                {center.project.title}
              </div>
              <div className="sr-only" aria-live="polite">
                {t("wheel.srCurrent", { title: center.project.title })}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => advance(-1)}
              aria-label={t("wheel.prev")}
              className="inline-flex items-center justify-center w-10 h-10 border-2 border-phosphor/30 text-phosphor hover:border-neon-cyan hover:text-neon-cyan transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => advance(1)}
              aria-label={t("wheel.next")}
              className="inline-flex items-center justify-center w-10 h-10 border-2 border-phosphor/30 text-phosphor hover:border-neon-cyan hover:text-neon-cyan transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
