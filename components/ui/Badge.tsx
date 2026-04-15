import * as React from "react";
import { cn } from "@/lib/cn";

type BadgeVariant = "pink" | "cyan" | "amber" | "lime" | "violet" | "muted";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  pink: "border-neon-pink/60 text-neon-pink",
  cyan: "border-neon-cyan/60 text-neon-cyan",
  amber: "border-neon-amber/60 text-neon-amber",
  lime: "border-neon-lime/60 text-neon-lime",
  violet: "border-neon-violet/60 text-neon-violet",
  muted: "border-phosphor-dim/40 text-phosphor-dim",
};

export function Badge({
  className,
  variant = "muted",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-sm font-semibold uppercase tracking-wider px-2.5 py-1 border-2 bg-black/30",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
