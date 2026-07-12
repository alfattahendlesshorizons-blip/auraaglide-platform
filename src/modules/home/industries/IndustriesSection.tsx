import { IndustryPanel } from "./IndustryPanel";
import { getIndustriesSectionContent } from "./industries.repository";
import styles from "./IndustriesSection.module.css";

export async function IndustriesSection() {
  const content = await getIndustriesSectionContent();

  return (
    <section
      id={content.sectionId}
      className={styles.section}
      aria-labelledby="industries-heading"
    >
      <div className={styles.container}>
        <header className={styles.intro}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowRay} aria-hidden="true" />
            <span className={styles.eyebrow}>
              {content.eyebrow}
            </span>
          </div>

          <h2
            id="industries-heading"
            className={styles.heading}
          >
            <span className={styles.headingLead}>
              {content.headingLead}
            </span>

            <span className={styles.headingMiddle}>
              {content.headingMiddle}
            </span>

            <span className={styles.headingAccent}>
              {content.headingAccent}
            </span>
          </h2>

          <p className={styles.description}>
            {content.description}
          </p>
        </header>

        <div className={styles.grid}>
          {content.industries.map((industry) => (
            <IndustryPanel
              key={industry.id}
              industry={industry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
