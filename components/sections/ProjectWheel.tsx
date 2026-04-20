"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion as useFramerReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/cn";
import { galleryBySlug } from "@/content/galleryImages";
import { projects, type Project } from "@/content/projects";

type Tile = {
  img: StaticImageData;
  slug: string;
  project: Project;
  index: number; // image index within the project (1-based for a11y)
};

// Flatten all gallery screenshots to a single list of clickable tiles.
// Built at module load — cheap, read-only.
const ALL_TILES: Tile[] = Object.entries(galleryBySlug).flatMap(
  ([slug, images]) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return [];
    return images.map((img, i) => ({
      img,
      slug,
      project,
      index: i + 1,
    }));
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

const accentBorder: Record<AccentKey, string> = {
  pink: "border-neon-pink shadow-neon-pink",
  cyan: "border-neon-cyan shadow-neon-cyan",
  amber: "border-neon-amber shadow-neon-amber",
  lime: "border-neon-lime shadow-[0_0_24px_rgba(155,255,107,0.55)]",
  violet: "border-neon-violet shadow-[0_0_24px_rgba(185,103,255,0.55)]",
};

const accentText: Record<AccentKey, string> = {
  pink: "text-neon-pink",
  cyan: "text-neon-cyan",
  amber: "text-neon-amber",
  lime: "text-neon-lime",
  violet: "text-neon-violet",
};

// Slot offset -> visual transform. Index in array == offset + 2, range [-2..2].
type Slot = {
  offset: number;
  x: string;
  scale: number;
  opacity: number;
  zIndex: number;
  blurPx: number;
  hideOnMobile: boolean;
};

const SLOTS: Slot[] = [
  { offset: -2, x: "-95%", scale: 0.58, opacity: 0.30, zIndex: 10, blurPx: 2, hideOnMobile: true },
  { offset: -1, x: "-55%", scale: 0.78, opacity: 0.65, zIndex: 20, blurPx: 1, hideOnMobile: false },
  { offset:  0, x:  "0%", scale: 1.00, opacity: 1.00, zIndex: 30, blurPx: 0, hideOnMobile: false },
  { offset:  1, x: "55%", scale: 0.78, opacity: 0.65, zIndex: 20, blurPx: 1, hideOnMobile: false },
  { offset:  2, x: "95%", scale: 0.58, opacity: 0.30, zIndex: 10, blurPx: 2, hideOnMobile: true },
];

const AUTO_ADVANCE_MS = 4000;

export function ProjectWheel() {
  const { t } = useTranslation();
  const reduced = useFramerReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Shuffle once on client mount. SSR renders placeholder in LazyMount, so no
  // hydration mismatch risk.
  const [items, setItems] = useState<Tile[]>(() => ALL_TILES);
  useEffect(() => {
    setItems(shuffle(ALL_TILES));
  }, []);

  const [idx, setIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const len = items.length;

  // Auto-advance
  useEffect(() => {
    if (reduced || isPaused || len === 0) return;
    const id = window.setInterval(
      () => setIdx((i) => (i + 1) % len),
      AUTO_ADVANCE_MS,
    );
    return () => window.clearInterval(id);
  }, [reduced, isPaused, len]);

  // Nudge index (keyboard + buttons). Resets the auto-advance clock naturally
  // via the useEffect deps (idx change → no direct dep, but triggering on a
  // short tick is fine; we just rely on rhythm continuing from this moment).
  const advance = (step: number) => {
    setIdx((i) => (i + step + len) % len);
  };

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

  // Current item at center — drives caption + accent.
  const center = items[idx];
  const centerAccent: AccentKey = center.project.accent;

  const spring = reduced
    ? { duration: 0 }
    : ({ type: "spring" as const, stiffness: 260, damping: 26 });

  return (
    <section
      className="py-20 sm:py-28 border-y-2 border-phosphor/10 overflow-hidden"
      aria-roledescription="carousel"
      aria-label={t("wheel.title")}
      ref={containerRef}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div
            className={cn(
              "inline-flex items-center gap-3 font-mono text-base sm:text-lg uppercase tracking-[0.3em] font-bold",
              "text-neon-cyan",
            )}
          >
            <span className="inline-block w-10 h-[3px] bg-current" />
            {t("wheel.kicker")}
            <span className="inline-block w-10 h-[3px] bg-current" />
          </div>
          <h2
            className={cn(
              "arcade-title text-2xl sm:text-3xl md:text-4xl font-normal text-neon-cyan text-glow-cyan text-center",
            )}
          >
            {t("wheel.title")}
          </h2>
        </div>

        {/* Wheel */}
        <div
          className="relative w-full mx-auto flex items-center justify-center"
          style={{
            // Room for tile scale 1.0 + 2*55% offset ≈ up to ~210% of tile width.
            // Tile-width tops out at 22rem; give the carousel a stable height
            // so layout doesn't shift when items set.
            height: "clamp(220px, 42vw, 380px)",
          }}
        >
          {SLOTS.map((slot) => {
            // Map slot → item at (idx + slot.offset) mod len.
            const item = items[(idx + slot.offset + len * 10) % len];
            return (
              <SlotTile
                key={slot.offset}
                slot={slot}
                item={item}
                spring={spring}
                isCenter={slot.offset === 0}
              />
            );
          })}
        </div>

        {/* Caption + Controls */}
        <div className="mt-10 flex flex-col items-center gap-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={center.slug}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="text-center"
            >
              <div
                className={cn(
                  "arcade-title text-lg sm:text-xl",
                  accentText[centerAccent],
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
              className={cn(
                "inline-flex items-center justify-center w-10 h-10 border-2 border-phosphor/30",
                "text-phosphor hover:border-neon-cyan hover:text-neon-cyan transition-colors",
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => advance(1)}
              aria-label={t("wheel.next")}
              className={cn(
                "inline-flex items-center justify-center w-10 h-10 border-2 border-phosphor/30",
                "text-phosphor hover:border-neon-cyan hover:text-neon-cyan transition-colors",
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SlotTile({
  slot,
  item,
  spring,
  isCenter,
}: {
  slot: Slot;
  item: Tile;
  spring: object;
  isCenter: boolean;
}) {
  const accent: AccentKey = item.project.accent;
  const borderClass = isCenter ? accentBorder[accent] : "border-phosphor/30";

  return (
    <motion.div
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        slot.hideOnMobile && "hidden sm:block",
      )}
      style={{ zIndex: slot.zIndex }}
      animate={{
        x: slot.x,
        scale: slot.scale,
        opacity: slot.opacity,
      }}
      transition={spring}
    >
      <Link
        href={`/projects/${item.slug}` as any}
        aria-label={`${item.project.title} — screenshot ${item.index}`}
        className={cn(
          "block relative w-[min(70vw,22rem)] aspect-video border-2 overflow-hidden bg-ink-100",
          "transition-shadow duration-300",
          borderClass,
        )}
        style={{ filter: slot.blurPx ? `blur(${slot.blurPx}px)` : undefined }}
        tabIndex={isCenter ? 0 : -1}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={item.img.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={item.img}
              alt=""
              fill
              sizes="(max-width: 640px) 70vw, 22rem"
              className="object-cover"
              priority={isCenter}
            />
          </motion.div>
        </AnimatePresence>
      </Link>
    </motion.div>
  );
}
