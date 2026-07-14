import Image from "next/image";
import Link from "next/link";
import type { SiteFooterContent } from "../site-footer.types";
import styles from "../SiteFooter.module.css";

export function FooterBrand({ brand }: { brand: SiteFooterContent["brand"] }) {
  return <div className={styles.brand}><Link href="/" className={styles.logoLink}><Image src={brand.logoSrc} alt={brand.logoAlt} width={260} height={76} className={styles.logo}/></Link><p className={styles.brandStatement}>{brand.statement}</p></div>;
}
