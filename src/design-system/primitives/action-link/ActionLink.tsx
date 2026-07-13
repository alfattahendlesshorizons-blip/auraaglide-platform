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
export type ActionLinkArrow = "diagonal" | "right" | "none";

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
  const arrowCharacter =
    arrow === "diagonal" ? "↗" : arrow === "right" ? "→" : null;

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
