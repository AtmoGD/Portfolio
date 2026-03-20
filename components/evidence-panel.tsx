"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectEvidence } from "@/src/types/project";
import { localizeWithFallback, useI18n } from "@/src/i18n";

export default function EvidencePanel({ evidence }: { evidence: ProjectEvidence[] }) {
  const { t, language } = useI18n();
  const [playing, setPlaying] = useState<Record<string, boolean>>({});

  if (!evidence.length) return null;

  return (
    <div className="evidence-grid">
      {evidence.map((item, index) => {
        const title = localizeWithFallback(item.title, language);
        const caption = localizeWithFallback(item.caption, language);
        const supports = localizeWithFallback(item.supports, language);
        const isPlaying = Boolean(playing[title]);
        const captionId = `evidence-caption-${index}`;

        return (
          <article key={`${title}-${index}`} className="evidence-card">
            <h3>{title}</h3>
            <figure className="stack-md">
              <div className="evidence-media">
                {item.type === "video" ? (
                  isPlaying ? (
                    <iframe
                      src={item.sourceUrl}
                      title={title}
                      loading="lazy"
                      aria-describedby={captionId}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      className="evidence-play"
                      onClick={() => setPlaying((state) => ({ ...state, [title]: true }))}
                      aria-label={`${t("playEvidence")}: ${title}`}
                      aria-describedby={captionId}
                    >
                      <span>▶</span>
                      <span>{t("playEvidence")}</span>
                    </button>
                  )
                ) : (
                  <Image
                    src={item.sourceUrl}
                    alt={caption}
                    width={1200}
                    height={675}
                    className="evidence-image"
                    aria-describedby={captionId}
                  />
                )}
              </div>
              <figcaption id={captionId} className="stack-md">
                <p className="muted">{caption}</p>
                <p className="claim-link">{supports}</p>
              </figcaption>
            </figure>
          </article>
        );
      })}
    </div>
  );
}
