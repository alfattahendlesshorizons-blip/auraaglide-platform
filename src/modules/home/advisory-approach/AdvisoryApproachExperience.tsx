"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

import { ActionLink } from "@/design-system/primitives/action-link";

import type {
  AdvisoryApproachContent,
  AdvisoryStepId,
} from "./advisory-approach.types";
import styles from "./AdvisoryApproachSection.module.css";

type AdvisoryApproachExperienceProps = {
  content: AdvisoryApproachContent;
};

type StepIconProps = {
  id: AdvisoryStepId;
};

function StepIcon({ id }: StepIconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (id === "understand") {
    return (
      <svg {...commonProps}>
        <path d="M4 12c2.1-3.6 4.8-5.4 8-5.4s5.9 1.8 8 5.4c-2.1 3.6-4.8 5.4-8 5.4S6.1 15.6 4 12Z" />
        <circle cx="12" cy="12" r="2.4" />
      </svg>
    );
  }

  if (id === "assess") {
    return (
      <svg {...commonProps}>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m14.6 14.6 4.2 4.2" />
        <path d="M8.2 10.7 10 12.4l3.1-3.5" />
      </svg>
    );
  }

  if (id === "structure") {
    return (
      <svg {...commonProps}>
        <rect x="4" y="4" width="6" height="6" rx="1.4" />
        <rect x="14" y="4" width="6" height="6" rx="1.4" />
        <rect x="9" y="14" width="6" height="6" rx="1.4" />
        <path d="M7 10v2h10v-2M12 12v2" />
      </svg>
    );
  }

  if (id === "execute") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="5.3" />
        <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3" />
        <path d="m9.5 12.1 1.7 1.7 3.5-4" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M12 20s7-3.4 7-9.2V6.2L12 3.5 5 6.2v4.6C5 16.6 12 20 12 20Z" />
      <path d="m8.8 11.8 2.1 2.1 4.4-4.7" />
    </svg>
  );
}

export function AdvisoryApproachExperience({
  content,
}: AdvisoryApproachExperienceProps) {
  const [activeId, setActiveId] =
    useState<AdvisoryStepId>("understand");

  const activeStep =
    content.steps.find((step) => step.id === activeId) ??
    content.steps[0];

  const activeIndex = useMemo(
    () =>
      Math.max(
        0,
        content.steps.findIndex((step) => step.id === activeId),
      ),
    [activeId, content.steps],
  );

  const railStyle = {
    "--active-step-index": activeIndex,
    "--step-count": content.steps.length,
  } as CSSProperties;

  return (
    <div className={styles.experience}>
      <div
        className={styles.rail}
        aria-label="Advisory approach steps"
        style={railStyle}
      >
        <span className={styles.railLine} aria-hidden="true" />
        <span className={styles.railProgress} aria-hidden="true" />
        <span className={styles.railLight} aria-hidden="true" />

        {content.steps.map((step) => {
          const isActive = step.id === activeId;

          return (
            <button
              key={step.id}
              type="button"
              className={styles.step}
              data-active={isActive ? "true" : "false"}
              aria-pressed={isActive}
              onClick={() => setActiveId(step.id)}
              onMouseEnter={() => setActiveId(step.id)}
              onFocus={() => setActiveId(step.id)}
            >
              <span className={styles.stepIcon}>
                <StepIcon id={step.id} />
              </span>

              <span className={styles.stepLabel}>
                {step.label}
              </span>
            </button>
          );
        })}
      </div>

      <article
        key={activeStep.id}
        className={styles.detail}
        aria-live="polite"
      >
        <p className={styles.detailEyebrow}>
          {activeStep.eyebrow}
        </p>

        <h3 className={styles.detailHeading}>
          <span className={styles.detailPrimary}>
            {activeStep.heading.primary}
          </span>

          <span className={styles.detailSecondary}>
            {activeStep.heading.secondary}
          </span>

          <span className={styles.detailAccent}>
            {activeStep.heading.accent}
          </span>
        </h3>

        <p className={styles.detailDescription}>
          {activeStep.description}
        </p>

        <ul className={styles.points}>
          {activeStep.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <ActionLink
          href={activeStep.href}
          variant="editorial"
          size="sm"
          arrow="right"
          ariaLabel={`${activeStep.ctaLabel}: ${activeStep.label}`}
          className={styles.action}
        >
          {activeStep.ctaLabel}
        </ActionLink>
      </article>
    </div>
  );
}
