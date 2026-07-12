import type { JourneyHeadingLine } from "./business-journey.types";
import styles from "./JourneyAnimatedHeading.module.css";

type JourneyAnimatedHeadingProps = {
  lines: JourneyHeadingLine[];
};

export function JourneyAnimatedHeading({
  lines,
}: JourneyAnimatedHeadingProps) {
  return (
    <h2
      id="business-journey-title"
      className={styles.heading}
    >
      {lines.map((line, index) => (
        <span
          key={line.text}
          className={`${styles.line} ${styles[line.tone]}`}
          style={{ "--line-index": index } as React.CSSProperties}
        >
          {line.text}
        </span>
      ))}
    </h2>
  );
}

