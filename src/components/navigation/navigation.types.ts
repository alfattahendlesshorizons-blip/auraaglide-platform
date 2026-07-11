export type NavigationIcon =
  | "setup"
  | "tax"
  | "legal"
  | "certificate"
  | "startup"
  | "industry"
  | "guide"
  | "update"
  | "knowledge"
  | "faq";

export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
  icon?: NavigationIcon;
};

export type NavigationGroup = {
  label: string;
  href: string;
  eyebrow: string;
  description: string;
  items: NavigationLink[];
  quickLinks: NavigationLink[];
};

export type NavigationContent = {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  groups: NavigationGroup[];
  directLinks: NavigationLink[];
  cta: NavigationLink;
};
