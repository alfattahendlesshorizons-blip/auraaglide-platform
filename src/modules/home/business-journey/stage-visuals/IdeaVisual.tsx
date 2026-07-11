import styles from "./StageVisual.module.css";

export function IdeaVisual() {
  return (
    <div className={styles.visual}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <path
          id="ideaPath"
          className={`${styles.line} ${styles.lineGold}`}
          d="M25 78 C38 67 44 44 60 37 C78 29 92 45 94 63"
        />

        <path
          className={`${styles.line} ${styles.lineDelay}`}
          d="M28 78 L48 83 L61 63 L77 72 L94 63"
        />

        <circle className={styles.node} cx="28" cy="78" r="4" />
        <circle className={styles.node} cx="48" cy="83" r="4" />
        <circle className={styles.nodeGold} cx="61" cy="63" r="6" />
        <circle className={styles.node} cx="77" cy="72" r="4" />
        <circle className={styles.node} cx="94" cy="63" r="4" />

        <circle className={styles.pulse} cx="61" cy="63" r="14" />

        <circle
          className={styles.tracer}
          r="2.6"
          style={{ offsetPath: 'path("M25 78 C38 67 44 44 60 37 C78 29 92 45 94 63")' }}
        />
      </svg>

      <span className={styles.caption}>Concept formation</span>
    </div>
  );
}
