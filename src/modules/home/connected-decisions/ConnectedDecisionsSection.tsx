"use client";

import { useState } from "react";

import { connectedDecisionsContent } from "./connected-decisions.data";
import type { ConnectedDecisionId } from "./connected-decisions.types";
import styles from "./ConnectedDecisionsSection.module.css";

export function ConnectedDecisionsSection() {
  const [activeId, setActiveId] =
    useState<ConnectedDecisionId>("foundation");

  const active =
    connectedDecisionsContent.items.find(
      (item) => item.id === activeId,
    ) ?? connectedDecisionsContent.items[0];

  return (
    <section
      className={styles.section}
      aria-labelledby="connected-decisions-heading"
    >
      <div className={styles.container}>
        <header className={styles.intro}>
          <div className={styles.introHeading}>
            <div className={styles.eyebrowRow}>
              <span
                className={styles.eyebrowRay}
                aria-hidden="true"
              />

              <p className={styles.eyebrow}>
                {connectedDecisionsContent.eyebrow}
              </p>
            </div>

            <h2
              id="connected-decisions-heading"
              className={styles.heading}
            >
              <span className={styles.headingLead}>
                {connectedDecisionsContent.headingLead}
              </span>

              <span className={styles.headingMiddle}>
                {connectedDecisionsContent.headingMiddle}
              </span>

              <span className={styles.headingAccent}>
                {connectedDecisionsContent.headingAccent}
              </span>
            </h2>
          </div>

          <div className={styles.introQuotePanel}>
            <span
              className={styles.quoteMark}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className={styles.introQuote}>
              {connectedDecisionsContent.quote}
            </blockquote>

            <span
              className={`${styles.quoteMark} ${styles.quoteMarkEnd}`}
              aria-hidden="true"
            >
              &rdquo;
            </span>

            <p className={styles.quoteCaption}>
              {connectedDecisionsContent.quoteCaption}
            </p>
          </div>
        </header>

        <p className={styles.context}>
          {connectedDecisionsContent.description}
        </p>

        <div className={styles.experience}>
          <div
            className={styles.navigator}
            aria-label="Connected decision areas"
          >
            <div className={styles.navigatorIntro}>
              <p className={styles.navigatorEyebrow}>
                The Decision Chain
              </p>

              <p className={styles.navigatorDescription}>
                Select an area to see how it shapes what comes next.
              </p>
            </div>

            <div className={styles.nodeList}>
              <span
                className={styles.track}
                aria-hidden="true"
              />

              <span
                className={styles.travelLight}
                aria-hidden="true"
              />

              {connectedDecisionsContent.items.map((item) => {
              const selected = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={styles.node}
                  data-active={selected ? "true" : "false"}
                  aria-pressed={selected}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                >
                  <span
                    className={styles.dot}
                    aria-hidden="true"
                  />

                  <span>{item.label}</span>
                </button>
              );
            })}
            </div>
          </div>

          <article
            key={active.id}
            className={styles.preview}
            aria-live="polite"
          >
            <p className={styles.previewEyebrow}>
              {active.eyebrow}
            </p>

            <h3 className={styles.previewHeading}>
              <span className={styles.previewPrimary}>
                {active.heading.split(" ").slice(0, 3).join(" ")}
              </span>

              <span className={styles.previewSecondary}>
                {active.heading.split(" ").slice(3, -2).join(" ")}
              </span>

              <span className={styles.previewAccent}>
                {active.heading.split(" ").slice(-2).join(" ")}
              </span>
            </h3>

            <p className={styles.previewDescription}>
              {active.description}
            </p>

            <nav
              className={styles.links}
              aria-label={`${active.label} related links`}
            >
              {active.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                >
                  <span>{link.label}</span>

                  <span
                    className={styles.linkArrow}
                    aria-hidden="true"
                  >
                    -&gt;
                  </span>
                </a>
              ))}
            </nav>

            <p className={styles.insight}>
              {active.insight}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
