export type NavigationLink = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  label: string;
  href: string;
  items: NavigationLink[];
};

export type NavigationContent = {
  logo: {
    image: string;
    alt: string;
    href: string;
  };
  groups: NavigationGroup[];
  directLinks: NavigationLink[];
  cta: NavigationLink;
};
