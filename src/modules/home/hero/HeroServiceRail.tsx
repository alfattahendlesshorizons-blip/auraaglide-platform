import Link from "next/link";
import type { HeroRailItem } from "./hero.types";
import styles from "./HeroServiceRail.module.css";

type HeroServiceRailProps = {
  items: HeroRailItem[];
};

export function HeroServiceRail({
  items,
}: HeroServiceRailProps) {
  const visibleItems = items
    .filter((item) => item.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <nav
      className={styles.rail}
      aria-label="Popular business services"
    >
      {visibleItems.map((item, index) => (
        <Link
          href={item.href}
          className={styles.item}
          key={item.href}
          title={item.description}
        >
          <span className={styles.node} aria-hidden="true">
            <span />
          </span>

          <span className={styles.label}>
            {item.label}
          </span>

          {index < visibleItems.length - 1 && (
            <span
              className={styles.connector}
              aria-hidden="true"
            />
          )}
        </Link>
      ))}
    </nav>
  );
}

