import Link from "next/link";
import type { FooterAction } from "../site-footer.types";
import styles from "../SiteFooter.module.css";

export function FooterLegalBar({ links, companyName }: { links: FooterAction[]; companyName: string }) {
  return <div className={styles.bottomBar}><p>© {new Date().getFullYear()} {companyName}. All rights reserved.</p><nav aria-label="Legal">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav></div>;
}
