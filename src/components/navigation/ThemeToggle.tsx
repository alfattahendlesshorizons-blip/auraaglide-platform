"use client";

import { useTheme } from "@/providers/ThemeProvider";
import styles from "./Navbar.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className={styles.themeTrack}>
        <span
          className={`${styles.themeThumb} ${
            theme === "dark" ? styles.themeThumbDark : ""
          }`}
        />
      </span>

      <span className="sr-only">
        Current theme: {theme}
      </span>
    </button>
  );
}
