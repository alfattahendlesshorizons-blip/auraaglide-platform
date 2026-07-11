"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { contactConfig } from "@/config/contact.config";
import { navigationContent } from "./navigation.data";
import styles from "./Navbar.module.css";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.5 4.5 9 8l-2 2.4c1.4 2.8 3.4 4.8 6.2 6.2l2.3-2 3.5 3.5-1.8 2.4c-.7.9-1.9 1.3-3 1-6.3-1.8-11.1-6.6-12.9-12.9-.3-1.1.1-2.3 1-3Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.4-4A8 8 0 1 1 20 11.7Z" />
      <path d="M8.3 7.8c.3-.3.7-.4 1-.1l1.2 1.6c.2.3.2.7 0 .9l-.8.9c.7 1.5 1.8 2.6 3.3 3.3l.9-.8c.3-.2.7-.2.9 0l1.6 1.2c.3.2.3.7.1 1-.7.9-1.8 1.3-2.9 1-3.4-1-6.1-3.7-7.1-7.1-.3-1.1.1-2.2 1-2.9Z" />
    </svg>
  );
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] =
    useState<string | null>("Services");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className={styles.mobileNav}>
      <button
        type="button"
        className={`${styles.menuButton} ${
          open ? styles.menuButtonOpen : ""
        }`}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="mobile-navigation-drawer"
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        <span />
        <span />
      </button>

      {open ? (
        <div
          className={styles.mobileOverlay}
          onClick={close}
          role="presentation"
        >
          <div
            id="mobile-navigation-drawer"
            className={styles.mobileDrawer}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className={styles.mobileDrawerTop}>
              <div>
                <span className={styles.mobileEyebrow}>
                  AuraaGlide
                </span>
                <p>Explore our business ecosystem</p>
              </div>

              <button
                type="button"
                className={styles.drawerClose}
                onClick={close}
                aria-label="Close navigation"
              >
                <span />
                <span />
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
                      <span aria-hidden="true">
                        {isActive ? "−" : "+"}
                      </span>
                    </button>

                    {isActive ? (
                      <div className={styles.mobileItems}>
                        <Link href={group.href} onClick={close}>
                          View all {group.label}
                          <span aria-hidden="true">↗</span>
                        </Link>

                        {group.items.map((item) => (
                          <Link
                            href={item.href}
                            key={item.href}
                            onClick={close}
                          >
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
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>

            <div className={styles.mobileFooter}>
              <div className={styles.mobileQuickActions}>
                <Link
                  href={contactConfig.phone.href}
                  onClick={close}
                  aria-label="Call AuraaGlide"
                  title="Call"
                >
                  <PhoneIcon />
                </Link>

                <Link
                  href={contactConfig.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                  aria-label="WhatsApp AuraaGlide"
                  title="WhatsApp"
                >
                  <WhatsAppIcon />
                </Link>
              </div>

              <Link
                href={navigationContent.cta.href}
                className={styles.mobileCta}
                onClick={close}
              >
                <span>{navigationContent.cta.label}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}


