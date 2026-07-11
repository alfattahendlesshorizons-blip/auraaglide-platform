import styles from "./StageVisual.module.css";

export function RunningVisual() {
  return (
    <div className={styles.visual}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <g className={styles.rotator}>
          <circle
            className={styles.line}
            cx="60"
            cy="60"
            r="35"
          />

          <circle className={styles.node} cx="60" cy="25" r="4" />
          <circle className={styles.node} cx="95" cy="60" r="4" />
          <circle className={styles.node} cx="60" cy="95" r="4" />
          <circle className={styles.node} cx="25" cy="60" r="4" />
        </g>

        <path
          className={`${styles.line} ${styles.lineGold}`}
          d="M60 40 V80 M40 60 H80"
        />

        <circle className={styles.nodeGold} cx="60" cy="60" r="7" />
        <circle className={styles.pulse} cx="60" cy="60" r="16" />
      </svg>

      <span className={styles.caption}>Operations connected</span>
    </div>
  );
}
