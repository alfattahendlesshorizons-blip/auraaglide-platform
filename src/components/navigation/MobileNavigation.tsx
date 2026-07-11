"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationContent } from "./navigation.data";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Navbar.module.css";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>("Services");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className={styles.mobileNav}>
      <div className={styles.mobileActions}>
        <ThemeToggle />

        <button
          type="button"
          className={`${styles.menuButton} ${
            open ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <div className={styles.mobileOverlay} onClick={close}>
          <div
            className={styles.mobileDrawer}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.mobileDrawerTop}>
              <p>Navigation</p>

              <button type="button" onClick={close}>
                Close
              </button>
            </div>

            <div className={styles.mobileGroups}>
              {navigationContent.groups.map((group) => {
                const isActive = activeGroup === group.label;

                return (
                  <div className={styles.mobileGroup} key={group.label}>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveGroup(isActive ? null : group.label)
                      }
                      aria-expanded={isActive}
                    >
                      <span>{group.label}</span>
                      <span>{isActive ? "−" : "+"}</span>
                    </button>

                    {isActive ? (
                      <div className={styles.mobileItems}>
                        <Link href={group.href} onClick={close}>
                          View all {group.label}
                        </Link>

                        {group.items.map((item) => (
                          <Link href={item.href} key={item.href} onClick={close}>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}

              {navigationContent.directLinks.map((link) => (
                <Link
                  className={styles.mobileDirect}
                  href={link.href}
                  key={link.href}
                  onClick={close}
                >
                  {link.label}
                  <span>↗</span>
                </Link>
              ))}
            </div>

            <div className={styles.mobileFooter}>
              <Link href="tel:+918595280874" onClick={close}>
                Call
              </Link>

              <Link
                href="https://wa.me/918595280874"
                target="_blank"
                onClick={close}
              >
                WhatsApp
              </Link>

              <Link
                href={navigationContent.cta.href}
                className={styles.mobileCta}
                onClick={close}
              >
                {navigationContent.cta.label}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
