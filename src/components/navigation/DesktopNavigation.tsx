import Link from "next/link";
import { navigationContent } from "./navigation.data";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Navbar.module.css";

export function DesktopNavigation() {
  return (
    <div className={styles.desktopNav}>
      <div className={styles.desktopLinks}>
        {navigationContent.groups.map((group) => (
          <div className={styles.navGroup} key={group.label}>
            <Link href={group.href} className={styles.navLink}>
              {group.label}
              <span aria-hidden="true">⌄</span>
            </Link>

            <div className={styles.megaMenu}>
              <p className={styles.megaEyebrow}>
                Explore {group.label}
              </p>

              <div className={styles.megaItems}>
                {group.items.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <span>{item.label}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

        {navigationContent.directLinks.map((link) => (
          <Link className={styles.navLink} href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className={styles.desktopActions}>
        <ThemeToggle />

        <Link className={styles.navCta} href={navigationContent.cta.href}>
          {navigationContent.cta.label}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </div>
  );
}

