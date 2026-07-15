import { getRouteDefinition } from "@/core/routing";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function createBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

  segments.forEach((_, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const route = getRouteDefinition(href);

    breadcrumbs.push({
      label: route?.label ?? segments[index].replaceAll("-", " "),
      href,
    });
  });

  return breadcrumbs;
}

export function createBreadcrumbSchema(pathname: string) {
  const items = createBreadcrumbs(pathname);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, "https://auraaglide-platform-final.vercel.app").toString(),
    })),
  };
}
