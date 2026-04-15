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
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[90]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0.22) 1px, transparent 1px, transparent 3px)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[91]"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      {!reduced && (
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-[92] animate-flicker"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)",
          }}
        />
      )}
    </>
  );
}
