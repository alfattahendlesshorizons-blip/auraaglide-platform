import { ActionLink } from "@/design-system/primitives/action-link";

import type { ServiceCapability } from "./services-ecosystem.types";

import styles from "./ServicesEcosystemSection.module.css";

type ServicesEcosystemLinksProps = {
  capability: ServiceCapability;
};

function ServiceRowMark() {
  return (
    <svg
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <path d="M3 9h11" />
      <path d="m10 5 4 4-4 4" />
    </svg>
  );
}

export function ServicesEcosystemLinks({
  capability,
}: ServicesEcosystemLinksProps) {
  return (
    <aside
      key={capability.id}
      className={styles.services}
      aria-label={`${capability.title} services`}
    >
      <div className={styles.servicesHeader}>
        <p className={styles.servicesEyebrow}>
          Relevant Services
        </p>

        <p className={styles.servicesTitle}>
          {capability.title}
        </p>
      </div>

      <nav className={styles.serviceLinks}>
        {capability.services.map((service, index) => (
          <a
            key={service.href}
            href={service.href}
            style={{
              "--service-index": index,
            } as React.CSSProperties}
          >
            <span>{service.label}</span>

            <span className={styles.serviceMark} aria-hidden="true">
              <ServiceRowMark />
            </span>
          </a>
        ))}
      </nav>

      <ActionLink
        href={capability.cta.href}
        variant="editorial"
        size="md"
        arrow="journey"
        className={styles.capabilityAction}
      >
        {capability.cta.label}
      </ActionLink>
    </aside>
  );
}
