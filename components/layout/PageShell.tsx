import * as React from "react";
import { cn } from "@/lib/cn";

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16",
        className
      )}
    >
      {children}
    </main>
  );
}
