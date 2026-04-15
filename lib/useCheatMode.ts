"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "portfolio.cheat.v1";
const EVENT = "portfolio:cheat-change";

let cheatState: boolean = readInitial();
const listeners = new Set<() => void>();

function readInitial(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function notify() {
  listeners.forEach((l) => l());
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(EVENT));
  }
}

export function activateCheat() {
  if (cheatState) return;
  cheatState = true;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }
  notify();
}

export function deactivateCheat() {
  if (!cheatState) return;
  cheatState = false;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }
  notify();
}

export function useCheatMode(): boolean {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      const storageHandler = (e: StorageEvent) => {
        if (e.key === STORAGE_KEY) {
          cheatState = e.newValue === "1";
          listeners.forEach((l) => l());
        }
      };
      if (typeof window !== "undefined") {
        window.addEventListener("storage", storageHandler);
      }
      return () => {
        listeners.delete(cb);
        if (typeof window !== "undefined") {
          window.removeEventListener("storage", storageHandler);
        }
      };
    },
    () => cheatState,
    () => false,
  );
}
