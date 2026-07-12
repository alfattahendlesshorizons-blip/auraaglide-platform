import { LivingRay } from "./LivingRay";
import styles from "./SectionLabel.module.css";

export type SectionLabelProps = {
  children: string;
  raySize?: "xs" | "sm" | "md";
  className?: string;
};

export function SectionLabel({
  children,
  raySize = "sm",
  className = "",
}: SectionLabelProps) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      <span>{children}</span>
      <LivingRay size={raySize} />
    </div>
  );
}

