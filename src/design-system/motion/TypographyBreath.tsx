import type { ReactNode } from "react";
import styles from "./TypographyBreath.module.css";

export type TypographyBreathTone =
  | "light"
  | "steel"
  | "gold";

export type TypographyBreathProps = {
  children: ReactNode;
  tone?: TypographyBreathTone;
  className?: string;
};

export function TypographyBreath({
  children,
  tone = "light",
  className = "",
}: TypographyBreathProps) {
  return (
    <span
      className={[
        styles.root,
        styles[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
