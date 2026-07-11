import Link from "next/link";
import type { JourneyStage } from "./business-journey.types";
import styles from "./BusinessJourney.module.css";

type JourneyPreviewProps = {
  stage: JourneyStage;
};

export function JourneyPreview({ stage }: JourneyPreviewProps) {
  return (
    <article className={styles.preview}>
      <div className={styles.previewCopy}>
        <p className={styles.previewEyebrow}>{stage.eyebrow}</p>
        <h3>{stage.title}</h3>
        <p className={styles.previewDescription}>{stage.description}</p>
      </div>

      <div className={styles.previewServices}>
        <p>Relevant support</p>

        <div className={styles.serviceLinks}>
          {stage.services.map((service) => (
            <Link href={service.href} key={service.href}>
              <span>{service.label}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>

        <Link href={stage.cta.href} className={styles.stageCta}>
          <span>{stage.cta.label}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
