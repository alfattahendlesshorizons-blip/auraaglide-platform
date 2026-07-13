import type { CSSProperties } from "react";
import Link from "next/link";

import { ActionLink } from "@/design-system/primitives/action-link";

import type { JourneyStage } from "./business-journey.types";
import styles from "./JourneyPreview.module.css";

type JourneyPreviewProps = {
  stage: JourneyStage;
};

export function JourneyPreview({
  stage,
}: JourneyPreviewProps) {
  return (
    <article
      key={stage.id}
      className={styles.preview}
      aria-labelledby={`journey-preview-${stage.id}`}
    >
      <div className={styles.previewCopy}>
        <div className={styles.previewEyebrowRow}>
          <p className={styles.previewEyebrow}>
            {stage.eyebrow}
          </p>

          <span
            className={styles.previewEyebrowRay}
            aria-hidden="true"
          />
        </div>

        <h3
          id={`journey-preview-${stage.id}`}
          className={styles.previewHeading}
        >
          {stage.title}
        </h3>

        <p className={styles.previewDescription}>
          {stage.description}
        </p>
      </div>

      <div
        className={styles.previewDivider}
        aria-hidden="true"
      >
        <span />
      </div>

      <nav
        className={styles.previewServices}
        aria-label={`${stage.label} support areas`}
      >
        <div className={styles.previewServicesHeader}>
          <p>Relevant support</p>

          <span
            className={styles.previewServicesRay}
            aria-hidden="true"
          />
        </div>

        <div className={styles.serviceLinks}>
          {stage.services.map((service, index) => (
            <Link
              href={service.href}
              key={service.href}
              className={styles.serviceLink}
              style={
                {
                  "--service-index": index,
                } as CSSProperties
              }
            >
              <span
                className={styles.serviceIcon}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M7 12h10" />
                  <path d="m13 8 4 4-4 4" />
                </svg>
              </span>

              <span className={styles.serviceLabel}>
                {service.label}
              </span>

              <span
                className={styles.serviceArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          ))}
        </div>

        <ActionLink
          href={stage.cta.href}
          variant="secondary"
          arrow="right"
          className={styles.stageCta}
        >
          {stage.cta.label}
        </ActionLink>
      </nav>
    </article>
  );
}
