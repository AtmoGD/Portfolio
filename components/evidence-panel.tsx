"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectEvidence } from "@/src/types/project";
import { useI18n } from "@/src/i18n";

export default function EvidencePanel({ evidence }: { evidence: ProjectEvidence[] }) {
  const { t } = useI18n();
  const [playing, setPlaying] = useState<Record<string, boolean>>({});

  if (!evidence.length) return null;

  return (
    <div className="evidence-grid">
      {evidence.map((item, index) => {
        const isPlaying = Boolean(playing[item.title]);
        const captionId = `evidence-caption-${index}`;

        return (
          <article key={item.title} className="evidence-card">
            <h3>{item.title}</h3>
            <figure className="stack-md">
              <div className="evidence-media">
                {item.type === "video" ? (
                  isPlaying ? (
                    <iframe
                      src={item.sourceUrl}
                      title={item.title}
                      loading="lazy"
                      aria-describedby={captionId}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      className="evidence-play"
                      onClick={() => setPlaying((state) => ({ ...state, [item.title]: true }))}
                      aria-label={`${t("playEvidence")}: ${item.title}`}
                      aria-describedby={captionId}
                    >
                      <span>▶</span>
                      <span>{t("playEvidence")}</span>
                    </button>
                  )
                ) : (
                  <Image
                    src={item.sourceUrl}
                    alt={item.caption}
                    width={1200}
                    height={675}
                    className="evidence-image"
                    aria-describedby={captionId}
                  />
                )}
              </div>
              <figcaption id={captionId} className="stack-md">
                <p className="muted">{item.caption}</p>
                <p className="claim-link">{item.supports}</p>
              </figcaption>
            </figure>
          </article>
        );
      })}
    </div>
  );
}
