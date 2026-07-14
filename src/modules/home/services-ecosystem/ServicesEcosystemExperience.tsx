"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { ServicesEcosystemLinks } from "./ServicesEcosystemLinks";
import { ServicesEcosystemNarrative } from "./ServicesEcosystemNarrative";
import { ServicesEcosystemNavigator } from "./ServicesEcosystemNavigator";
import type {
  ServiceCapabilityId,
  ServicesEcosystemContent,
} from "./services-ecosystem.types";

import styles from "./ServicesEcosystemSection.module.css";

type ServicesEcosystemExperienceProps = {
  content: ServicesEcosystemContent;
};

const AUTO_ADVANCE_MS = 6200;

export function ServicesEcosystemExperience({
  content,
}: ServicesEcosystemExperienceProps) {
  const initialId = content.capabilities[0]?.id ?? "foundation";
  const [activeId, setActiveId] =
    useState<ServiceCapabilityId>(initialId);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const activeCapability = useMemo(
    () =>
      content.capabilities.find(
        (capability) => capability.id === activeId
      ) ?? content.capabilities[0],
    [activeId, content.capabilities]
  );

  useEffect(() => {
    if (
      paused ||
      content.capabilities.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveId((currentId) => {
        const currentIndex = content.capabilities.findIndex(
          (capability) => capability.id === currentId
        );

        const nextIndex =
          currentIndex < 0
            ? 0
            : (currentIndex + 1) % content.capabilities.length;

        return content.capabilities[nextIndex]?.id ?? currentId;
      });
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [content.capabilities, paused]);

  if (!activeCapability) {
    return null;
  }

  return (
    <div
      ref={regionRef}
      className={styles.experience}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!regionRef.current?.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
      data-paused={paused ? "true" : "false"}
    >
      <ServicesEcosystemNavigator
        capabilities={content.capabilities}
        activeId={activeCapability.id}
        onSelect={setActiveId}
      />

      <ServicesEcosystemNarrative
        capability={activeCapability}
      />

      <ServicesEcosystemLinks
        capability={activeCapability}
      />
    </div>
  );
}
