import type { HeroContent } from "./hero.types";

export const heroContent: HeroContent = {
  eyebrow: "One connected business ecosystem",

  title: {
    primary: "Build with clarity.",
    secondary: "Operate with confidence.",
    accent: "Scale with structure.",
  },

  description:
    "AuraaGlide helps businesses choose the right structure, complete registrations, manage GST and tax, protect their brand, stay compliant and prepare for growth through one connected support system.",

  primaryAction: {
    label: "Talk to an Advisor",
    href: "/contact",
  },

  secondaryAction: {
    label: "Explore the Business Journey",
    href: "#business-journey",
  },

  reassurance:
    "Business registration, compliance, tax, protection and growth supportâ€”without unnecessary complexity.",

  railItems: [
    {
      label: "ROC",
      href: "/services/roc-compliance",
      description: "Company filings and annual compliance",
      enabled: true,
      order: 1,
    },
    {
      label: "GST",
      href: "/services/gst-registration",
      description: "Registration, returns and compliance",
      enabled: true,
      order: 2,
    },
    {
      label: "MSME",
      href: "/services/msme-registration",
      description: "Udyam registration and recognition",
      enabled: true,
      order: 3,
    },
    {
      label: "LLP",
      href: "/services/llp-registration",
      description: "LLP registration and filings",
      enabled: true,
      order: 4,
    },
    {
      label: "Trademark",
      href: "/services/trademark-registration",
      description: "Brand name and logo protection",
      enabled: true,
      order: 5,
    },
  ],

  image: {
    src: "/images/home/hero-advisory-office.png",
    alt:
      "Business owner reviewing registration, compliance and growth decisions with AuraaGlide",
  },
};
