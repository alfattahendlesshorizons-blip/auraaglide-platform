import type { CSSProperties, KeyboardEvent } from "react";
import type {
  JourneyStage,
  JourneyStageId,
} from "./business-journey.types";
import { JourneyStageMiniIcon } from "./JourneyStageMiniIcon";
import styles from "./JourneyNavigator.module.css";

type JourneyNavigatorProps = {
  stages: JourneyStage[];
  activeId: JourneyStageId;
  onChange: (id: JourneyStageId) => void;
};

export function JourneyNavigator({
  stages,
  activeId,
  onChange,
}: JourneyNavigatorProps) {
  const activeIndex = stages.findIndex(
    (stage) => stage.id === activeId
  );

  const progress =
    stages.length <= 1
      ? 0
      : (activeIndex / (stages.length - 1)) * 100;

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (
      event.key !== "ArrowLeft" &&
      event.key !== "ArrowRight"
    ) {
      return;
    }

    event.preventDefault();

    const direction =
      event.key === "ArrowRight" ? 1 : -1;

    const nextIndex =
      (index + direction + stages.length) %
      stages.length;

    onChange(stages[nextIndex].id);
  };

  return (
    <div
      className={styles.navigator}
      role="tablist"
      aria-label="Business stages"
      style={
        {
          "--journey-progress": `${progress}%`,
        } as CSSProperties
      }
    >
      <span className={styles.track} aria-hidden="true" />
      <span className={styles.progressTrack} aria-hidden="true">
        <span className={styles.progressRay} />
      </span>

      {stages.map((stage, index) => {
        const isActive = stage.id === activeId;
        const isPassed = index < activeIndex;

        return (
          <button
            key={stage.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={[
              styles.stageButton,
              isActive ? styles.stageButtonActive : "",
              isPassed ? styles.stageButtonPassed : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onChange(stage.id)}
            onKeyDown={(event) =>
              handleKeyDown(event, index)
            }
          >
            <span className={styles.stageNode} aria-hidden="true">
              <JourneyStageMiniIcon stageId={stage.id} />
            </span>

            <span>{stage.shortLabel}</span>
          </button>
        );
      })}
    </div>
  );
}


