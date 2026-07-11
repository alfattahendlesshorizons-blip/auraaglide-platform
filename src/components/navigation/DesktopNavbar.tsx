import Link from "next/link";
import { navigationContent } from "./navigation.data";
import { NavigationIconGraphic } from "./NavigationIconGraphic";
import styles from "./Navbar.module.css";

export function DesktopNavbar() {
  return (
    <div className={styles.desktop}>
      <div className={styles.links}>
        {navigationContent.groups.map((group) => (
          <div className={styles.group} key={group.label}>
            <Link href={group.href} className={styles.groupTrigger}>
              <span>{group.label}</span>
              <svg viewBox="0 0 12 8" aria-hidden="true">
                <path d="M1 1.5 6 6.5 11 1.5" />
              </svg>
            </Link>

            <div className={styles.megaMenu}>
              <div className={styles.megaHeader}>
                <div>
                  <p>{group.eyebrow}</p>
                  <h2>{group.description}</h2>
                </div>

                <Link href={group.href} className={styles.viewAll}>
                  View all {group.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>

              <div className={styles.megaBody}>
                <div className={styles.megaGrid}>
                  {group.items.map((item) => (
                    <Link
                      href={item.href}
                      className={styles.megaItem}
                      key={item.href}
                    >
                      <NavigationIconGraphic icon={item.icon} />

                      <span>
                        <strong>{item.label}</strong>
                        <small>{item.description}</small>
                      </span>

                      <span className={styles.itemArrow} aria-hidden="true">
                        ↗
                      </span>
                    </Link>
                  ))}
                </div>

                <aside className={styles.quickLinks}>
                  <p>Quick access</p>

                  {group.quickLinks.map((link) => (
                    <Link href={link.href} key={link.href}>
                      <span>{link.label}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </aside>
              </div>
            </div>
          </div>
        ))}

        {navigationContent.directLinks.map((link) => (
          <Link href={link.href} className={styles.directLink} key={link.href}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.searchPlaceholder}
          aria-label="Search AuraaGlide website"
          disabled
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>
        </button>

        <Link href={navigationContent.cta.href} className={styles.cta}>
          <span>{navigationContent.cta.label}</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}

