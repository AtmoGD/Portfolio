"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type LazyMountProps = {
  children: ReactNode;
  /** Placeholder height while children are not yet mounted. */
  placeholderClassName?: string;
  /** IntersectionObserver rootMargin. Larger = earlier pre-mount. */
  rootMargin?: string;
};

/**
 * Delays rendering its children until the placeholder element scrolls near
 * the viewport. Useful below-the-fold for expensive components whose modules
 * we also want to code-split via `next/dynamic`.
 *
 * Once mounted, stays mounted — we don't unmount on scroll-out to avoid
 * re-tearing-down stateful children.
 */
export function LazyMount({
  children,
  placeholderClassName = "min-h-[600px]",
  rootMargin = "200px 0px",
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible, rootMargin]);

  if (visible) return <>{children}</>;
  return <div ref={ref} aria-hidden className={placeholderClassName} />;
}
