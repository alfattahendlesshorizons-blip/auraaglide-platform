import styles from "./LivingRay.module.css";

export type LivingRayProps = {
  size?: "xs" | "sm" | "md";
  direction?: "left" | "right";
  className?: string;
};

export function LivingRay({
  size = "sm",
  direction = "left",
  className = "",
}: LivingRayProps) {
  return (
    <span
      className={[
        styles.root,
        styles[size],
        styles[direction],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      <span className={styles.base} />
      <span className={styles.energy} />
    </span>
  );
}
