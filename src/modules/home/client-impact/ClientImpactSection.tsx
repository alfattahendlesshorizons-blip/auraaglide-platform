import { getClientImpactContent } from "./client-impact.repository";
import { ClientImpactExperience } from "./ClientImpactExperience";
import { ClientImpactStructuredData } from "./ClientImpactStructuredData";
import styles from "./ClientImpactSection.module.css";

export async function ClientImpactSection() {
  const content = await getClientImpactContent();

  return (
    <section
      className={styles.section}
      aria-labelledby="client-impact-heading"
    >
      <ClientImpactStructuredData content={content} />

      <div className={styles.container}>
        <header className={styles.intro}>
          <div>
            <div className={styles.eyebrowRow}>
              <span
                className={styles.eyebrowLine}
                aria-hidden="true"
              />

              <p className={styles.eyebrow}>
                {content.eyebrow}
              </p>
            </div>

            <h2
              id="client-impact-heading"
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

          <div className={styles.quotePanel}>
            <span
              className={styles.quoteMark}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className={styles.quote}>
              {content.quote}
            </blockquote>

            <p className={styles.quoteCaption}>
              {content.quoteCaption}
            </p>
          </div>
        </header>

        <ClientImpactExperience content={content} />
      </div>
    </section>
  );
}
