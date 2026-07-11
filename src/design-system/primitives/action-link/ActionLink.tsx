import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ActionLink.module.css";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  arrow?: "diagonal" | "right";
  className?: string;
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  arrow = "right",
  className = "",
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={`${styles.action} ${styles[variant]} ${className}`}
    >
      <span className={styles.label}>{children}</span>

      <span className={styles.arrow} aria-hidden="true">
        {arrow === "diagonal" ? "↗" : "→"}
      </span>
    </Link>
  );
}
