import { contactConfig } from "@/config/contact.config";
import { FooterBrand } from "./components/FooterBrand";
import { FooterContactActions } from "./components/FooterContactActions";
import { FooterCta } from "./components/FooterCta";
import { FooterLegalBar } from "./components/FooterLegalBar";
import { FooterNavigation } from "./components/FooterNavigation";
import { getSiteFooterContent } from "./site-footer.repository";
import styles from "./SiteFooter.module.css";

export async function SiteFooter() {
  const content = await getSiteFooterContent();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <FooterCta cta={content.cta} />

        <div className={styles.actionRail}>
          <FooterContactActions actions={content.contactActions} />
        </div>

        <div className={styles.footerBody}>
          <div className={styles.brandColumn}>
            <FooterBrand brand={content.brand} />
          </div>

          <FooterNavigation groups={content.navigationGroups} />
        </div>

        <FooterLegalBar
          links={content.legalLinks}
          companyName={contactConfig.companyName}
        />
      </div>
    </footer>
  );
}
