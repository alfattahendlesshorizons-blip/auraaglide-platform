import type { CSSProperties } from "react";

import Link from "next/link";

import { ActionLink } from "@/design-system/primitives/action-link";
import { Typography } from "@/design-system/typography";

import { BusinessRealityIcon } from "./BusinessRealityIcon";
import type { BusinessRealityItem } from "./business-reality.types";
import styles from "./BusinessRealitySection.module.css";

type BusinessRealityCanvasProps = {
  item: BusinessRealityItem;
  transitionKey: number;
};

export function BusinessRealityCanvas({
  item,
  transitionKey,
}: BusinessRealityCanvasProps) {
  const visualStyle = item.imageSrc
    ? {
        backgroundImage: `
          linear-gradient(
            180deg,
            rgba(3, 14, 24, 0.03) 0%,
            rgba(3, 14, 24, 0.12) 52%,
            rgba(3, 14, 24, 0.58) 100%
          ),
          url("${item.imageSrc}")
        `,
      }
    : undefined;

  return (
    <article
      id={`business-panel-${item.id}`}
      role="tabpanel"
      className={styles.canvas}
      aria-label={item.label}
    >
      <div
        key={`visual-${transitionKey}`}
        className={styles.canvasVisual}
        style={visualStyle}
        role={item.imageSrc ? "img" : undefined}
        aria-label={item.imageSrc ? item.imageAlt : undefined}
      >
        <span
          className={styles.imageAtmosphere}
          aria-hidden="true"
        />
      </div>

      <div
        key={`content-${transitionKey}`}
        className={styles.canvasContent}
      >
        <div className={styles.canvasHeader}>
          <span
            className={styles.canvasIconShell}
            aria-hidden="true"
          >
            <BusinessRealityIcon
              iconKey={item.iconKey}
              className={styles.canvasIcon}
            />
          </span>

          <Typography
            as="p"
            variant="sectionLabel"
            tone="gold"
            className={styles.canvasContext}
          >
            {item.label}
          </Typography>
        </div>

        <Typography
          as="blockquote"
          variant="editorialQuote"
          tone="light"
          className={styles.quote}
        >
          {item.quote}
        </Typography>

        <Typography
          as="p"
          variant="body"
          tone="steel"
          className={styles.canvasDescription}
        >
          {item.description}
        </Typography>

        <ul className={styles.highlights}>
          {item.highlights.map((highlight, index) => (
            <li
              key={highlight.label}
              style={
                {
                  "--highlight-index": index,
                } as CSSProperties
              }
            >
              <Link href={highlight.href}>
                <span
                  className={styles.highlightPulse}
                  aria-hidden="true"
                />

                {highlight.label}
              </Link>
            </li>
          ))}
        </ul>

        <ActionLink
          href={item.href}
          variant="secondary"
          arrow="diagonal"
          className={styles.canvasAction}
        >
          Explore {item.label.toLowerCase()} advisory
        </ActionLink>
      </div>
    </article>
  );
}
