import type {
  ElementType,
  ReactNode,
} from "react";

import styles from "./PremiumFrame.module.css";

export type PremiumFrameProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  edgeMotion?: boolean;
};

export function PremiumFrame({
  as: Component = "div",
  children,
  className = "",
  edgeMotion = true,
}: PremiumFrameProps) {
  return (
    <Component
      className={[
        styles.frame,
        edgeMotion ? styles.edgeMotion : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={styles.topEdge}
        aria-hidden="true"
      />

      <span
        className={styles.topBloom}
        aria-hidden="true"
      />

      {children}
    </Component>
  );
}
