"use client";

import { useSyncExternalStore } from "react";

export type AchievementId =
  | "firstVisit"
  | "scrolledAbout"
  | "openedProject"
  | "visitedCv"
  | "konami"
  | "found404";

const STORAGE_KEY = "portfolio.achievements.v1";

type State = Set<AchievementId>;

const listeners = new Set<() => void>();
let activeToasts: { id: AchievementId; at: number }[] = [];
const toastListeners = new Set<() => void>();

function loadState(): State {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as AchievementId[]);
  } catch {
    return new Set();
  }
}

let state: State | null = null;

function getState(): State {
  if (state === null) state = loadState();
  return state;
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(Array.from(getState())),
    );
  } catch {
    // ignore
  }
}

export function unlock(id: AchievementId) {
  const s = getState();
  if (s.has(id)) return;
  s.add(id);
  persist();
  listeners.forEach((l) => l());

  activeToasts = [...activeToasts, { id, at: Date.now() }];
  toastListeners.forEach((l) => l());
  setTimeout(() => {
    activeToasts = activeToasts.filter((t) => t.id !== id);
    toastListeners.forEach((l) => l());
  }, 4800);
}

export function dismissToast(id: AchievementId) {
  activeToasts = activeToasts.filter((t) => t.id !== id);
  toastListeners.forEach((l) => l());
}

export function useActiveToasts() {
  return useSyncExternalStore(
    (cb) => {
      toastListeners.add(cb);
      return () => toastListeners.delete(cb);
    },
    () => activeToasts,
    () => [] as { id: AchievementId; at: number }[],
  );
}

export function useUnlockedAchievements() {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => Array.from(getState()),
    () => [] as AchievementId[],
  );
}
