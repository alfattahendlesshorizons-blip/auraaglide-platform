import styles from "./JourneyQuote.module.css";

type JourneyQuoteProps = {
  text: string;
  signature: string;
};

export function JourneyQuote({
  text,
  signature,
}: JourneyQuoteProps) {
  return (
    <blockquote className={styles.quote}>
      <span className={styles.mark} aria-hidden="true">
        “
      </span>

      <p>{text}</p>

      <footer>{signature}</footer>
    </blockquote>
  );
}
