"use client";

import { useSyncExternalStore } from "react";

export type AchievementId =
  | "firstVisit"
  | "scrolledAbout"
  | "openedProject"
  | "visitedCv"
  | "konami"
  | "found404"
  | "bilingual"
  | "arcadeJunkie"
  | "retroMode"
  | "avatarFlipper";

export const ALL_ACHIEVEMENTS: AchievementId[] = [
  "firstVisit",
  "scrolledAbout",
  "openedProject",
  "visitedCv",
  "konami",
  "found404",
  "bilingual",
  "arcadeJunkie",
  "retroMode",
  "avatarFlipper",
];

const STORAGE_KEY = "portfolio.achievements.v1";

// Stable references — only reassigned on mutation.
// getSnapshot returns the same reference until state changes, avoiding infinite re-renders.
let unlockedArr: AchievementId[] = loadInitial();
let activeToastsArr: { id: AchievementId; at: number }[] = [];

const EMPTY_UNLOCKED: AchievementId[] = [];
const EMPTY_TOASTS: { id: AchievementId; at: number }[] = [];

const unlockedListeners = new Set<() => void>();
const toastListeners = new Set<() => void>();

function loadInitial(): AchievementId[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? (arr as AchievementId[]) : [];
  } catch {
    return [];
  }
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedArr));
  } catch {
    // ignore
  }
}

export function unlock(id: AchievementId) {
  if (unlockedArr.includes(id)) return;
  unlockedArr = [...unlockedArr, id];
  persist();
  unlockedListeners.forEach((l) => l());

  activeToastsArr = [...activeToastsArr, { id, at: Date.now() }];
  toastListeners.forEach((l) => l());
  setTimeout(() => {
    activeToastsArr = activeToastsArr.filter((t) => t.id !== id);
    toastListeners.forEach((l) => l());
  }, 4800);
}

export function dismissToast(id: AchievementId) {
  activeToastsArr = activeToastsArr.filter((t) => t.id !== id);
  toastListeners.forEach((l) => l());
}

export function useActiveToasts() {
  return useSyncExternalStore(
    (cb) => {
      toastListeners.add(cb);
      return () => {
        toastListeners.delete(cb);
      };
    },
    () => activeToastsArr,
    () => EMPTY_TOASTS,
  );
}

export function useUnlockedAchievements() {
  return useSyncExternalStore(
    (cb) => {
      unlockedListeners.add(cb);
      return () => {
        unlockedListeners.delete(cb);
      };
    },
    () => unlockedArr,
    () => EMPTY_UNLOCKED,
  );
}
