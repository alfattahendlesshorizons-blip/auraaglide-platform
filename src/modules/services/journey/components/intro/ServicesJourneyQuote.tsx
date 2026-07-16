import styles from "./ServicesJourneyQuote.module.css";

type ServicesJourneyQuoteProps = {
  text: string;
  label: string;
};

export function ServicesJourneyQuote({
  text,
  label,
}: ServicesJourneyQuoteProps) {
  return (
    <blockquote className={styles.quote}>
      <span className={styles.mark} aria-hidden="true">
        “
      </span>

      <p>{text}</p>

      <footer>{label}</footer>
    </blockquote>
  );
}
