"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 font-display text-xs sm:text-sm uppercase tracking-wider transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-neon-pink text-black hover:shadow-neon-pink active:translate-y-[2px] border-2 border-neon-pink",
        cyan:
          "bg-neon-cyan text-black hover:shadow-neon-cyan active:translate-y-[2px] border-2 border-neon-cyan",
        amber:
          "bg-neon-amber text-black hover:shadow-neon-amber active:translate-y-[2px] border-2 border-neon-amber",
        outline:
          "bg-transparent text-phosphor border-2 border-phosphor/40 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-neon-cyan",
        ghost:
          "bg-transparent text-phosphor hover:text-neon-pink border-2 border-transparent",
      },
      size: {
        sm: "px-3 py-2",
        md: "px-5 py-3",
        lg: "px-7 py-4 text-sm sm:text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
