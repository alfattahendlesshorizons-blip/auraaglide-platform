import { ActionLink } from "@/design-system/primitives/action-link";
import type { SiteFooterContent } from "../site-footer.types";
import styles from "../SiteFooter.module.css";

export function FooterCta({ cta }: { cta: SiteFooterContent["cta"] }) {
  return <section className={styles.ctaPanel} aria-labelledby="footer-cta-heading"><span className={styles.ctaEdge} aria-hidden="true"/><div><p className={styles.eyebrow}>{cta.eyebrow}</p><h2 id="footer-cta-heading" className={styles.ctaHeading}>{cta.heading}</h2><p className={styles.ctaDescription}>{cta.description}</p></div><div className={styles.ctaActions}><ActionLink href={cta.primaryAction.href} variant="primary" size="lg" arrow="journey">{cta.primaryAction.label}</ActionLink><ActionLink href={cta.secondaryAction.href} variant="secondary" size="md" arrow="right">{cta.secondaryAction.label}</ActionLink></div></section>;
}
