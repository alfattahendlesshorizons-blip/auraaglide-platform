import type { CSSProperties, ReactNode } from "react";
import styles from "./MotionReveal.module.css";

export type MotionRevealProps = {
  children: ReactNode;
  delay?: number;
  distance?: "small" | "medium";
  className?: string;
};

export function MotionReveal({
  children,
  delay = 0,
  distance = "small",
  className = "",
}: MotionRevealProps) {
  return (
    <div
      className={[
        styles.reveal,
        styles[distance],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={
        {
          "--reveal-delay": `${delay}ms`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

