"use client";

import { useCallback } from "react";
import { useKonami } from "@/lib/useKonami";
import { unlock } from "@/lib/achievements";
import { activateCheat, useCheatMode } from "@/lib/useCheatMode";
import { triggerConfetti } from "./PixelConfetti";

export function KonamiListener() {
  const isCheating = useCheatMode();
  const handle = useCallback(() => {
    unlock("konami");
    if (!isCheating) {
      activateCheat();
      triggerConfetti();
    } else {
      triggerConfetti();
    }
  }, [isCheating]);
  useKonami(handle);
  return null;
}
