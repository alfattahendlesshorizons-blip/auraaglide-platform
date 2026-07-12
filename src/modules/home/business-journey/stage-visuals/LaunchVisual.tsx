import styles from "./StageVisual.module.css";

export function LaunchVisual() {
  return (
    <div className={styles.visual}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path
          className={`${styles.line} ${styles.lineGold}`}
          d="M29 86 H91 M36 86 V52 L60 34 L84 52 V86"
        />

        <path
          className={`${styles.line} ${styles.lineDelay}`}
          d="M48 86 V66 H72 V86 M42 53 H78"
        />

        <circle className={styles.node} cx="36" cy="52" r="4" />
        <circle className={styles.nodeGold} cx="60" cy="34" r="6" />
        <circle className={styles.node} cx="84" cy="52" r="4" />

        <circle className={styles.pulse} cx="60" cy="34" r="14" />
      </svg>

      <span className={styles.caption}>Foundation assembled</span>
    </div>
  );
}

