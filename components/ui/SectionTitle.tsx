import * as React from "react";
import { cn } from "@/lib/cn";

type AccentColor = "pink" | "cyan" | "amber" | "lime" | "violet";

const accentClasses: Record<AccentColor, string> = {
  pink: "text-neon-pink",
  cyan: "text-neon-cyan",
  amber: "text-neon-amber",
  lime: "text-neon-lime",
  violet: "text-neon-violet",
};

const glowClasses: Record<AccentColor, string> = {
  pink: "text-glow-pink",
  cyan: "text-glow-cyan",
  amber: "text-glow-amber",
  lime: "text-glow-cyan",
  violet: "text-glow-pink",
};

interface SectionTitleProps {
  kicker?: string;
  title: string;
  accent?: AccentColor;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  kicker,
  title,
  accent = "pink",
  className,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {kicker && (
        <div
          className={cn(
            "inline-flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-[0.35em]",
            accentClasses[accent]
          )}
        >
          <span className="inline-block w-8 h-[2px] bg-current" />
          {kicker}
          <span className="inline-block w-8 h-[2px] bg-current" />
        </div>
      )}
      <h2
        className={cn(
          "arcade-title text-2xl sm:text-3xl md:text-4xl font-normal",
          accentClasses[accent],
          glowClasses[accent]
        )}
      >
        {title}
      </h2>
    </div>
  );
}
