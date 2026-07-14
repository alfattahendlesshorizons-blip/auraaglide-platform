import { ExternalLinkIcon } from "../icons/ExternalLinkIcon";
import { FooterIcon } from "../icons/FooterIcon";
import type { FooterContactAction } from "../site-footer.types";
import styles from "../SiteFooter.module.css";

export function FooterContactActions({ actions }: { actions: FooterContactAction[] }) {
  return <div className={styles.contactGrid}>{actions.filter((action) => action.enabled && action.href).map((action) => <a key={action.id} href={action.href} target={action.external ? "_blank" : undefined} rel={action.external ? "noreferrer" : undefined} className={styles.contactTile} data-motion={action.motion}><span className={styles.iconWrap}><FooterIcon type={action.id}/></span><span className={styles.contactCopy}><strong>{action.label}</strong><small>{action.supportingText}</small></span>{action.external ? <span className={styles.external}><ExternalLinkIcon/></span> : null}</a>)}</div>;
}
