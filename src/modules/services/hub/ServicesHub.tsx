import Link from "next/link";

import type { ServiceContract } from "@/core/content/contracts";
import { HeroShell } from "@/design-system/patterns/hero-shell";
import { ServicesJourneySection } from "@/modules/services/journey";
import { ActionLink } from "@/design-system/primitives/action-link";

import { servicesHeroContent } from "./services-hero.data";
import styles from "./ServicesHub.module.css";

type ServicesHubProps = {
  services: readonly ServiceContract[];
};

const domainOrder = [
  "domain-business-formation",
  "domain-registrations-compliance",
  "domain-legal-protection",
  "domain-finance-tax",
  "domain-global-business",
] as const;

const domainContent: Record<
  string,
  {
    step: string;
    title: string;
    description: string;
  }
> = {
  "domain-business-formation": {
    step: "Start",
    title: "Start Your Business",
    description:
      "Choose and register the structure that fits your ownership, risk and future direction.",
  },
  "domain-registrations-compliance": {
    step: "Run",
    title: "Run Your Business",
    description:
      "Manage essential registrations, licences and recurring operating responsibilities.",
  },
  "domain-legal-protection": {
    step: "Protect",
    title: "Protect Your Business",
    description:
      "Protect the name, work and legal relationships your business is building.",
  },
  "domain-finance-tax": {
    step: "Manage",
    title: "Manage GST, Tax & Accounts",
    description:
      "Keep tax, filings and financial records connected to daily business activity.",
  },
  "domain-global-business": {
    step: "Expand",
    title: "Expand Globally",
    description:
      "Evaluate international setup routes with the wider legal and operating context in view.",
  },
};

export function ServicesHub({
  services,
}: ServicesHubProps) {
  const groups = domainOrder
    .map((domainId) => ({
      domainId,
      content: domainContent[domainId],
      services: services.filter((service) => service.domainId === domainId),
    }))
    .filter((group) => group.services.length > 0);

  const heroCategories = servicesHeroContent.categories
    .filter((category) => category.enabled)
    .sort((a, b) => a.order - b.order);

  return (
    <article className={styles.page}>
      <HeroShell
        ariaLabelledBy="services-hero-title"
        content={
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              {servicesHeroContent.eyebrow}
            </p>

            <h1 id="services-hero-title">
              {servicesHeroContent.title}
              <span> {servicesHeroContent.accent}</span>
            </h1>

            <p className={styles.heroCopy}>
              {servicesHeroContent.description}
            </p>

            <div className={styles.heroActions}>
              <ActionLink
                href={servicesHeroContent.primaryCta.href}
                variant="primary"
                size="lg"
                arrow="journey"
              >
                {servicesHeroContent.primaryCta.label}
              </ActionLink>

              <ActionLink
                href={servicesHeroContent.secondaryCta.href}
                variant="secondary"
                size="lg"
                arrow="right"
              >
                {servicesHeroContent.secondaryCta.label}
              </ActionLink>
            </div>

            <div
              className={styles.heroTrail}
              aria-label="Business support journey"
            >
              {heroCategories.map((category, index) => (
                <span key={category.id}>
                  {category.label}

                  {index < heroCategories.length - 1 ? (
                    <i aria-hidden="true">{"→"}</i>
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        }
        media={
          <div
            className={styles.heroMedia}
            aria-label="Services visual area"
          >
            <div className={styles.heroMediaGlow} aria-hidden="true" />
          </div>
        }
      />

      <ServicesJourneySection />

      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introLabel}>
            <p>Choose by business need</p>
            <span aria-hidden="true" />
          </div>

          <div className={styles.introCopy}>
            <h2>
              Services are easier to understand when they follow the way a
              business actually grows.
            </h2>
            <p>
              Explore support by situation rather than searching through a
              disconnected directory. Each service page explains suitability,
              requirements, documents, process and connected responsibilities.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.groups}>
        {groups.map((group, groupIndex) => (
          <section
            className={styles.group}
            data-tone={groupIndex % 2 === 0 ? "light" : "soft"}
            key={group.domainId}
          >
            <div className={styles.container}>
              <header className={styles.groupHeader}>
                <div>
                  <span className={styles.stepNumber}>
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                  <p>{group.content.step}</p>
                </div>

                <div>
                  <h2>{group.content.title}</h2>
                  <p>{group.content.description}</p>
                </div>
              </header>

              <div className={styles.serviceList}>
                {group.services.map((service, serviceIndex) => (
                  <Link
                    className={styles.serviceRow}
                    href={`/services/${service.slug}`}
                    key={service.id}
                  >
                    <span className={styles.serviceIndex}>
                      {String(serviceIndex + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3>{service.shortTitle ?? service.title}</h3>
                      <p>{service.summary}</p>
                    </div>

                    <span className={styles.serviceArrow} aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <div>
            <p className={styles.eyebrow}>Not sure where to start?</p>
            <h2>Begin with the business, not a service label.</h2>
            <p>
              Tell us where your business stands today. We will help identify
              what deserves attention now and what can follow later.
            </p>
          </div>

          <Link
            className={styles.primaryAction}
            href="/approach/assessment"
          >
            Plan Your Next Step
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
