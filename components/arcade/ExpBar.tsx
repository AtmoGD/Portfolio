"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";
import { useCheatMode } from "@/lib/useCheatMode";

type Accent = "pink" | "cyan" | "amber" | "lime" | "violet";

const accentFill: Record<Accent, string> = {
  pink: "bg-neon-pink",
  cyan: "bg-neon-cyan",
  amber: "bg-neon-amber",
  lime: "bg-neon-lime",
  violet: "bg-neon-violet",
};

const accentText: Record<Accent, string> = {
  pink: "text-neon-pink",
  cyan: "text-neon-cyan",
  amber: "text-neon-amber",
  lime: "text-neon-lime",
  violet: "text-neon-violet",
};

interface ExpBarProps {
  label: string;
  level: number;
  accent?: Accent;
  icon?: React.ReactNode;
}

export function ExpBar({ label, level, accent = "pink", icon }: ExpBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const cheating = useCheatMode();
  const effectiveLevel = cheating ? 99 : level;
  const segments = 20;
  const filled = cheating ? segments : Math.round((level / 100) * segments);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 font-mono text-base uppercase tracking-wider text-phosphor font-bold">
          {icon}
          {label}
        </span>
        <span
          className={cn(
            "font-display text-sm transition-colors",
            cheating ? "text-neon-violet animate-pulse" : accentText[accent]
          )}
        >
          LV.{effectiveLevel}
        </span>
      </div>
      <div className="flex gap-[2px] bg-ink-100 p-[2px] border-2 border-phosphor/20">
        {Array.from({ length: segments }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scaleY: 0.5 }}
            animate={
              inView && i < filled
                ? { opacity: 1, scaleY: 1 }
                : { opacity: 0.1, scaleY: 0.5 }
            }
            transition={{
              duration: 0.12,
              delay: i * 0.035,
              ease: "easeOut",
            }}
            className={cn(
              "h-3.5 flex-1",
              i < filled
                ? cheating
                  ? "bg-neon-violet"
                  : accentFill[accent]
                : "bg-phosphor/10"
            )}
          />
        ))}
      </div>
    </div>
  );
}
