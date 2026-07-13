import { TypographyBreath } from "@/design-system/motion";
import { Typography } from "@/design-system/typography";

import { BusinessRealityExperience } from "./BusinessRealityExperience";
import { BusinessRealityStructuredData } from "./BusinessRealityStructuredData";
import { getBusinessRealityContent } from "./business-reality.repository";
import layoutStyles from "./BusinessRealityLayout.module.css";
import styles from "./BusinessRealitySection.module.css";

export async function BusinessRealitySection() {
  const content = await getBusinessRealityContent();

  return (
    <section
      id={content.sectionId}
      className={`${styles.section} ${layoutStyles.sectionLayout}`}
      aria-labelledby="business-reality-heading"
    >
      <BusinessRealityStructuredData items={content.items} />

      <div
        className={`${styles.container} ${layoutStyles.containerLayout}`}
      >
        <header
          className={`${styles.intro} ${layoutStyles.introLayoutShell}`}
        >
          <div className={styles.eyebrowRow}>
            <span
              className={styles.eyebrowRay}
              aria-hidden="true"
            />

            <Typography
              as="span"
              variant="sectionLabel"
              tone="gold"
              className={styles.eyebrow}
            >
              {content.eyebrow}
            </Typography>
          </div>

          <div
            className={`${styles.introLayout} ${layoutStyles.introGrid}`}
          >
            <Typography
              as="h2"
              variant="display"
              tone="light"
              className={styles.heading}
            >
              <span className={styles.headingFirstLine}>
                <span className={styles.headingLead}>
                  {content.headingLead}
                </span>

                <TypographyBreath
                  tone="steel"
                  className={styles.headingMiddle}
                >
                  {content.headingMiddle}
                </TypographyBreath>
              </span>

              <TypographyBreath
                tone="gold"
                className={styles.headingAccent}
              >
                {content.headingAccent}
              </TypographyBreath>
            </Typography>

            <div className={styles.introQuotePanel}>

              <Typography
                as="blockquote"
                variant="editorialQuote"
                tone="steel"
                className={styles.introQuote}
              >
                <TypographyBreath tone="steel">
                  {content.description}
                </TypographyBreath>
              </Typography>

              <Typography
                as="p"
                variant="sectionLabel"
                tone="gold"
                className={styles.introQuoteCaption}
              >
                {content.quoteCaption}
              </Typography>
            </div>
          </div>
        </header>

        <BusinessRealityExperience
          items={content.items}
        />
      </div>
    </section>
  );
}
