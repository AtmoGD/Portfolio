"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Trophy, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  ALL_ACHIEVEMENTS,
  useUnlockedAchievements,
} from "@/lib/achievements";
import { cn } from "@/lib/cn";

export function AchievementHub() {
  const { t } = useTranslation();
  const unlocked = useUnlockedAchievements();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const total = ALL_ACHIEVEMENTS.length;
  const found = unlocked.length;
  const missing = total - found;

  const tooltip =
    found === 0
      ? t("achievements.tooltipNone")
      : found === total
        ? t("achievements.tooltipAll")
        : t("achievements.tooltipSome", { missing });

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={t("achievements.hubTitle")}
        title={tooltip}
        className="group inline-flex items-center gap-2 px-3.5 py-2 border-2 border-phosphor/40 text-phosphor hover:text-neon-amber hover:border-neon-amber transition-colors font-mono text-base font-bold"
      >
        <Trophy className="w-5 h-5 text-neon-amber group-hover:animate-pulse" />
        <span className="tabular-nums">
          {found}
          <span className="text-phosphor-dim">/{total}</span>
        </span>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                key="hub-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-[180] bg-black/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 sm:p-8 overflow-y-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-3xl bg-ink border-2 border-neon-amber shadow-neon-amber"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="hub-title"
                >
                  <div className="flex items-center justify-between p-5 border-b-2 border-phosphor/15">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-6 h-6 text-neon-amber" />
                      <h2
                        id="hub-title"
                        className="arcade-title text-base sm:text-lg text-neon-amber"
                      >
                        {t("achievements.hubTitle")}
                      </h2>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      aria-label={t("achievements.close")}
                      className="p-2 text-phosphor-dim hover:text-neon-pink transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-5 border-b-2 border-phosphor/15">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm uppercase tracking-widest text-phosphor">
                        {t("achievements.progress", { found, total })}
                      </span>
                      <span className="arcade-title text-base text-neon-amber">
                        {Math.round((found / total) * 100)}%
                      </span>
                    </div>
                    <div className="h-2 bg-ink-100 border border-phosphor/20 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(found / total) * 100}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full bg-neon-amber shadow-neon-amber"
                      />
                    </div>
                  </div>

                  <ul className="p-5 grid sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto">
                    {ALL_ACHIEVEMENTS.map((id) => {
                      const isUnlocked = unlocked.includes(id);
                      return (
                        <li
                          key={id}
                          className={cn(
                            "border-2 p-4 flex gap-3 transition-colors",
                            isUnlocked
                              ? "border-neon-lime bg-neon-lime/5"
                              : "border-phosphor/15 bg-ink-100"
                          )}
                        >
                          <div
                            className={cn(
                              "shrink-0 w-10 h-10 flex items-center justify-center border-2",
                              isUnlocked
                                ? "border-neon-lime text-neon-lime bg-neon-lime/10"
                                : "border-phosphor/20 text-phosphor-dim"
                            )}
                          >
                            {isUnlocked ? (
                              <Trophy className="w-5 h-5" />
                            ) : (
                              <Lock className="w-5 h-5" />
                            )}
                          </div>
                          <div className="flex flex-col gap-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span
                                className={cn(
                                  "font-display text-xs sm:text-sm uppercase tracking-wider",
                                  isUnlocked
                                    ? "text-neon-lime"
                                    : "text-phosphor-dim"
                                )}
                              >
                                {isUnlocked
                                  ? t(`achievements.${id}.title`)
                                  : "???"}
                              </span>
                              {isUnlocked && (
                                <span className="shrink-0 px-1.5 py-0.5 border border-neon-lime text-neon-lime text-[10px] font-mono uppercase font-bold">
                                  {t("achievements.unlocked")}
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-phosphor/90">
                              {isUnlocked
                                ? t(`achievements.${id}.desc`)
                                : t(`achievements.${id}.hint`)}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
