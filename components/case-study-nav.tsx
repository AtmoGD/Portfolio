"use client";

import { useEffect, useMemo, useState } from "react";

const getScrollBehavior = () => {
  if (typeof window === "undefined") return "smooth";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
};

interface TocSection {
  id: string;
  label: string;
}

export default function CaseStudyNav({ sections }: { sections: TocSection[] }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.2, 0.35, 0.55],
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [sections]);

  const progress = useMemo(() => {
    const activeIndex = sections.findIndex((section) => section.id === activeSection);
    if (activeIndex < 0 || sections.length <= 1) return 0;
    return Math.round((activeIndex / (sections.length - 1)) * 100);
  }, [activeSection, sections]);

  return (
    <>
      <nav className="case-nav card" aria-label="Case study sections">
        <div className="case-nav-header">
          <p className="eyebrow">On this page</p>
          <p className="muted">Progress: {progress}%</p>
        </div>
        <ol className="case-nav-list">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`case-nav-link ${activeSection === section.id ? "is-active" : ""}`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="case-jump card" role="region" aria-label="Jump to section">
        <label htmlFor="case-jump-select" className="eyebrow">
          Jump to section
        </label>
        <select
          id="case-jump-select"
          value={activeSection}
          onChange={(event) => {
            const targetId = event.target.value;
            setActiveSection(targetId);
            document
              .getElementById(targetId)
              ?.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
          }}
        >
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
