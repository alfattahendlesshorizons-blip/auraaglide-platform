export const plannedRoutes = new Set([
  "/about",
  "/approach/assessment",
  "/approach/discovery",
  "/approach/execution",
  "/approach/ongoing-support",
  "/approach/structure",
  "/contact",
  "/faq",
  "/industries",
  "/industries/agriculture-fpo",
  "/industries/ecommerce-retail",
  "/industries/healthcare",
  "/industries/manufacturing",
  "/industries/smes",
  "/industries/startups",
  "/resources",
  "/resources/entity-selection",
  "/resources/guides",
  "/resources/knowledge-hub",
  "/resources/updates",
  "/services",
  "/services/accounting",
  "/services/accounting-bookkeeping",
  "/services/annual-compliance",
  "/services/automation",
  "/services/brand-protection",
  "/services/business-advisory",
  "/services/business-agreements",
  "/services/business-automation",
  "/services/business-compliance",
  "/services/business-formation",
  "/services/business-growth",
  "/services/business-licences",
  "/services/business-planning",
  "/services/business-registration",
  "/services/business-restructuring",
  "/services/business-setup",
  "/services/company-registration",
  "/services/compliance-management",
  "/services/compliance-review",
  "/services/copyright-registration",
  "/services/crm",
  "/services/digital-growth",
  "/services/documentation-review",
  "/services/expansion",
  "/services/export-readiness",
  "/services/finance-tax",
  "/services/financial-reporting",
  "/services/fpo-formation",
  "/services/fssai-registration",
  "/services/funding-readiness",
  "/services/government-schemes",
  "/services/growth-readiness",
  "/services/gst-compliance",
  "/services/gst-registration",
  "/services/gst-return-filing",
  "/services/import-export",
  "/services/import-export-code",
  "/services/income-tax-return",
  "/services/investor-readiness",
  "/services/labour-compliance",
  "/services/legal-advisory",
  "/services/legal-documentation",
  "/services/legal-protection",
  "/services/licences-certifications",
  "/services/llp-registration",
  "/services/market-research",
  "/services/marketplace-enablement",
  "/services/msme-benefits",
  "/services/msme-registration",
  "/services/ongoing-support",
  "/services/opc-registration",
  "/services/private-limited-company",
  "/services/private-limited-company-registration",
  "/services/registrations",
  "/services/regulatory-support",
  "/services/roc-compliance",
  "/services/seo",
  "/services/startup-india-registration",
  "/services/tax-advisory",
  "/services/tax-compliance",
  "/services/tax-gst",
  "/services/tax-planning",
  "/services/trademark-registration",
  "/services/website-development",
  "/disclaimer",
  "/privacy",
  "/services/global-business",
  "/services/iso-certification",
  "/services/malaysia-company-registration",
  "/services/partnership-firm-registration",
  "/services/patent-registration",
  "/services/proprietorship-registration",
  "/services/section-8-company-registration",
  "/services/singapore-company-registration",
  "/services/tds-payroll",
  "/services/uae-company-setup",
  "/terms",
] as const);

export function isPlannedRoute(pathname: string) {
  return plannedRoutes.has(pathname as never);
}

export function getRouteContext(pathname: string) {
  if (pathname === "/contact") {
    return {
      eyebrow: "START WITH CLARITY",
      title: "A clearer first conversation is being prepared.",
      description:
        "The complete enquiry and consultation experience will connect directly with AuraaGlide's lead-management foundation.",
    };
  }

  if (pathname.startsWith("/services")) {
    return {
      eyebrow: "SERVICE DESTINATION IN PROGRESS",
      title: "This service journey is being structured with clarity.",
      description:
        "The final page will connect the service, related business context, practical guidance and the right next step.",
    };
  }

  if (pathname.startsWith("/industries")) {
    return {
      eyebrow: "INDUSTRY DESTINATION IN PROGRESS",
      title: "This industry experience is being shaped around real operating needs.",
      description:
        "The final page will explain the decisions, requirements and support relevant to this business context.",
    };
  }

  if (pathname.startsWith("/resources") || pathname === "/faq") {
    return {
      eyebrow: "KNOWLEDGE DESTINATION IN PROGRESS",
      title: "Practical guidance is being organised for easier decisions.",
      description:
        "This destination will bring together guides, updates, explainers and clear answers without publishing unfinished content.",
    };
  }

  if (pathname.startsWith("/approach")) {
    return {
      eyebrow: "ADVISORY METHOD IN PROGRESS",
      title: "This part of the advisory process is being documented.",
      description:
        "The final page will explain how AuraaGlide understands, structures and supports the relevant stage.",
    };
  }

  return {
    eyebrow: "PAGE IN PROGRESS",
    title: "This destination is being built with the same clarity as the platform.",
    description:
      "The route is planned and connected. Its complete content and experience will be published after review.",
  };
}
