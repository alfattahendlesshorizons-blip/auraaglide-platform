import type { NavigationIcon } from "./navigation.types";
import styles from "./Navbar.module.css";

export function NavigationIconGraphic({
  icon,
}: {
  icon?: NavigationIcon;
}) {
  if (!icon) {
    return null;
  }

  const paths: Record<NavigationIcon, React.ReactNode> = {
    setup: (
      <>
        <path d="M4 11.5 12 6l8 5.5" />
        <path d="M6.5 11.5V19M17.5 11.5V19M10 14h4v5" />
        <path d="M5 20h14" />
      </>
    ),

    tax: (
      <>
        <path d="M7 4h10l2 3v13H5V7Z" />
        <path d="M8 10h8M8 14h5" />
      </>
    ),

    legal: (
      <>
        <path d="M12 4v16M6 7h12" />
        <path d="m6 7-3 6h6ZM18 7l-3 6h6Z" />
      </>
    ),

    certificate: (
      <>
        <path d="M7 4h10v12H7Z" />
        <path d="m9 20 3-4 3 4" />
        <path d="M10 8h4M10 11h4" />
      </>
    ),

    startup: (
      <>
        <path d="M8 16c-1.5 1-2.5 2.3-3 4 1.7-.5 3-1.5 4-3" />
        <path d="M9 15c3.5-7 7-9 11-10-1 4-3 7.5-10 11Z" />
        <path d="M13 11h.01" />
      </>
    ),

    industry: (
      <>
        <path d="M4 20V9l5 3V8l5 3V6l6 4v10Z" />
        <path d="M8 16h2M14 16h2" />
      </>
    ),

    guide: (
      <>
        <path d="M5 5h6c2 0 3 1 3 3v11c0-2-1-3-3-3H5Z" />
        <path d="M19 5h-5v14c0-2 1-3 3-3h2Z" />
      </>
    ),

    update: (
      <>
        <path d="M4 12a8 8 0 1 0 2-5" />
        <path d="M4 5v5h5" />
        <path d="M12 8v5l3 2" />
      </>
    ),

    knowledge: (
      <>
        <path d="M8 4h8l3 3v13H5V4Z" />
        <path d="M8 10h8M8 14h6" />
      </>
    ),

    faq: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M9.8 9a2.4 2.4 0 0 1 4.6 1c0 2-2.4 2-2.4 4" />
        <path d="M12 17h.01" />
      </>
    ),
  };

  return (
    <span className={styles.navIcon} aria-hidden="true">
      <svg viewBox="0 0 24 24">{paths[icon]}</svg>
      <span className={styles.navIconPulse} />
    </span>
  );
}
