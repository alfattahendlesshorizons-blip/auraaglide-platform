import styles from "./StageVisual.module.css";

export function ExpansionVisual() {
  return (
    <div className={styles.visual}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle
          className={`${styles.line} ${styles.rotator}`}
          cx="60"
          cy="60"
          r="38"
        />

        <path
          className={`${styles.line} ${styles.lineGold}`}
          d="M60 60 L29 39 M60 60 L94 42 M60 60 L92 81 M60 60 L34 88"
        />

        <path
          className={`${styles.line} ${styles.lineDelay}`}
          d="M29 39 C53 15 83 20 94 42 M34 88 C56 105 80 101 92 81"
        />

        <circle className={styles.nodeGold} cx="60" cy="60" r="7" />
        <circle className={styles.node} cx="29" cy="39" r="4" />
        <circle className={styles.node} cx="94" cy="42" r="4" />
        <circle className={styles.node} cx="92" cy="81" r="4" />
        <circle className={styles.node} cx="34" cy="88" r="4" />

        <circle className={styles.pulse} cx="60" cy="60" r="17" />
      </svg>

      <span className={styles.caption}>Markets expanding</span>
    </div>
  );
}

