import type { HeroTrustIcon } from "./hero.types";
import styles from "./HeroSection.module.css";

type HeroTrustIconProps = {
  type: HeroTrustIcon;
};

export function HeroTrustIcon({
  type,
}: HeroTrustIconProps) {
  if (type === "foundation") {
    return (
      <span
        className={`${styles.trustIcon} ${styles.foundationIcon}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24">
          <path d="M4 10.5 12 5l8 5.5" />
          <path d="M6.5 10.5V18M10.2 10.5V18M13.8 10.5V18M17.5 10.5V18" />
          <path d="M4.5 19h15" />
        </svg>

        <span className={styles.iconLight} />
      </span>
    );
  }

  if (type === "network") {
    return (
      <span
        className={`${styles.trustIcon} ${styles.networkIcon}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24">
          <path d="m7 8 5-3 5 3v6l-5 3-5-3Z" />
          <circle cx="7" cy="8" r="1.5" />
          <circle cx="17" cy="8" r="1.5" />
          <circle cx="12" cy="17" r="1.5" />
        </svg>

        <span className={styles.networkPulse} />
      </span>
    );
  }

  return (
    <span
      className={`${styles.trustIcon} ${styles.executionIcon}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24">
        <path d="M5 12.5 9.3 17 19 7" />
        <path d="M5 6.5h7" />
        <path d="M5 19.5h14" />
      </svg>

      <span className={styles.checkLight} />
    </span>
  );
}
