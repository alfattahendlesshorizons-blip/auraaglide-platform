export interface ServiceRouteAlias {
  sourcePath: string;
  destinationPath: string;
  reason: "legacy" | "short-name" | "duplicate-intent";
}

export const serviceRouteAliases: readonly ServiceRouteAlias[] = [
  {
    sourcePath: "/services/private-limited-company",
    destinationPath: "/services/private-limited-company-registration",
    reason: "short-name",
  },
  {
    sourcePath: "/services/company-registration",
    destinationPath: "/services/private-limited-company-registration",
    reason: "duplicate-intent",
  },
  {
    sourcePath: "/services/import-export",
    destinationPath: "/services/import-export-code",
    reason: "short-name",
  },
];

export function getServiceRouteAlias(pathname: string) {
  return serviceRouteAliases.find((alias) => alias.sourcePath === pathname);
}
