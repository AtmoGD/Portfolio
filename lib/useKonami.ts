"use client";

import { useEffect } from "react";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonami(onActivate: () => void) {
  useEffect(() => {
    let index = 0;
    const handler = (e: KeyboardEvent) => {
      const expected = SEQUENCE[index];
      if (e.key === expected || e.key.toLowerCase() === expected) {
        index++;
        if (index === SEQUENCE.length) {
          index = 0;
          onActivate();
        }
      } else {
        index = e.key === SEQUENCE[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onActivate]);
}
