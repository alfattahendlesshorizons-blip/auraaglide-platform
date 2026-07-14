import { ActionLink } from "@/design-system/primitives/action-link";

import type { SiteFooterContent } from "../site-footer.types";
import styles from "../SiteFooter.module.css";

export function FooterCta({ cta }: { cta: SiteFooterContent["cta"] }) {
  const headingWords = cta.heading.trim().split(/\s+/);

  const headingPrimary = headingWords.slice(0, 3).join(" ");
  const headingSecondary = headingWords.slice(3, 7).join(" ");
  const headingAccent = headingWords.slice(7).join(" ");

  return (
    <section className={styles.ctaPanel} aria-labelledby="footer-cta-heading">
      <span className={styles.ctaEdge} aria-hidden="true" />
      <span className={styles.ctaCornerGlow} aria-hidden="true" />
      <span className={styles.ctaGlow} aria-hidden="true" />

      <div className={styles.ctaCopy}>
        <p className={styles.eyebrow}>{cta.eyebrow}</p>

        <h2 id="footer-cta-heading" className={styles.ctaHeading}>
          <span className={styles.ctaHeadingPrimary}>
            {headingPrimary}
          </span>

          <span className={styles.ctaHeadingSecondary}>
            {headingSecondary}
          </span>

          <span className={styles.ctaHeadingAccent}>
            {headingAccent}
          </span>
        </h2>

        <p className={styles.ctaDescription}>{cta.description}</p>
      </div>

      <div className={styles.ctaDecision}>
        <div className={styles.ctaDecisionLines} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <blockquote className={styles.ctaQuote}>
          <span aria-hidden="true">&ldquo;</span>
          {cta.quote}
          <span aria-hidden="true">&rdquo;</span>
        </blockquote>

        <div className={styles.ctaActionContext}>
          <p className={styles.ctaContextLabel}>{cta.contextLabel}</p>

          <p className={styles.ctaContextDescription}>
            {cta.contextDescription}
          </p>
        </div>

        <div className={styles.ctaActions}>
          <ActionLink
            href={cta.primaryAction.href}
            variant="primary"
            size="lg"
            arrow="journey"
          >
            {cta.primaryAction.label}
          </ActionLink>

          <ActionLink
            href={cta.secondaryAction.href}
            variant="secondary"
            size="md"
            arrow="right"
          >
            {cta.secondaryAction.label}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}