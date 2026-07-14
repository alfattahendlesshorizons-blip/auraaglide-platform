import Link from "next/link";
import type { FooterNavigationGroup } from "../site-footer.types";
import styles from "../SiteFooter.module.css";

export function FooterNavigation({ groups }: { groups: FooterNavigationGroup[] }) {
  return <nav className={styles.linkGrid} aria-label="Footer navigation">{groups.map((group) => <div key={group.label} className={styles.linkGroup}><h3>{group.label}</h3><ul>{group.links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></div>)}</nav>;
}
