import Image from "next/image";
import Link from "next/link";
import { DesktopNavbar } from "./DesktopNavbar";
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
            src="/images/brand/auraaglide-logo.png"
            alt="AuraaGlide Solutions"
            width={220}
            height={120}
            priority
            className={styles.logoImage}
          />
        </Link>

        <DesktopNavbar />
        <MobileNavigation />
      </nav>
    </header>
  );
}
