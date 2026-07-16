import { ServicesJourneyQuote } from "./ServicesJourneyQuote";
import styles from "./ServicesJourneyIntro.module.css";

type ServicesJourneyIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  quote: string;
  quoteLabel: string;
  titleId: string;
};

export function ServicesJourneyIntro({
  eyebrow,
  title,
  description,
  quote,
  quoteLabel,
  titleId,
}: ServicesJourneyIntroProps) {
  return (
    <header className={styles.intro}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{eyebrow}</p>

        <h2 id={titleId}>{title}</h2>

        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.story}>
        <ServicesJourneyQuote
          text={quote}
          label={quoteLabel}
        />
      </div>
    </header>
  );
}
