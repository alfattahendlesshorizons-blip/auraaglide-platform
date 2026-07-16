import type { ReactNode } from "react";

import styles from "./HeroShell.module.css";

type HeroShellProps = {
  content: ReactNode;
  media?: ReactNode;
  footer?: ReactNode;
  className?: string;
  panelClassName?: string;
  contentClassName?: string;
  mediaClassName?: string;
  ariaLabelledBy?: string;
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function HeroShell({
  content,
  media,
  footer,
  className,
  panelClassName,
  contentClassName,
  mediaClassName,
  ariaLabelledBy,
}: HeroShellProps) {
  return (
    <section
      className={joinClasses(styles.section, className)}
      aria-labelledby={ariaLabelledBy}
    >
      <div className={joinClasses(styles.panel, panelClassName)}>
        <div className={styles.topEdge} aria-hidden="true" />
        <div className={styles.topBloom} aria-hidden="true" />
        <div className={styles.cornerLight} aria-hidden="true" />

        <div className={joinClasses(styles.content, contentClassName)}>
          {content}
        </div>

        <div className={joinClasses(styles.media, mediaClassName)}>
          {media}
        </div>

        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </section>
  );
}
