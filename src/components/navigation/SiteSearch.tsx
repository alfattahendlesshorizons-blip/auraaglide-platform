"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { searchSite } from "@/core/search";

import styles from "./SiteSearch.module.css";

type SiteSearchProps = {
  triggerClassName?: string;
  triggerLabel?: string;
  onNavigate?: () => void;
  mobile?: boolean;
};

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export function SiteSearch({
  triggerClassName = "",
  triggerLabel = "Search",
  onNavigate,
  mobile = false,
}: SiteSearchProps) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const results = useMemo(
    () => searchSite(query),
    [query],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 40);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");

        window.setTimeout(() => {
          triggerRef.current?.focus();
        }, 0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setQuery("");

    window.setTimeout(() => {
      triggerRef.current?.focus();
    }, 0);
  };

  const handleNavigate = () => {
    setOpen(false);
    setQuery("");
    onNavigate?.();
  };

  const overlay =
    mounted && open
      ? createPortal(
          <div
            className={styles.overlay}
            onMouseDown={close}
            role="presentation"
          >
            <section
              className={styles.dialog}
              role="dialog"
              aria-modal="true"
              aria-label="Search AuraaGlide"
              onMouseDown={(event) =>
                event.stopPropagation()
              }
            >
              <header className={styles.header}>
                <div className={styles.inputWrap}>
                  <SearchIcon />

                  <input
                    ref={inputRef}
                    type="search"
                    value={query}
                    onChange={(event) =>
                      setQuery(event.target.value)
                    }
                    placeholder="Search services, industries and resources"
                    aria-label="Search website"
                    autoComplete="off"
                  />

                  {query ? (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      aria-label="Clear search"
                    >
                      Clear
                    </button>
                  ) : null}
                </div>

                <button
                  type="button"
                  className={styles.close}
                  onClick={close}
                  aria-label="Close search"
                >
                  <span />
                  <span />
                </button>
              </header>

              <div className={styles.body}>
                <p className={styles.resultMeta}>
                  {query
                    ? `${results.length} matching result${
                        results.length === 1
                          ? ""
                          : "s"
                      }`
                    : "Popular destinations"}
                </p>

                {results.length > 0 ? (
                  <div className={styles.results}>
                    {results.map((result) => (
                      <Link
                        href={result.href}
                        key={result.id}
                        onClick={handleNavigate}
                        className={styles.result}
                      >
                        <span
                          className={styles.resultCopy}
                        >
                          <strong>
                            {result.label}
                          </strong>

                          {result.description ? (
                            <small>
                              {result.description}
                            </small>
                          ) : null}
                        </span>

                        <span
                          className={styles.resultType}
                        >
                          {result.type}
                        </span>

                        <span
                          className={styles.resultArrow}
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className={styles.empty}>
                    <strong>
                      No matching result found.
                    </strong>

                    <p>
                      Try GST, registration, startup,
                      compliance, trademark or industry.
                    </p>
                  </div>
                )}
              </div>

              <footer className={styles.footer}>
                <span>Press Esc to close</span>
                <span>AuraaGlide Search</span>
              </footer>
            </section>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={[
          styles.trigger,
          mobile ? styles.mobileTrigger : "",
          triggerClassName,
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Search AuraaGlide website"
      >
        <SearchIcon />

        {mobile ? <span>{triggerLabel}</span> : null}
      </button>

      {overlay}
    </>
  );
}
