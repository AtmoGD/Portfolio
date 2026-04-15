"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { usePreferences } from "@/lib/usePreferences";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function BootSequence() {
  const { t } = useTranslation();
  const { prefs, update, hydrated } = usePreferences();
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [pressStartVisible, setPressStartVisible] = useState(false);
  const started = useRef(false);

  const lines = [t("boot.line1"), t("boot.line2"), t("boot.line3"), t("boot.line4")];

  useEffect(() => {
    if (!hydrated) return;
    if (prefs.bootSeen) return;
    if (started.current) return;
    started.current = true;
    setVisible(true);
  }, [hydrated, prefs.bootSeen]);

  useEffect(() => {
    if (!visible) return;
    if (reduced) {
      setLineIndex(lines.length);
      setPressStartVisible(true);
      return;
    }
    let cancelled = false;
    async function run() {
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        setLineIndex(i);
        const text = lines[i];
        for (let c = 0; c <= text.length; c++) {
          if (cancelled) return;
          setTyped(text.slice(0, c));
          await sleep(22);
        }
        await sleep(280);
      }
      if (!cancelled) setPressStartVisible(true);
    }
    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, reduced]);

  useEffect(() => {
    if (!pressStartVisible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") handleStart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pressStartVisible]);

  function handleStart() {
    setVisible(false);
    update({ bootSeen: true });
  }

  function handleSkip() {
    setVisible(false);
    update({ bootSeen: true });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onClick={handleStart}
          role="button"
          tabIndex={0}
          aria-label={t("hero.pressStart")}
          className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center p-6 grid-bg cursor-pointer"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
            className="absolute top-4 right-4 font-mono text-sm uppercase tracking-widest text-phosphor-dim hover:text-neon-cyan transition-colors font-bold"
          >
            {t("boot.skip")} ›
          </button>

          <div className="max-w-2xl w-full font-mono text-sm sm:text-lg text-neon-cyan space-y-2 pointer-events-none">
            {lines.slice(0, lineIndex + 1).map((line, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-neon-pink">&gt;</span>
                <span>
                  {i === lineIndex ? (
                    <>
                      {typed}
                      <span className="inline-block w-2 h-4 bg-neon-cyan ml-0.5 animate-blink" />
                    </>
                  ) : (
                    <>
                      {line}
                      <span className="text-neon-lime ml-2">OK</span>
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>

          {pressStartVisible && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => {
                e.stopPropagation();
                handleStart();
              }}
              className="mt-12 arcade-title text-xl sm:text-3xl text-neon-amber animate-blink hover:animate-none hover:text-neon-pink transition-colors"
            >
              {t("hero.pressStart")}
            </motion.button>
          )}

          <span className="absolute bottom-6 font-mono text-xs uppercase tracking-widest text-phosphor-dim pointer-events-none">
            click anywhere to start · enter · space
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
