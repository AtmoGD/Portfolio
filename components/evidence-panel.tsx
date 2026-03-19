"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectEvidence } from "@/src/types/project";

export default function EvidencePanel({ evidence }: { evidence: ProjectEvidence[] }) {
  const [playing, setPlaying] = useState<Record<string, boolean>>({});

  if (!evidence.length) return null;

  return (
    <div className="evidence-grid">
      {evidence.map((item) => {
        const isPlaying = Boolean(playing[item.title]);

        return (
          <article key={item.title} className="evidence-card">
            <div className="evidence-media">
              {item.type === "video" ? (
                isPlaying ? (
                  <iframe
                    src={item.sourceUrl}
                    title={item.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="evidence-play"
                    onClick={() => setPlaying((state) => ({ ...state, [item.title]: true }))}
                    aria-label={`Play evidence: ${item.title}`}
                  >
                    <span>▶</span>
                    <span>Play evidence</span>
                  </button>
                )
              ) : (
                <Image
                  src={item.sourceUrl}
                  alt={item.caption}
                  width={1200}
                  height={675}
                  className="evidence-image"
                />
              )}
            </div>
            <div className="stack-md">
              <h3>{item.title}</h3>
              <p className="muted">{item.caption}</p>
              <p className="claim-link">{item.supports}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
