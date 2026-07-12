"use client";

import { useMemo, useState } from "react";
import { businessJourneyContent } from "./business-journey.data";
import type { JourneyStageId } from "./business-journey.types";
import { JourneyIntro } from "./JourneyIntro";
import { JourneyNavigator } from "./JourneyNavigator";
import { JourneyPreview } from "./JourneyPreview";
import styles from "./BusinessJourney.module.css";

export function BusinessJourneySection() {
  const stages = useMemo(
    () =>
      businessJourneyContent.stages
        .filter((stage) => stage.enabled)
        .sort((a, b) => a.order - b.order),
    []
  );

  const defaultStage =
    stages.find((stage) => stage.featured) ??
    stages[0];

  const [activeId, setActiveId] =
    useState<JourneyStageId>(defaultStage.id);

  const activeStage =
    stages.find((stage) => stage.id === activeId) ??
    defaultStage;

  return (
    <section
      className={styles.section}
      data-stage={activeStage.id}
      aria-labelledby="business-journey-title"
    >
      <div className={styles.container}>
        <JourneyIntro
          eyebrow={businessJourneyContent.eyebrow}
          heading={businessJourneyContent.heading}
          quote={businessJourneyContent.quote}
          activeStageId={activeStage.visualKey}
        />

        <JourneyNavigator
          stages={stages}
          activeId={activeId}
          onChange={setActiveId}
        />

        <JourneyPreview key={activeStage.id} stage={activeStage} />
      </div>
    </section>
  );
}



