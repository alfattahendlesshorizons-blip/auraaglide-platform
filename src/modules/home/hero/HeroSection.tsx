import Image from "next/image";
import { ActionLink } from "@/design-system/primitives/action-link";
import { heroContent } from "./hero.data";
import { HeroServiceRail } from "./HeroServiceRail";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.topEdge} aria-hidden="true" />
        <div className={styles.topBloom} aria-hidden="true" />
        <div className={styles.cornerLight} aria-hidden="true" />

        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowRay} aria-hidden="true" />
            <span>{heroContent.eyebrow}</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.primary}>
              {heroContent.title.primary}
            </span>

            <span className={styles.secondary}>
              {heroContent.title.secondary}
            </span>

            <span className={styles.accent}>
              {heroContent.title.accent}
            </span>
          </h1>

          <p className={styles.description}>
            {heroContent.description}
          </p>
<div className={styles.ctaArea}>
            <div className={styles.actions}>
              <ActionLink
                href={heroContent.primaryAction.href}
                variant="primary"
                arrow="diagonal"
              >
                {heroContent.primaryAction.label}
              </ActionLink>

              <ActionLink
                href={heroContent.secondaryAction.href}
                variant="secondary"
                arrow="right"
              >
                {heroContent.secondaryAction.label}
              </ActionLink>
            </div>

            <p className={styles.reassurance}>
              <span aria-hidden="true">◆</span>
              {heroContent.reassurance}
            </p>
          </div>
        </div>

        <div className={styles.visualStack}>
          <div className={styles.visual}>
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 47vw"
            className={styles.image}
          />

          <div className={styles.imageShade} />
          <div className={styles.imageEdge} />
          </div>

          <HeroServiceRail items={heroContent.railItems} />
        </div>
      </div>
    </section>
  );
}





