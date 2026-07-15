import {
  getRouteContext,
  plannedRoutes,
} from "@/content/routes/planned-routes";

import type { RouteDefinition, RouteFamily } from "./route.contract";

function toLabel(pathname: string) {
  const lastSegment = pathname.split("/").filter(Boolean).at(-1) ?? "home";

  return lastSegment
    .split("-")
    .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

function getRouteFamily(pathname: string): RouteFamily {
  if (pathname === "/") return "home";
  if (pathname === "/about") return "company";
  if (pathname === "/contact") return "contact";
  if (pathname.startsWith("/approach")) return "approach";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/industries")) return "industries";
  if (pathname.startsWith("/resources") || pathname === "/faq") {
    return "resources";
  }
  if (
    pathname === "/privacy" ||
    pathname === "/terms" ||
    pathname === "/disclaimer"
  ) {
    return "legal";
  }

  return "system";
}

function getParentPath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length <= 1) return undefined;
  return `/${segments.slice(0, -1).join("/")}`;
}

const homeRoute: RouteDefinition = {
  pathname: "/",
  family: "home",
  label: "Home",
  contentState: "published",
  indexable: true,
  sitemap: true,
  priority: 1,
  changeFrequency: "weekly",
};

const plannedRouteDefinitions = Array.from(plannedRoutes).map<RouteDefinition>(
  (pathname) => ({
    pathname,
    family: getRouteFamily(pathname),
    label: toLabel(pathname),
    contentState: "planned",
    indexable: false,
    sitemap: false,
    priority: pathname.split("/").filter(Boolean).length === 1 ? 0.7 : 0.6,
    changeFrequency: "monthly",
    parentPath: getParentPath(pathname),
    contentKey: pathname.slice(1).replaceAll("/", "."),
  }),
);

export const routeManifest: readonly RouteDefinition[] = [
  homeRoute,
  ...plannedRouteDefinitions,
];

export function getRouteDefinition(pathname: string) {
  return routeManifest.find((route) => route.pathname === pathname);
}

export function getIndexableRoutes() {
  return routeManifest.filter(
    (route) => route.indexable && route.contentState === "published",
  );
}

export function getSitemapRoutes() {
  return routeManifest.filter(
    (route) => route.sitemap && route.contentState === "published",
  );
}

export function getRouteSeoFallback(pathname: string) {
  const route = getRouteDefinition(pathname);

  if (!route) return undefined;

  const context = pathname === "/" ? undefined : getRouteContext(pathname);

  return {
    title:
      pathname === "/"
        ? "AuraaGlide Solutions"
        : `${route.label} | AuraaGlide Solutions`,
    description:
      pathname === "/"
        ? "Connected business advisory, compliance, legal and growth support for businesses building with clarity."
        : context?.description ??
          "Connected business advisory, compliance, legal and growth support.",
    canonicalPath: pathname,
    indexable: route.indexable,
  };
}
