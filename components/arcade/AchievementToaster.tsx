"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { dismissToast, useActiveToasts, type AchievementId } from "@/lib/achievements";

export function AchievementToaster() {
  const { t } = useTranslation();
  const toasts = useActiveToasts();

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 right-6 z-[150] flex flex-col gap-3 pointer-events-none"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, x: 30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="pointer-events-auto max-w-sm bg-ink-100 border-2 border-neon-amber shadow-neon-amber p-4 flex items-center gap-3"
            onClick={() => dismissToast(toast.id)}
          >
            <div className="shrink-0 w-10 h-10 bg-neon-amber/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-neon-amber" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-widest text-phosphor-dim">
                {t("cookieToast.text")}
              </span>
              <span className="font-display text-sm text-neon-amber">
                {t(`achievements.${toast.id as AchievementId}.title`)}
              </span>
              <span className="text-xs text-phosphor-dim mt-1">
                {t(`achievements.${toast.id as AchievementId}.desc`)}
              </span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
