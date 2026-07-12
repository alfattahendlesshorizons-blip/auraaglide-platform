import type {
  JourneyHeadingLine,
  JourneyStageId,
} from "./business-journey.types";
import { JourneyAnimatedHeading } from "./JourneyAnimatedHeading";
import { JourneyEyebrowRay } from "./JourneyEyebrowRay";
import { JourneyQuote } from "./JourneyQuote";
import styles from "./JourneyIntro.module.css";

type JourneyIntroProps = {
  eyebrow: string;
  heading: JourneyHeadingLine[];
  quote: {
    text: string;
    signature: string;
  };
  activeStageId: JourneyStageId;
};

export function JourneyIntro({
  eyebrow,
  heading,
  quote,
}: JourneyIntroProps) {
  return (
    <header className={styles.intro}>
      <div className={styles.copy}>
        <JourneyEyebrowRay label={eyebrow} />
        <JourneyAnimatedHeading lines={heading} />
      </div>

      <div className={styles.story}>
        <JourneyQuote
          text={quote.text}
          signature={quote.signature}
        />
      </div>
    </header>
  );
}

