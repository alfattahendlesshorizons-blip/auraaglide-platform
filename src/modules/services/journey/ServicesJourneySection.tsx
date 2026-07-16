"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

import { ServicesJourneyIntro } from "./components/intro";
import { servicesJourneyContent } from "./services-journey.data";
import styles from "./ServicesJourneySection.module.css";

export function ServicesJourneySection() {
  const categories = useMemo(
    () =>
      servicesJourneyContent.categories
        .filter((category) => category.enabled)
        .sort((a, b) => a.order - b.order),
    []
  );

  const [activeId, setActiveId] = useState(
    categories[0]?.id ?? ""
  );

  const activeCategory =
    categories.find((category) => category.id === activeId) ??
    categories[0];

  if (!activeCategory) {
    return null;
  }

  const navigatorStyle = {
    "--journey-count": categories.length,
  } as CSSProperties;

  return (
    <section
      className={styles.section}
      aria-labelledby="services-journey-title"
    >
      <div className={styles.container}>
        <ServicesJourneyIntro
          eyebrow={servicesJourneyContent.eyebrow}
          title={servicesJourneyContent.title}
          description={servicesJourneyContent.description}
          quote={activeCategory.quote}
          quoteLabel={activeCategory.eyebrow}
          titleId="services-journey-title"
        />

        <div
          className={styles.navigator}
          style={navigatorStyle}
          aria-label="Business support categories"
        >
          <div className={styles.track} aria-hidden="true" />

          {categories.map((category, index) => {
            const isActive = category.id === activeCategory.id;

            return (
              <button
                key={category.id}
                type="button"
                className={[
                  styles.node,
                  isActive ? styles.nodeActive : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-pressed={isActive}
                onClick={() => setActiveId(category.id)}
              >
                <span className={styles.nodeNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.nodeDot} aria-hidden="true">
                  <span />
                </span>

                <span className={styles.nodeLabel}>
                  {category.shortLabel}
                </span>
              </button>
            );
          })}
        </div>

        <article className={styles.story} key={activeCategory.id}>
          <div>
            <p className={styles.storyEyebrow}>
              {activeCategory.eyebrow}
            </p>

            <h3>{activeCategory.title}</h3>

            <p>{activeCategory.question}</p>
          </div>

          <div className={styles.mediaPlaceholder}>
            <span>
              {String(activeCategory.order).padStart(2, "0")}
            </span>

            <p>{activeCategory.image.alt}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
