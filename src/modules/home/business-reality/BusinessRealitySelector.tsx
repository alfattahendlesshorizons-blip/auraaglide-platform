import { BusinessRealityIcon } from "./BusinessRealityIcon";
import type { BusinessRealityItem } from "./business-reality.types";
import styles from "./BusinessRealitySection.module.css";

type BusinessRealitySelectorProps = {
  items: BusinessRealityItem[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function BusinessRealitySelector({
  items,
  activeId,
  onSelect,
}: BusinessRealitySelectorProps) {
  return (
    <div
      className={styles.selector}
      role="tablist"
      aria-label="Choose a business context"
    >
      <div className={styles.selectorIntro}>
        <div className={styles.selectorIntroLabel}>
          <span
            className={styles.selectorIntroRay}
            aria-hidden="true"
          />

          <span>BUSINESS CONTEXT</span>
        </div>

        <p>
          Choose the context that best reflects your operations.
        </p>
      </div>

      <div className={styles.selectorList}>
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`business-panel-${item.id}`}
              className={[
                styles.selectorItem,
                isActive
                  ? styles.selectorItemActive
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onSelect(item.id)}
            >
              <span
                className={styles.selectorActiveBar}
                aria-hidden="true"
              />

              <span
                className={styles.selectorIconShell}
                aria-hidden="true"
              >
                <BusinessRealityIcon
                  iconKey={item.iconKey}
                  className={styles.selectorIcon}
                />
              </span>

              <span className={styles.selectorLabel}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
