"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { contactConfig } from "@/config/contact.config";
import { navigationContent } from "./navigation.data";
import { SiteSearch } from "./SiteSearch";
import styles from "./Navbar.module.css";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.2 3.8 10 7.3 8.2 9.5c1.3 2.6 3.7 5 6.3 6.3l2.2-1.8 3.5 2.8-1.2 2.4c-.5 1-1.6 1.5-2.7 1.2C9.8 18.7 5.3 14.2 3.6 7.7c-.3-1.1.2-2.2 1.2-2.7l2.4-1.2Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5 5 16.3a8.5 8.5 0 1 1 15.5-4.6Z"
      />
      <path
        d="M8.1 7.6c.2-.4.5-.5.9-.5h.5c.2 0 .4.1.5.5l.8 2c.1.3.1.5-.1.8l-.7.9c-.2.2-.1.5 0 .7 1 1.8 2.3 3.1 4.1 4 .2.1.5.2.7 0l1-.8c.2-.2.5-.2.8-.1l1.9.9c.3.1.5.4.4.7-.2 1.1-1 2-2 2.3-.8.2-1.8.1-3.2-.5-3.9-1.6-6.4-5.5-6.6-7.8-.1-1.2.3-2.3 1-3.1Z"
      />
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

            <SiteSearch
              mobile
              triggerLabel="Search AuraaGlide"
              onNavigate={close}
            />

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





