"use client";

import {
  useMemo,
  useState,
} from "react";

import { PremiumFrame } from "@/design-system/primitives/premium-frame";

import { BusinessRealityCanvas } from "./BusinessRealityCanvas";
import { BusinessRealitySelector } from "./BusinessRealitySelector";
import type { BusinessRealityItem } from "./business-reality.types";
import layoutStyles from "./BusinessRealityLayout.module.css";
import styles from "./BusinessRealitySection.module.css";

type BusinessRealityExperienceProps = {
  items: BusinessRealityItem[];
};

export function BusinessRealityExperience({
  items,
}: BusinessRealityExperienceProps) {
  const [activeId, setActiveId] = useState(
    items[0]?.id ?? "",
  );

  const [transitionKey, setTransitionKey] =
    useState(0);

  const activeItem = useMemo(
    () =>
      items.find(
        (item) => item.id === activeId,
      ) ?? items[0],
    [activeId, items],
  );

  if (!activeItem) {
    return null;
  }

  function handleSelect(id: string) {
    if (id === activeId) {
      return;
    }

    setActiveId(id);

    setTransitionKey(
      (current) => current + 1,
    );
  }

  return (
    <PremiumFrame
      className={`${styles.experience} ${layoutStyles.experienceLayout}`}
    >
      <BusinessRealitySelector
        items={items}
        activeId={activeItem.id}
        onSelect={handleSelect}
      />

      <BusinessRealityCanvas
        item={activeItem}
        transitionKey={transitionKey}
      />
    </PremiumFrame>
  );
}
