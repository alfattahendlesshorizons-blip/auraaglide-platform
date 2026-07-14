"use client";

import type {
  ServiceCapability,
  ServiceCapabilityId,
} from "./services-ecosystem.types";

import styles from "./ServicesEcosystemSection.module.css";

type ServicesEcosystemNavigatorProps = {
  capabilities: ServiceCapability[];
  activeId: ServiceCapabilityId;
  onSelect: (id: ServiceCapabilityId) => void;
};

export function ServicesEcosystemNavigator({
  capabilities,
  activeId,
  onSelect,
}: ServicesEcosystemNavigatorProps) {
  return (
    <div
      className={styles.navigator}
      aria-label="Business capability areas"
    >
      <div className={styles.navigatorIntro}>
        <p className={styles.navigatorEyebrow}>
          Capability Flow
        </p>

        <p className={styles.navigatorDescription}>
          The system moves automatically. Select any area to explore it now.
        </p>
      </div>

      <div className={styles.navigatorViewport}>
        <div className={styles.navigatorList}>
          <span className={styles.navigatorRail} aria-hidden="true" />
          <span className={styles.navigatorLight} aria-hidden="true" />

          {capabilities.map((capability) => {
            const active = capability.id === activeId;

            return (
              <button
                key={capability.id}
                type="button"
                className={styles.navigatorItem}
                data-active={active ? "true" : "false"}
                aria-pressed={active}
                onClick={() => onSelect(capability.id)}
              >
                <span className={styles.navigatorNode} aria-hidden="true">
                  <span className={styles.navigatorNodeCore} />
                </span>

                <span className={styles.navigatorLabel}>
                  {capability.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
