import Image from "next/image";
import Link from "next/link";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { navigationContent } from "./navigation.data";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Primary navigation">
        <Link
          href={navigationContent.logo.href}
          className={styles.logo}
          aria-label="AuraaGlide Solutions home"
        >
          <Image
            src={navigationContent.logo.image}
            alt={navigationContent.logo.alt}
            width={176}
            height={52}
            priority
          />
        </Link>

        <DesktopNavigation />
        <MobileNavigation />
      </nav>
    </header>
  );
}
