import Image from "next/image";
import Link from "next/link";

import type { ServiceContract } from "@/core/content/contracts";
import {
  resolveServiceLayout,
  type ServiceLayoutKey,
} from "@/core/content/service-layouts";
import { ActionLink } from "@/design-system/primitives/action-link";

import { ServiceSectionRenderer } from "./ServiceSectionRenderer";
import styles from "./ServicePage.module.css";

type ServicePageProps = {
  service: ServiceContract;
  layoutKey?: ServiceLayoutKey;
};

const lifecycleLabels: Record<string, string> = {
  idea: "Idea",
  start: "Starting",
  register: "Registration",
  operate: "Running",
  comply: "Compliance",
  protect: "Protection",
  finance: "Finance",
  expand: "Expansion",
  global: "Global",
  scale: "Scale",
};

function humanize(value: string) {
  return value
    .split("-")
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

export function ServicePage({
  service,
  layoutKey,
}: ServicePageProps) {
  const layout = resolveServiceLayout(layoutKey);
  const layoutOrder = new Map(
    layout.sectionOrder.map((kind, index) => [kind, index]),
  );

  const enabledSections = service.sections
    .filter((section) => section.enabled)
    .sort((a, b) => {
      const aOrder = layoutOrder.get(a.kind) ?? Number.MAX_SAFE_INTEGER;
      const bOrder = layoutOrder.get(b.kind) ?? Number.MAX_SAFE_INTEGER;

      return aOrder - bOrder || a.order - b.order;
    });

  const primaryCta = service.primaryCta ?? {
    id: "service-assessment",
    label: "Get a Business Assessment",
    href: "/approach/assessment",
    style: "primary" as const,
  };

  const secondaryCta = service.secondaryCta ?? {
    id: "service-contact",
    label: "Talk to an Advisor",
    href: "/contact",
    style: "secondary" as const,
  };

  const heroImage = "/images/home/hero-advisory-office.png";
  const heroImageAlt =
    service.featuredMedia?.alt ??
    `${service.shortTitle ?? service.title} business consultation`;

  return (
    <article className={styles.page} data-layout={layout.key}>
      <section className={styles.hero}>
        <div className={styles.heroAtmosphere} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">
                {service.shortTitle ?? service.title}
              </span>
            </nav>

            <p className={styles.eyebrow}>
              {humanize(service.availability)} business support
            </p>

            <h1>{service.title}</h1>
            <p className={styles.summary}>{service.summary}</p>

            <div className={styles.actions}>
              <ActionLink
                href={primaryCta.href}
                variant="primary"
                size="lg"
                arrow="journey"
              >
                {primaryCta.label}
              </ActionLink>

              <ActionLink
                href={secondaryCta.href}
                variant="secondary"
                size="lg"
                arrow="right"
              >
                {secondaryCta.label}
              </ActionLink>
            </div>

            <p className={styles.heroNote}>
              Understand suitability, documents, process and connected
              responsibilities before you begin.
            </p>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.imageFrame}>
              <Image
                src={heroImage}
                alt={heroImageAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 42vw"
                className={styles.heroImage}
              />
              <div className={styles.imageShade} aria-hidden="true" />
            </div>

            <aside
              className={styles.summaryPanel}
              aria-label="Service overview"
            >
              <p className={styles.panelLabel}>Service overview</p>

              <dl className={styles.facts}>
                <div>
                  <dt>Relevant stages</dt>
                  <dd>
                    {service.lifecycleStages
                      .map(
                        (stage) =>
                          lifecycleLabels[stage] ?? humanize(stage),
                      )
                      .join(" Â· ")}
                  </dd>
                </div>

                <div>
                  <dt>Delivery model</dt>
                  <dd>{humanize(service.deliveryModel)}</dd>
                </div>

                <div>
                  <dt>Availability</dt>
                  <dd>{humanize(service.availability)}</dd>
                </div>

                {service.jurisdictions?.length ? (
                  <div>
                    <dt>Jurisdiction</dt>
                    <dd>
                      {service.jurisdictions
                        .map((item) => item.countryName)
                        .join(", ")}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <div className={styles.sections}>
        {enabledSections.map((section, index) => (
          <ServiceSectionRenderer
            key={section.id}
            section={section}
            index={index}
          />
        ))}
      </div>

      <section className={styles.finalCta}>
        <div className={styles.finalCtaGlow} aria-hidden="true" />

        <div className={styles.finalCtaInner}>
          <div>
            <p className={styles.sectionEyebrow}>
              Start with your business situation
            </p>
            <h2>
              Still deciding whether this structure fits your business?
            </h2>
            <p>
              Share the requirement you already know. We will help identify
              what applies now, which alternatives deserve comparison and what
              may need attention next.
            </p>
          </div>

          <div className={styles.finalActions}>
            <ActionLink
              href={primaryCta.href}
              variant="primary"
              size="lg"
              arrow="journey"
            >
              {primaryCta.label}
            </ActionLink>

            <ActionLink
              href={secondaryCta.href}
              variant="secondary"
              size="lg"
              arrow="right"
            >
              {secondaryCta.label}
            </ActionLink>
          </div>
        </div>
      </section>
    </article>
  );
}
