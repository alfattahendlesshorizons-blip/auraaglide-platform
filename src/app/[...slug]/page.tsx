import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/navigation";
import { HomeBackground } from "@/design-system/background";
import { ActionLink } from "@/design-system/primitives/action-link";
import {
  getRouteContext,
  isPlannedRoute,
  plannedRoutes,
} from "@/content/routes/planned-routes";

import styles from "./page.module.css";

type PlannedRoutePageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

function toPath(slug: string[]) {
  return `/${slug.join("/")}`;
}

function toLabel(pathname: string) {
  const lastSegment = pathname.split("/").filter(Boolean).at(-1) ?? "page";

  return lastSegment
    .split("-")
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

export function generateStaticParams() {
  return Array.from(plannedRoutes).map((pathname) => ({
    slug: pathname.split("/").filter(Boolean),
  }));
}

export async function generateMetadata({
  params,
}: PlannedRoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pathname = toPath(slug);

  if (!isPlannedRoute(pathname)) {
    return {};
  }

  const context = getRouteContext(pathname);

  return {
    title: `${toLabel(pathname)} | AuraaGlide`,
    description: context.description,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function PlannedRoutePage({
  params,
}: PlannedRoutePageProps) {
  const { slug } = await params;
  const pathname = toPath(slug);

  if (!isPlannedRoute(pathname)) {
    notFound();
  }

  const context = getRouteContext(pathname);
  const label = toLabel(pathname);

  return (
    <>
      <HomeBackground />
      <Navbar />

      <main className={styles.main}>
        <section className={styles.panel}>
          <div className={styles.edge} aria-hidden="true" />

          <p className={styles.eyebrow}>{context.eyebrow}</p>

          <p className={styles.route}>{label}</p>

          <h1>{context.title}</h1>

          <p className={styles.description}>{context.description}</p>

          <div className={styles.status}>
            <span aria-hidden="true" />
            Planned route. Complete page content is not published yet.
          </div>

          <div className={styles.actions}>
            <ActionLink
              href="/contact"
              variant="primary"
              size="md"
              arrow="journey"
            >
              Start with Clarity
            </ActionLink>

            <Link className={styles.homeLink} href="/">
              Return to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
