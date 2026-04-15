"use client";

import { useSyncExternalStore } from "react";

export type Preferences = {
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

let state: Preferences = loadInitial();
const listeners = new Set<() => void>();

function loadInitial(): Preferences {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

function notify() {
  listeners.forEach((l) => l());
}

export function updatePreferences(patch: Partial<Preferences>) {
  state = { ...state, ...patch };
  persist();
  notify();
}

const SERVER_SNAPSHOT: Preferences = DEFAULTS;

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      state = loadInitial();
      notify();
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("storage", onStorage);
  }
  return () => {
    listeners.delete(cb);
    if (typeof window !== "undefined") {
      window.removeEventListener("storage", onStorage);
    }
  };
}

export function usePreferences() {
  const prefs = useSyncExternalStore(
    subscribe,
    () => state,
    () => SERVER_SNAPSHOT,
  );

  // hydrated flag: false on server render, true after client hydration.
  // useSyncExternalStore handles the SSR/hydrate transition.
  const hydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  return { prefs, update: updatePreferences, hydrated };
}
