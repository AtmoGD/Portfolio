"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Ghost, X } from "lucide-react";
import { useCheatMode, deactivateCheat } from "@/lib/useCheatMode";

export function CheatBanner() {
  const cheating = useCheatMode();

  return (
    <AnimatePresence>
      {cheating && (
        <motion.button
          key="cheat"
          initial={{ opacity: 0, y: -8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 240, damping: 20 }}
          onClick={() => deactivateCheat()}
          title="Cheat-Mode deaktivieren"
          className="group inline-flex items-center gap-2 px-3 py-2 border-2 border-neon-violet bg-neon-violet/10 text-neon-violet hover:bg-neon-violet hover:text-black transition-colors font-mono text-sm font-bold uppercase tracking-widest animate-pulse-slow"
        >
          <Ghost className="w-4 h-4" />
          <span className="hidden sm:inline">CHEAT</span>
          <X className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
