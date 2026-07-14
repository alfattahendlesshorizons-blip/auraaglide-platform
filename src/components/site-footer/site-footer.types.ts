export type FooterAction = {
  label: string;
  href: string;
};

export type FooterContactActionId =
  | "call"
  | "whatsapp"
  | "instagram"
  | "facebook";

export type FooterContactAction = {
  id: FooterContactActionId;
  label: string;
  supportingText: string;
  href: string;
  external: boolean;
  enabled: boolean;
  motion: "signal" | "breathe" | "lens" | "highlight";
};

export type FooterNavigationGroup = {
  label: string;
  links: FooterAction[];
};

export type SiteFooterContent = {
  cta: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryAction: FooterAction;
    secondaryAction: FooterAction;
  };
  brand: {
    statement: string;
    logoSrc: string;
    logoAlt: string;
  };
  contactActions: FooterContactAction[];
  navigationGroups: FooterNavigationGroup[];
  legalLinks: FooterAction[];
};
