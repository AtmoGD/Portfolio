"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

const COLORS = ["#ff2e63", "#00e5ff", "#ffd166", "#9bff6b", "#b967ff"];
const EVENT = "portfolio:pixel-confetti";

export function triggerConfetti() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(EVENT));
}

type Piece = {
  id: number;
  left: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  sway: number;
};

export function PixelConfetti() {
  const reduced = useReducedMotion();
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let counter = 0;
    const handle = () => {
      const count = reduced ? 12 : 45;
      const newPieces: Piece[] = Array.from({ length: count }).map(() => ({
        id: ++counter,
        left: Math.random() * 100,
        size: 4 + Math.floor(Math.random() * 6),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        duration: 1.6 + Math.random() * 1.4,
        delay: Math.random() * 0.3,
        sway: (Math.random() - 0.5) * 80,
      }));
      setPieces((prev) => [...prev, ...newPieces]);
      setFlash(true);
      setTimeout(() => setFlash(false), 220);
      setTimeout(() => {
        setPieces((prev) =>
          prev.filter((p) => !newPieces.some((np) => np.id === p.id))
        );
      }, 3500);
    };
    window.addEventListener(EVENT, handle);
    return () => window.removeEventListener(EVENT, handle);
  }, [reduced]);

  return (
    <>
      <AnimatePresence>
        {flash && (
          <motion.div
            key="flash"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: reduced ? 0.25 : 0.55 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 pointer-events-none z-[170] bg-neon-violet mix-blend-screen"
          />
        )}
      </AnimatePresence>
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[165] overflow-hidden"
      >
        {pieces.map((p) => (
          <motion.span
            key={p.id}
            initial={{ y: -20, x: 0, opacity: 1, rotate: 0 }}
            animate={{
              y: "110vh",
              x: p.sway,
              opacity: [1, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              ease: "linear",
            }}
            className="absolute block"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 8px ${p.color}`,
            }}
          />
        ))}
      </div>
    </>
  );
}
