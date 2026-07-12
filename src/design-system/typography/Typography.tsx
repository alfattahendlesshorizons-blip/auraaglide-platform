import type {
  ElementType,
  ReactNode,
} from "react";
import styles from "./Typography.module.css";

export type TypographyVariant =
  | "display"
  | "sectionTitle"
  | "sectionLabel"
  | "editorialQuote"
  | "bodyLarge"
  | "body"
  | "caption";

export type TypographyTone =
  | "light"
  | "steel"
  | "gold"
  | "muted";

export type TypographyProps = {
  as?: ElementType;
  variant: TypographyVariant;
  tone?: TypographyTone;
  children: ReactNode;
  className?: string;
};

export function Typography({
  as: Component = "p",
  variant,
  tone = "light",
  children,
  className = "",
}: TypographyProps) {
  return (
    <Component
      className={[
        styles.base,
        styles[variant],
        styles[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}

