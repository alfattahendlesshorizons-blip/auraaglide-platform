import { getAdvisoryApproachContent } from "./advisory-approach.repository";
import { AdvisoryApproachExperience } from "./AdvisoryApproachExperience";
import { AdvisoryApproachStructuredData } from "./AdvisoryApproachStructuredData";
import styles from "./AdvisoryApproachSection.module.css";

export async function AdvisoryApproachSection() {
  const content = await getAdvisoryApproachContent();

  return (
    <section
      className={styles.section}
      aria-labelledby="advisory-approach-heading"
    >
      <AdvisoryApproachStructuredData content={content} />

      <div className={styles.container}>
        <header className={styles.intro}>
          <div className={styles.introHeading}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <p className={styles.eyebrow}>{content.eyebrow}</p>
            </div>

            <h2
              id="advisory-approach-heading"
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
          </div>

          <div className={styles.quotePanel}>
            <span className={styles.quoteMark} aria-hidden="true">
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

        <p className={styles.introduction}>
          {content.introduction}
        </p>

        <AdvisoryApproachExperience content={content} />
      </div>
    </section>
  );
}
