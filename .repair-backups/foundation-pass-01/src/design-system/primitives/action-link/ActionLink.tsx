import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./ActionLink.module.css";

export type ActionLinkVariant =
  | "primary"
  | "secondary"
  | "editorial";

export type ActionLinkArrow =
  | "diagonal"
  | "right"
  | "none";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ActionLinkVariant;
  arrow?: ActionLinkArrow;
  className?: string;
  ariaLabel?: string;
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  arrow = "right",
  className = "",
  ariaLabel,
}: ActionLinkProps) {
  const arrowCharacter =
    arrow === "diagonal"
      ? "↗"
      : arrow === "right"
        ? "→"
        : null;

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={[
        styles.action,
        styles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={styles.edge} aria-hidden="true" />

      <span className={styles.label}>{children}</span>

      {arrowCharacter ? (
        <span className={styles.arrow} aria-hidden="true">
          {arrowCharacter}
        </span>
      ) : null}
    </Link>
  );
}
