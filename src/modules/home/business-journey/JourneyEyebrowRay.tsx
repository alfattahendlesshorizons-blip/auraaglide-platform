import styles from "./JourneyEyebrowRay.module.css";

type JourneyEyebrowRayProps = {
  label: string;
};

export function JourneyEyebrowRay({
  label,
}: JourneyEyebrowRayProps) {
  return (
    <div className={styles.root}>
      <p>{label}</p>

      <span className={styles.rail} aria-hidden="true">
        <span className={styles.ray} />
      </span>
    </div>
  );
}

