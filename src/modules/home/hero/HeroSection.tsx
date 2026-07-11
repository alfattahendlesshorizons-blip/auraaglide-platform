import Image from "next/image";
import Link from "next/link";
import { heroContent } from "./hero.data";
import { HeroTrustIcon } from "./HeroTrustIcon";
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

          <div
            className={styles.trustModules}
            aria-label="Why businesses choose AuraaGlide"
          >
            {heroContent.trustItems.map((item) => (
              <div className={styles.trustModule} key={item.title}>
                <HeroTrustIcon type={item.icon} />

                <div className={styles.trustCopy}>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.ctaArea}>
            <div className={styles.actions}>
              <Link
                href={heroContent.primaryAction.href}
                className={`${styles.actionButton} ${styles.primaryAction}`}
              >
                <span>{heroContent.primaryAction.label}</span>
                <span className={styles.primaryArrow} aria-hidden="true">
                  ↗
                </span>
              </Link>

              <Link
                href={heroContent.secondaryAction.href}
                className={styles.secondaryAction}
              >
                <span>{heroContent.secondaryAction.label}</span>
                <span className={styles.secondaryArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <p className={styles.reassurance}>
              <span aria-hidden="true">◆</span>
              {heroContent.reassurance}
            </p>
          </div>
        </div>

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
      </div>
    </section>
  );
}
