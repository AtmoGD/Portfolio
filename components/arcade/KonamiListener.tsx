"use client";

import { useCallback } from "react";
import { useKonami } from "@/lib/useKonami";
import { unlock } from "@/lib/achievements";

export function KonamiListener() {
  const handle = useCallback(() => {
    unlock("konami");
    document.documentElement.classList.add("konami-active");
  }, []);
  useKonami(handle);
  return null;
}
