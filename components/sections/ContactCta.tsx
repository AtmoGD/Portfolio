"use client";

import { useTranslation } from "react-i18next";
import { Coffee, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function ContactCta() {
  const { t } = useTranslation();

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative border-2 border-neon-pink p-8 sm:p-12 bg-ink-100 shadow-neon-pink text-center"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink px-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-neon-pink">
              ★ Final Boss ★
            </span>
          </div>

          <Coffee className="w-10 h-10 text-neon-amber mx-auto mb-5 animate-pulse-slow" />

          <h2 className="arcade-title text-xl sm:text-2xl md:text-3xl text-phosphor mb-4">
            {t("hero.cta.contact")}
          </h2>

          <p className="text-phosphor-dim max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Game jam idea, junior role, or just coffee — I reply quickly.
          </p>

          <a href="mailto:dennishawran@gmail.com">
            <Button variant="primary" size="lg">
              <Mail className="w-4 h-4" />
              dennishawran@gmail.com
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
