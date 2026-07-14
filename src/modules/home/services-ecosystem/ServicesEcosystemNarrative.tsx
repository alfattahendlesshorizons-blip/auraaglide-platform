import type { ServiceCapability } from "./services-ecosystem.types";

import styles from "./ServicesEcosystemSection.module.css";

type ServicesEcosystemNarrativeProps = {
  capability: ServiceCapability;
};

export function ServicesEcosystemNarrative({
  capability,
}: ServicesEcosystemNarrativeProps) {
  return (
    <article
      key={capability.id}
      className={styles.narrative}
      aria-live="polite"
    >
      <div className={styles.narrativeRays} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <p className={styles.narrativeEyebrow}>
        {capability.eyebrow}
      </p>

      <h3 className={styles.narrativeHeading}>
        <span className={styles.narrativePrimary}>
          {capability.heading.primary}
        </span>

        <span className={styles.narrativeSecondary}>
          {capability.heading.secondary}
        </span>

        <span className={styles.narrativeAccent}>
          {capability.heading.accent}
        </span>
      </h3>

      <p className={styles.narrativeDescription}>
        {capability.description}
      </p>

      <p className={styles.narrativeInsight}>
        {capability.insight}
      </p>
    </article>
  );
}
