import Link from "next/link";

import { IndustryIcon } from "./IndustryIcon";
import type { IndustryItem } from "./industries.types";
import styles from "./IndustriesSection.module.css";

type IndustryPanelProps = {
  industry: IndustryItem;
};

function PanelContent({
  industry,
}: IndustryPanelProps) {
  return (
    <>
      <div
        className={styles.visual}
        style={
          industry.imageSrc
            ? {
                backgroundImage: `linear-gradient(180deg, rgba(3, 14, 24, 0.08), rgba(3, 14, 24, 0.94)), url("${industry.imageSrc}")`,
              }
            : undefined
        }
      >
        <div className={styles.visualAtmosphere} />

        <span className={styles.iconShell}>
          <IndustryIcon
            iconKey={industry.iconKey}
            className={styles.icon}
          />
        </span>
      </div>

      <div className={styles.panelContent}>
        <span className={styles.panelEyebrow}>
          {industry.eyebrow}
        </span>

        <h3>{industry.title}</h3>

        <p className={styles.statement}>
          {industry.statement}
        </p>

        <p className={styles.panelDescription}>
          {industry.description}
        </p>

        {industry.routeStatus === "live" ? (
          <span className={styles.panelAction}>
            Explore advisory
            <span aria-hidden="true">↗</span>
          </span>
        ) : (
          <span className={styles.plannedLabel}>
            Industry page in development
          </span>
        )}
      </div>
    </>
  );
}

export function IndustryPanel({
  industry,
}: IndustryPanelProps) {
  const className = [
    styles.panel,
    industry.featured ? styles.featuredPanel : "",
    styles[`panel_${industry.id}`],
  ]
    .filter(Boolean)
    .join(" ");

  if (industry.routeStatus === "live") {
    return (
      <Link
        href={industry.href}
        className={className}
        aria-label={`Explore advisory for ${industry.title}`}
      >
        <PanelContent industry={industry} />
      </Link>
    );
  }

  return (
    <article className={className}>
      <PanelContent industry={industry} />
    </article>
  );
}
