import Image from "next/image";
import Link from "next/link";
import { DesktopNavbar } from "./DesktopNavbar";
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
            src={navigationContent.logo.src}
            alt={navigationContent.logo.alt}
            width={178}
            height={52}
            priority
          />
        </Link>

        <DesktopNavbar />
      </nav>
    </header>
  );
}
