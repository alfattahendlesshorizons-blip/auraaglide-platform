import type { SectionTransitionProps } from "./SectionTransition.types";
import styles from "./SectionTransition.module.css";

export function SectionTransition({
  label,
  variant = "panel-to-canvas",
  align = "center",
  className = "",
}: SectionTransitionProps) {
  const rootClassName = [
    styles.transition,
    styles[variant],
    styles[align],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName}>
      <div className={styles.sweep} aria-hidden="true">
        <span className={styles.baseLine} />
        <span className={styles.goldRay} />
        <span className={styles.rayHead} />
      </div>

      {label ? <p className={styles.label}>{label}</p> : null}
    </div>
  );
}

