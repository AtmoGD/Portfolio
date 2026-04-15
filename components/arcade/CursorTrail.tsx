"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Dot = { x: number; y: number; life: number; id: number };

export function CursorTrail() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const dotsRef = useRef<Dot[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const idRef = useRef(0);

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;
    setEnabled(true);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const w = Math.min(
        window.innerWidth,
        document.documentElement.clientWidth
      );
      const h = Math.min(
        window.innerHeight,
        document.documentElement.clientHeight
      );
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    // Re-run after paint to catch DevTools device-mode switches that don't fire resize.
    const raf = requestAnimationFrame(resize);
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      dotsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
        id: idRef.current++,
      });
      if (dotsRef.current.length > 30) dotsRef.current.shift();
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dotsRef.current.forEach((d) => {
        d.life -= 0.04;
      });
      dotsRef.current = dotsRef.current.filter((d) => d.life > 0);
      for (const d of dotsRef.current) {
        const size = 4 * d.life;
        ctx.fillStyle = `rgba(255,46,99,${d.life * 0.8})`;
        ctx.fillRect(d.x - size / 2, d.y - size / 2, size, size);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[95]"
      style={{ width: "100vw", height: "100vh", maxWidth: "100%" }}
    />
  );
}
