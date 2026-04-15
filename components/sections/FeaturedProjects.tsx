"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { projects } from "@/content/projects";
import { ProjectCartridge } from "@/components/arcade/ProjectCartridge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  const { t } = useTranslation();
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-20 sm:py-28 bg-ink-50 border-y-2 border-phosphor/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <SectionTitle
            kicker={t("featured.subtitle")}
            title={t("featured.title")}
            accent="pink"
          />
          <Link href={"/projects" as any} className="shrink-0">
            <Button variant="outline" size="sm">
              {t("featured.viewAll")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCartridge project={project} priority={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
