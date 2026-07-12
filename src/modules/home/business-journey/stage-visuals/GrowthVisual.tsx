import styles from "./StageVisual.module.css";

export function GrowthVisual() {
  return (
    <div className={styles.visual}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path
          className={`${styles.line} ${styles.lineGold}`}
          d="M34 85 L54 65 L66 72 L90 40"
        />

        <path
          className={`${styles.line} ${styles.lineDelay}`}
          d="M54 65 L43 45 M66 72 L78 84 M66 72 L85 67"
        />

        <circle className={styles.node} cx="34" cy="85" r="4" />
        <circle className={styles.nodeGold} cx="54" cy="65" r="6" />
        <circle className={styles.node} cx="43" cy="45" r="4" />
        <circle className={styles.node} cx="78" cy="84" r="4" />
        <circle className={styles.node} cx="85" cy="67" r="4" />
        <circle className={styles.nodeGold} cx="90" cy="40" r="5" />

        <circle className={styles.pulse} cx="90" cy="40" r="13" />
      </svg>

      <span className={styles.caption}>Systems multiplying</span>
    </div>
  );
}

