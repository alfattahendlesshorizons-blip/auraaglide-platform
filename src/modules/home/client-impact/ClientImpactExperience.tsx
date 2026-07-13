"use client";

import { useState } from "react";

import { ActionLink } from "@/design-system/primitives/action-link";

import type {
  ClientImpactContent,
  ClientImpactId,
} from "./client-impact.types";
import styles from "./ClientImpactSection.module.css";

type ClientImpactExperienceProps = {
  content: ClientImpactContent;
};

export function ClientImpactExperience({
  content,
}: ClientImpactExperienceProps) {
  const [activeId, setActiveId] =
    useState<ClientImpactId>("startup-foundation");

  const activeStory =
    content.stories.find((story) => story.id === activeId) ??
    content.stories[0];

  return (
    <div className={styles.experience}>
      <div
        className={styles.storyIndex}
        aria-label="Outcome narratives"
      >
        <p className={styles.indexLabel}>
          Select an outcome
        </p>

        {content.stories.map((story) => {
          const active = story.id === activeId;

          return (
            <button
              key={story.id}
              type="button"
              className={styles.storyButton}
              data-active={active ? "true" : "false"}
              aria-pressed={active}
              onClick={() => setActiveId(story.id)}
              onMouseEnter={() => setActiveId(story.id)}
              onFocus={() => setActiveId(story.id)}
            >
              <span
                className={styles.storyMarker}
                aria-hidden="true"
              />

              <span>{story.label}</span>
            </button>
          );
        })}
      </div>

      <article
        key={activeStory.id}
        className={styles.story}
        aria-live="polite"
      >
        <div className={styles.storyNarrative}>
          <p className={styles.storyEyebrow}>
            {activeStory.eyebrow}
          </p>

          <h3 className={styles.storyHeading}>
            <span className={styles.storyPrimary}>
              {activeStory.heading.primary}
            </span>

            <span className={styles.storySecondary}>
              {activeStory.heading.secondary}
            </span>

            <span className={styles.storyAccent}>
              {activeStory.heading.accent}
            </span>
          </h3>

          <p className={styles.storySummary}>
            {activeStory.summary}
          </p>

          <ActionLink
            href={activeStory.href}
            variant="editorial"
            size="sm"
            arrow="right"
            ariaLabel={`${activeStory.ctaLabel}: ${activeStory.label}`}
            className={styles.action}
          >
            {activeStory.ctaLabel}
          </ActionLink>
        </div>

        <div className={styles.outcomes}>
          <p className={styles.outcomesLabel}>
            What becomes stronger
          </p>

          {activeStory.outcomes.map((outcome) => (
            <div
              key={outcome.label}
              className={styles.outcome}
            >
              <span
                className={styles.outcomeLine}
                aria-hidden="true"
              />

              <div>
                <strong>{outcome.label}</strong>
                <p>{outcome.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
