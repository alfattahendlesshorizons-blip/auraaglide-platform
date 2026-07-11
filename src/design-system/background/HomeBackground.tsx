import styles from "./HomeBackground.module.css";

export function HomeBackground() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.base} />
      <div className={styles.blueDepth} />
      <div className={styles.leftVignette} />
      <div className={styles.goldWarmth} />
      <div className={styles.grid} />
      <div className={styles.curveOne} />
      <div className={styles.curveTwo} />
      <div className={styles.noise} />
    </div>
  );
}
