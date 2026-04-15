"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Home } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { DodgerGame } from "@/components/sections/DodgerGame";
import { unlock } from "@/lib/achievements";

export default function NotFound() {
  const { t } = useTranslation();

  useEffect(() => {
    unlock("found404");
  }, []);

  return (
    <PageShell>
      <div className="flex flex-col items-center text-center gap-4 mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-neon-cyan">
          ERR_404
        </span>
        <h1 className="arcade-title text-3xl sm:text-5xl text-neon-pink text-glow-pink chromatic">
          {t("notFound.title")}
        </h1>
        <p className="font-mono text-phosphor-dim max-w-xl">
          {t("notFound.subtitle")}
        </p>
      </div>

      <div className="flex flex-col items-center gap-8">
        <DodgerGame />
        <Link href={"/" as any}>
          <Button variant="outline" size="md">
            <Home className="w-4 h-4" />
            {t("notFound.back")}
          </Button>
        </Link>
      </div>
    </PageShell>
  );
}
