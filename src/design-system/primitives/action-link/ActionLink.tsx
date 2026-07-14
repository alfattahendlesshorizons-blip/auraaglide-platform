import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./ActionLink.module.css";

export type ActionLinkVariant =
  | "primary"
  | "secondary"
  | "editorial"
  | "ghost"
  | "navbar";

export type ActionLinkSize = "sm" | "md" | "lg";

export type ActionLinkArrow =
  | "diagonal"
  | "right"
  | "journey"
  | "none";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ActionLinkVariant;
  size?: ActionLinkSize;
  arrow?: ActionLinkArrow;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  target?: "_blank" | "_self";
  rel?: string;
};

function JourneyIndicator() {
  return (
    <span
      className={styles.journeyMark}
      aria-hidden="true"
    >
      <span className={styles.journeyLine} />
      <span className={styles.journeyLight} />
    </span>
  );
}

function DirectionIcon({
  diagonal = false,
}: {
  diagonal?: boolean;
}) {
  return (
    <svg
      className={styles.directionIcon}
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      {diagonal ? (
        <>
          <path d="M5 13 13 5" />
          <path d="M7 5h6v6" />
        </>
      ) : (
        <>
          <path d="M3 9h11" />
          <path d="m10 5 4 4-4 4" />
        </>
      )}
    </svg>
  );
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = "right",
  className = "",
  ariaLabel,
  onClick,
  target,
  rel,
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      target={target}
      rel={rel}
      className={[
        styles.action,
        styles[variant],
        styles[size],
        arrow === "journey" ? styles.hasJourney : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={styles.edge} aria-hidden="true" />

      <span className={styles.label}>
        {children}
      </span>

      {arrow === "journey" ? (
        <JourneyIndicator />
      ) : null}

      {arrow === "right" ? (
        <span className={styles.arrow} aria-hidden="true">
          <DirectionIcon />
        </span>
      ) : null}

      {arrow === "diagonal" ? (
        <span className={styles.arrow} aria-hidden="true">
          <DirectionIcon diagonal />
        </span>
      ) : null}
    </Link>
  );
}
