"use client";

import { useCallback, useEffect, useState } from "react";

type Preferences = {
  crt: boolean;
  sound: boolean;
  bootSeen: boolean;
  language: "de" | "en";
};

const DEFAULTS: Preferences = {
  crt: true,
  sound: false,
  bootSeen: false,
  language: "de",
};

const STORAGE_KEY = "portfolio.prefs.v1";

function readPrefs(): Preferences {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

function writePrefs(prefs: Preferences) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // ignore
  }
}

export function usePreferences() {
  const [prefs, setPrefs] = useState<Preferences>(DEFAULTS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setPrefs(readPrefs());
    setHydrated(true);
  }, []);

  const update = useCallback((patch: Partial<Preferences>) => {
    setPrefs((prev) => {
      const next = { ...prev, ...patch };
      writePrefs(next);
      return next;
    });
  }, []);

  return { prefs, update, hydrated };
}
