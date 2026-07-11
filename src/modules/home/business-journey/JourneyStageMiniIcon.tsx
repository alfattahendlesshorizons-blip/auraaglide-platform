import type { JourneyStageId } from "./business-journey.types";
import styles from "./JourneyStageMiniIcon.module.css";

type JourneyStageMiniIconProps = {
  stageId: JourneyStageId;
};

export function JourneyStageMiniIcon({
  stageId,
}: JourneyStageMiniIconProps) {
  if (stageId === "idea") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.2 15.3c-1.4-1-2.2-2.6-2.2-4.4A6 6 0 0 1 12 5a6 6 0 0 1 6 5.9c0 1.8-.8 3.4-2.2 4.4-.8.6-1.2 1.2-1.3 2.1h-5c-.1-.9-.5-1.5-1.3-2.1Z" />
        <path d="M9.8 20h4.4M10 17.5h4" />
        <path className={styles.spark} d="M12 1.8v1.4M4.8 4.6l1 1M19.2 4.6l-1 1" />
      </svg>
    );
  }

  if (stageId === "launch") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 20V9l7-5 7 5v11" />
        <path d="M9 20v-6h6v6M3.5 20h17" />
      </svg>
    );
  }

  if (stageId === "running") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.2 7.5A7 7 0 0 1 19 11" />
        <path d="M17.5 7.7 19 11l-3.5.4" />
        <path d="M17.8 16.5A7 7 0 0 1 5 13" />
        <path d="M6.5 16.3 5 13l3.5-.4" />
      </svg>
    );
  }

  if (stageId === "growth") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="m5 18 5-5 3 3 6-8" />
        <path d="M15 8h4v4" />
      </svg>
    );
  }

  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="7" />
      <path d="M5.5 9h13M5.5 15h13M12 5c2 2.2 3 4.5 3 7s-1 4.8-3 7M12 5c-2 2.2-3 4.5-3 7s1 4.8 3 7" />
    </svg>
  );
}
