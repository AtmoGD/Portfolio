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
          className="relative border-2 border-neon-pink p-10 sm:p-14 bg-ink-100 shadow-neon-pink text-center"
        >
          <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 bg-ink px-4 py-1">
            <span className="arcade-title text-base sm:text-lg text-neon-pink text-glow-pink inline-flex items-center gap-2 animate-pulse-slow">
              <span className="text-neon-amber">★</span>
              FINAL BOSS
              <span className="text-neon-amber">★</span>
            </span>
          </div>

          <Coffee className="w-14 h-14 text-neon-amber mx-auto mb-5 animate-pulse-slow" />

          <h2 className="arcade-title text-2xl sm:text-3xl md:text-4xl text-phosphor text-glow-pink mb-5">
            {t("hero.cta.contact")}
          </h2>

          <p className="text-phosphor max-w-xl mx-auto mb-8 text-base sm:text-lg">
            {t("hero.cta.contactSubtitle")}
          </p>

          <a
            href="mailto:dennishawran@gmail.com"
            className="inline-flex w-full sm:w-auto max-w-full"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto max-w-full whitespace-nowrap px-4 sm:px-7 text-[clamp(0.7rem,3vw,1rem)]"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              dennishawran@gmail.com
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
