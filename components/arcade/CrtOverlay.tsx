"use client";

import { useEffect, useState } from "react";
import { usePreferences } from "@/lib/usePreferences";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function CrtOverlay() {
  const { prefs, hydrated } = usePreferences();
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || !hydrated) return null;
  if (!prefs.crt) return null;

  return (
    <>
      {/* Dense horizontal scanlines — visible dark bars every 3px */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[90]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.55) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Phosphor tint — subtle greenish-cyan wash for CRT glow feel */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[91]"
        style={{
          background:
            "linear-gradient(rgba(18, 180, 200, 0.04), rgba(18, 180, 200, 0.04))",
          mixBlendMode: "screen",
        }}
      />

      {/* Strong vignette — pronounced darkening toward edges */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[92]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Animated flicker — noticeable brightness pulse */}
      {!reduced && (
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-[93] animate-flicker"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            mixBlendMode: "overlay",
          }}
        />
      )}

      {/* Rolling scanline — slow bright band moving vertically for authenticity */}
      {!reduced && (
        <div
          aria-hidden="true"
          className="fixed inset-x-0 pointer-events-none z-[94] h-24 animate-crt-roll"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
          }}
        />
      )}
    </>
  );
}
