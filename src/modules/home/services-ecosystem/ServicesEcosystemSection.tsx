import { getServicesEcosystemContent } from "./services-ecosystem.repository";
import { ServicesEcosystemExperience } from "./ServicesEcosystemExperience";
import { ServicesEcosystemStructuredData } from "./ServicesEcosystemStructuredData";

import styles from "./ServicesEcosystemSection.module.css";

export async function ServicesEcosystemSection() {
  const content = await getServicesEcosystemContent();

  return (
    <section
      className={styles.section}
      aria-labelledby="services-ecosystem-heading"
    >
      <ServicesEcosystemStructuredData content={content} />

      <div className={styles.backgroundMap} aria-hidden="true">
        <span className={styles.mapLineOne} />
        <span className={styles.mapLineTwo} />
        <span className={styles.mapLineThree} />
      </div>

      <div className={styles.container}>
        <header className={styles.intro}>
          <div className={styles.introCopy}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />

              <p className={styles.eyebrow}>
                {content.eyebrow}
              </p>
            </div>

            <h2
              id="services-ecosystem-heading"
              className={styles.heading}
            >
              <span className={styles.headingPrimary}>
                {content.heading.primary}
              </span>

              <span className={styles.headingSecondary}>
                {content.heading.secondary}
              </span>

              <span className={styles.headingAccent}>
                {content.heading.accent}
              </span>
            </h2>

            <p className={styles.helper}>
              {content.helper}
            </p>
          </div>

          <div className={styles.statement}>
            <span className={styles.statementMark} aria-hidden="true">
              &ldquo;
            </span>

            <p>{content.statement}</p>

            <span className={styles.statementCaption}>
              {content.statementCaption}
            </span>
          </div>
        </header>

        <ServicesEcosystemExperience content={content} />
      </div>
    </section>
  );
}
