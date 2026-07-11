import type { ReactNode } from "react";
import styles from "./ActiveGlow.module.css";

export type ActiveGlowProps = {
  children: ReactNode;
  active?: boolean;
  className?: string;
};

export function ActiveGlow({
  children,
  active = false,
  className = "",
}: ActiveGlowProps) {
  return (
    <span
      className={[
        styles.root,
        active ? styles.active : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
